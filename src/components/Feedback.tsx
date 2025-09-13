import React, { useEffect, useState, useMemo, useCallback, useRef, SetStateAction, Dispatch } from "react"
import { Avatar, Badge, Button, Grid, IconButton, Paper, TextField, ToggleButtonGroup, Typography, ToggleButton, CircularProgress } from "@mui/material"
import { useProfile, useUser, useViewAdmin } from "../auth/hooks"
import { Delete, Edit, Send, Comment as CommentIcon, Person, People, Save } from "@mui/icons-material"
import { Link } from "@reach/router"
import { gql, useMutation } from "@apollo/client"
import { API, graphqlOperation } from "aws-amplify"
import { getCommentLight, getFileRequestSubmission, commentsByDateLight, onCreateCommentLight, onUpdateCommentLight } from "./feedback.queries"
import { onDeleteComment } from "../graphql/d3/subscriptions"
import { compareDesc, formatDistanceToNow, isPast } from "date-fns"
import { getCloudFrontURL, getDisplayName } from "../utils"
import If from "./If"
import { ROUTES } from "../constants"
import { usePlayingState } from "./AudioPlayer/audio-player.context"
import { useAppStore } from "../store"
import { Observable } from "zen-observable-ts";

// Type definitions
type CommentProfile = {
  id: string;
  name?: string | null;
  displayName?: string | null;
  avatar?: string | null;
};

type CommentSubmission = {
  id: string;
  artist?: string | null;
  name?: string | null;
  email?: string | null;
};

type CommentAssignment = {
  id: string;
  playlistStartDate?: string | null;
  fileRequestPlaylistId?: string | null;
  playlist?: {
    id: string;
  } | null;
};

type CommentType = {
  id: string;
  content: string;
  email?: string | null;
  parentId?: string | null;
  type?: string | null;
  createdAt: string;
  updatedAt: string;
  profile: CommentProfile;
  submissionId?: string | null;
  submission?: CommentSubmission | null;
  assignmentId?: string | null;
  assignment?: CommentAssignment | null;
  workshopId?: string | null;
};

type SubmitCommentArgs = {
  parentId?: string | null;
  submissionId?: string | null;
  assignmentId?: string | null;
  workshopId?: string | null;
  recipientEmail?: string | null;
}

type WriteCommentFunctions = {
  submitComment: (args: SubmitCommentArgs) => (content: string) => (e: React.FormEvent) => void;
  removeComment: (comment: CommentType) => (e: React.MouseEvent) => void;
  editComment: (args: { commentId: string, content: string }) => (e: React.FormEvent) => void;
}

type WriteCommentProps = {
  editingContent?: string;
  submitComment: (content: string) => (e: React.FormEvent) => void;
  editing: boolean;
  replying: boolean;
  onDismiss: () => void;
};

type CommentProps = {
  writeCommentFunctions: WriteCommentFunctions;
  comment: CommentType;
  activeReplyId: string | null;
  setActiveReplyId: Dispatch<SetStateAction<string | null>>;
  children?: React.ReactNode;
};

type MyCommentProps = {
  writeCommentFunctions: WriteCommentFunctions;
  comment: CommentType;
  commentsByParentId: Map<string, CommentType[]>;
  activeReplyId: string | null;
  setActiveReplyId: Dispatch<SetStateAction<string | null>>;
};

type FeedbackSectionProps = {
  workshopId?: string;
  assignmentId?: string;
  submissionId?: string;
  requestedFeedback?: boolean;
  recipientEmail?: string;
  showAll?: boolean;
  showToggle?: boolean;
  showByMe?: boolean;
  onSuccess?: () => void;
};

const createCommentLight = /* GraphQL */ `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
    id
    createdAt
  }
}
`;

const updateCommentLight = /* GraphQL */ `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
    id
    content
    updatedAt
  }
}
`;

const deleteCommentLight = /* GraphQL */ `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
    id
  }
}
`;

const WriteComment: React.FC<WriteCommentProps> = ({ editingContent = '', submitComment, editing, replying, onDismiss }) => {
  const { profile } = useProfile()
  const { isWriting, setIsWriting } = useAppStore()
  const [isPlaying] = usePlayingState()
  const [commentContent, setCommentContent] = useState(editingContent)
  const [error, setError] = useState<Error | null>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onDismiss();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onDismiss]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      if (editing) {
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }
    }
  }, [editing]);

  useEffect(() => {
    setIsWriting(false)

    return () => {
      setIsWriting(false)
    }
  }, [])

  useEffect(() => {
    if (!!commentContent && !isWriting) {
      setIsWriting(true)
    }
    else if (!commentContent && !!isWriting) {
      setIsWriting(false)
    }
  }, [commentContent])

  const onSubmit = (e: React.FormEvent) => {
    try {
      submitComment(commentContent)(e)
      setCommentContent('')
      setError(null)
      setIsWriting(false)
    } catch (error) {
      console.error(error)
      setError(error as Error)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      onSubmit(e);
    }
  };

  return (
    <Paper
      elevation={0}
      sx={{ padding: editing || replying ? "10px 0" : "20px", marginLeft: replying ? '-3em' : 'initial' }}
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={onSubmit}>
      <Grid container wrap="nowrap" spacing={2}>
        <If condition={!editing}>
          <Grid item>
            <Avatar
              alt={getDisplayName(profile) || 'Anonymous'}
              src={profile?.avatar ? getCloudFrontURL(profile.avatar) : ''} />
          </Grid>
        </If>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <TextField
            id="filled-multiline-static"
            label={isWriting && !!commentContent && isPlaying ? "Keep writing. Playback will pause at the end." : `${!!editing ? 'Edit your' : 'Write a'} ${replying ? 'reply' : 'comment'}`}
            multiline
            variant="filled"
            fullWidth
            inputRef={inputRef}
            onKeyDown={handleKeyDown}
            inputProps={{ maxLength: 500 }}
            value={commentContent}
            helperText={error ? error.message : `${500 - commentContent.length} characters remaining`}
            onChange={e => setCommentContent(e.target.value)}
            error={!!error}
          />

        </Grid>
        <Grid item alignItems="end" justifyContent="start" style={{ paddingLeft: 0, padding: 0, display: "flex", marginBottom: "0.25em" }}>
          <IconButton
            sx={{ marginBottom: '1em' }}
            type="submit"
            aria-label="send">{!!editing ? <Save /> : <Send />}</IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

const Comment: React.FC<CommentProps> = ({ writeCommentFunctions, comment, activeReplyId, setActiveReplyId, children = [] }) => {
  const [editing, setEditing] = useState(false)
  const user = useUser()
  const [viewAdmin] = useViewAdmin()
  const isAuthor = comment?.email === user?.email;
  const isReplyActive = activeReplyId === comment.id;

  const showDeleteComment = !editing && !isReplyActive && (isAuthor || viewAdmin)
  const showEditComment = !isReplyActive && isAuthor

  const playlistId = comment?.assignment?.playlist?.id || comment?.assignment?.fileRequestPlaylistId;
  const basePathToTrack = playlistId ?
    ROUTES.playlist.getPath({ playlistId }) :
    ROUTES.assignmentPlaylist.getPath({ assignmentId: comment?.assignmentId });
  const startDate = comment?.assignment?.playlistStartDate;
  const canView = !!viewAdmin || (startDate ? isPast(new Date(startDate)) : true)

  const onDismiss = () => {
    setActiveReplyId(null);
    setEditing(false);
  }

  return (<Paper elevation={1} sx={{ p: 2, mb: 1 }} key={comment.id}>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Link to={`/app/profile/${comment.profile.id}`}>
          <Avatar
            alt={getDisplayName(comment?.profile) || 'Anonymous'}
            src={comment?.profile?.avatar ? getCloudFrontURL(comment.profile.avatar) : ''}
          />
        </Link>
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 style={{ margin: 0, textAlign: "left", wordWrap: 'break-word' }}>
          <Link to={`/app/profile/${comment.profile.id}`}>
            {comment?.profile?.displayName || comment?.profile?.name || 'Anonymous'}
          </Link>
          <span style={{ textAlign: "left", color: "gray" }}> – {formatDistanceToNow(new Date(comment.createdAt))} ago – </span>
          <If condition={!!comment?.submission?.id} fallbackContent={<em>Submission deleted</em>}>
            <If condition={canView} fallbackContent={<em style={{ wordWrap: 'break-word' }}>{comment?.submission?.name} by {comment?.submission?.artist}</em>}>
              <Link to={basePathToTrack + `?track=${comment?.submission?.id}`}>
                <em style={{ wordWrap: 'break-word' }}>{comment?.submission?.name} by {comment?.submission?.artist}</em>
              </Link>
            </If>
          </If>
        </h4>
        <If condition={!editing}>
          <Typography sx={{ textAlign: "left", pt: 1, wordWrap: 'break-word' }}>
            {comment.content}
          </Typography>
        </If>
        <If condition={isReplyActive || !!editing}>
          <WriteComment
            {...writeCommentFunctions}
            onDismiss={onDismiss}
            submitComment={(content) => (e) => {
              !!editing ?
                writeCommentFunctions.editComment({ commentId: comment.id, content })(e) :
                writeCommentFunctions.submitComment({
                  parentId: comment.id,
                  assignmentId: comment?.assignmentId,
                  submissionId: comment.submission?.id,
                  workshopId: comment?.workshopId,
                  recipientEmail: isReplyActive ? comment?.email : comment?.submission?.email
                })(content)(e)
              onDismiss();
            }}
            editing={editing}
            replying={isReplyActive}
            editingContent={!!editing ? comment.content : ''}
          />
        </If>
        <If condition={!editing}>
          <Button onClick={() => {
            setActiveReplyId(isReplyActive ? null : comment.id)
          }}>{isReplyActive ? 'Dismiss' : 'Reply To'}</Button>
        </If>
        <If condition={showEditComment && !editing}>
          <IconButton onClick={() => {
            setActiveReplyId(null);
            setEditing(true);
          }}><Edit />
          </IconButton>
        </If>
        <If condition={showEditComment && editing}>
          <Button onClick={onDismiss}>Dismiss</Button>
        </If>
        {showDeleteComment ?
          <IconButton
            type="button"
            onClick={writeCommentFunctions.removeComment(comment)}>
            <Delete />
          </IconButton> : null}
        {comment.createdAt !== comment.updatedAt && (
          <p style={{ textAlign: "left", color: "gray" }}>Updated {formatDistanceToNow(new Date(comment.updatedAt))} ago</p>
        )}
      </Grid>
    </Grid>
    {children}
  </Paper>)
}

const MyComment: React.FC<MyCommentProps> = ({ writeCommentFunctions, comment, commentsByParentId, activeReplyId, setActiveReplyId }) => {
  const childComments = (commentsByParentId.get(comment.id) || []).sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  return (
    <Comment
      writeCommentFunctions={writeCommentFunctions}
      comment={comment}
      activeReplyId={activeReplyId}
      setActiveReplyId={setActiveReplyId}
    >
      {childComments.map((childComment) => (
        <MyComment
          key={childComment.id}
          writeCommentFunctions={writeCommentFunctions}
          comment={childComment}
          commentsByParentId={commentsByParentId}
          activeReplyId={activeReplyId}
          setActiveReplyId={setActiveReplyId} />
      ))
      }
    </Comment >
  )
}

const FeedbackSection: React.FC<FeedbackSectionProps> = ({
  workshopId,
  assignmentId,
  submissionId,
  requestedFeedback,
  recipientEmail,
  showAll = true,
  showToggle = true,
  showByMe = false,
  onSuccess = () => { } }) => {
  const user = useUser()
  const { profile } = useProfile()
  const [comments, setComments] = useState<CommentType[]>([])
  const [showAllComments, setShowAllComments] = useState(showAll)
  const [loading, setLoading] = useState(false)
  const [lastVisit, setLastVisit] = useState<Date | null>(null)
  const [activeReplyId, setActiveReplyId] = useState<string | null>(null);

  const [
    createCommentRequest,
    { error: createCommentRequestError, data: createCommentRequestData }
  ] = useMutation(gql(createCommentLight), {
    onCompleted: (data: { createComment: { id: string } }) => {
      const newCommentId = data.createComment.id;
      if (!newCommentId) return;

      (async () => {
        try {
          const result = await API.graphql(graphqlOperation(getCommentLight, { id: newCommentId })) as { data: { getComment: CommentType } };
          const newFullComment = result.data.getComment;
          if (newFullComment) {
            setComments(items => [...items, newFullComment].sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt))));
          }
        } catch (error) {
          console.error("Error fetching new comment:", error);
        }
      })();
    }
  })

  const [
    deleteCommentRequest,
    { error: deleteCommentRequestError, data: deleteCommentRequestData }
  ] = useMutation(gql(deleteCommentLight), {
    onCompleted: (data: { deleteComment: { id: string } }) => {
      const deletedCommentId = data.deleteComment?.id;
      if (!deletedCommentId) return;
      setComments(items => {
        const allIdsToDelete = new Set([deletedCommentId]);
        let changed = true;
        while (changed) {
          changed = false;
          items.forEach(item => {
            if (item.parentId && allIdsToDelete.has(item.parentId) && !allIdsToDelete.has(item.id)) {
              allIdsToDelete.add(item.id);
              changed = true;
            }
          });
        }
        return items.filter(item => !allIdsToDelete.has(item.id));
      });
    }
  })

  const [
    updateCommentRequest,
    { error: updateCommentRequestError, data: updateCommentRequestData }
  ] = useMutation(gql(updateCommentLight), {
    onCompleted: (data: { updateComment: { id: string, content: string, updatedAt: string } }) => {
      const updatedComment = data.updateComment;
      setComments(items => {
        const toUpdateIndex = items.findIndex(item => item.id === updatedComment.id);
        if (toUpdateIndex === -1) {
          console.warn("Couldn't find comment to update in local state");
          return items;
        }

        const newItems = [...items];
        newItems[toUpdateIndex] = {
          ...items[toUpdateIndex],
          content: updatedComment.content,
          updatedAt: updatedComment.updatedAt
        };

        return newItems.sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)));
      });
    }
  })

  const isFeedbackPage = !assignmentId && !submissionId;
  const isSubmissionsPage = assignmentId && !submissionId;
  const isDefaultPlaylistPage = assignmentId && submissionId;
  const isCustomPlaylistPage = !assignmentId && submissionId;
  const isGiveFeedbackPage = assignmentId && submissionId;

  useEffect(() => {
    if (isFeedbackPage) {
      const lastVisitFromLocalStorage = localStorage.getItem('lastFeedbackVisit');
      if (lastVisitFromLocalStorage) {
        setLastVisit(new Date(lastVisitFromLocalStorage));
      }
      localStorage.setItem('lastFeedbackVisit', new Date().toISOString());
    }
  }, [isFeedbackPage]);

  // Effect for fetching data
  useEffect(() => {
    if (!profile) return;

    let query: string = commentsByDateLight;
    let variables: object = {};

    if (isFeedbackPage) {
      const workshopIds = profile?.memberships?.items
        ?.filter(item => item?.status === "ACTIVE")
        .map(item => item!.workshopId) || [];
      query = commentsByDateLight;
      variables = {
        limit: 50,
        type: "Comment",
        sortDirection: "DESC",
        filter: { or: workshopIds.map(id => ({ workshopId: { eq: id } })) }
      };
    } else if (isSubmissionsPage) {
      query = commentsByDateLight;
      variables = {
        type: "Comment",
        sortDirection: "DESC",
        filter: { assignmentId: { eq: assignmentId } }
      };
    } else if (isCustomPlaylistPage || isDefaultPlaylistPage || isGiveFeedbackPage) {
      query = getFileRequestSubmission;
      variables = { id: submissionId };
    }

    const fetchComments = async () => {
      setLoading(true);
      try {
        const result = await API.graphql({ query, variables }) as { data: any };
        if (isFeedbackPage || isSubmissionsPage) {
          setComments(result?.data?.commentsByDate?.items || []);
        } else if (isCustomPlaylistPage || isDefaultPlaylistPage || isGiveFeedbackPage) {
          setComments(result?.data?.getFileRequestSubmission?.comments?.items || []);
        } else {
          const result = await API.graphql({ query, variables }) as { data: any };
          setComments(result?.data?.listComments?.items || []);
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
      setLoading(false);
    };

    fetchComments();
  }, [profile, assignmentId, submissionId, isFeedbackPage, isSubmissionsPage, isCustomPlaylistPage, isDefaultPlaylistPage, isGiveFeedbackPage]);

  // Effect for subscriptions
  useEffect(() => {
    if (!profile) return;

    if (isCustomPlaylistPage || isDefaultPlaylistPage || isGiveFeedbackPage) {
      return; // No subscriptions on these pages for now
    }

    let subscriptionVariables: { filter?: object } = {};

    if (isFeedbackPage) {
      const workshopIds = profile?.memberships?.items
        ?.filter(item => item?.status === "ACTIVE")
        .map(item => item!.workshopId) || [];
      subscriptionVariables = { filter: { or: workshopIds.map(id => ({ workshopId: { eq: id } })) } };
    } else if (isSubmissionsPage) {
      subscriptionVariables = { filter: { assignmentId: { eq: assignmentId } } };
    }

    const createSub = (API.graphql(graphqlOperation(onCreateCommentLight, subscriptionVariables)) as Observable<{ value: { data: { onCreateComment: CommentType } } }>).subscribe({
      next: ({ value }) => {
        if (value.data.onCreateComment) {
          setComments(items => [...items, value.data.onCreateComment].sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt))));
        }
      }
    });

    const updateSub = (API.graphql(graphqlOperation(onUpdateCommentLight, subscriptionVariables)) as Observable<{ value: { data: { onUpdateComment: CommentType } } }>).subscribe({
      next: ({ value }) => {
        if (!value.data.onUpdateComment) {
          console.warn("Received null payload from onUpdateComment subscription.");
          return;
        }
        setComments(items => {
          const toUpdateIndex = items.findIndex(item => item.id === value.data.onUpdateComment.id);
          if (toUpdateIndex === -1) {
            return [...items, value.data.onUpdateComment];
          }
          return [...items.slice(0, toUpdateIndex), value.data.onUpdateComment, ...items.slice(toUpdateIndex + 1)].sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)));
        });
      }
    });

    const deleteSub = (API.graphql(graphqlOperation(onDeleteComment, subscriptionVariables)) as Observable<{ value: { data: { onDeleteComment: { id: string } } } }>).subscribe({
      next: ({ value }) => {
        const deletedCommentId = value.data.onDeleteComment?.id;
        if (!deletedCommentId) {
          console.warn("Received null payload from onDeleteComment subscription.");
          return;
        }
        setComments(items => {
          const allIdsToDelete = new Set([deletedCommentId]);
          let changed = true;
          while (changed) {
            changed = false;
            items.forEach(item => {
              if (item.parentId && allIdsToDelete.has(item.parentId) && !allIdsToDelete.has(item.id)) {
                allIdsToDelete.add(item.id);
                changed = true;
              }
            });
          }
          return items.filter(item => !allIdsToDelete.has(item.id));
        });
      }
    });

    return () => {
      createSub.unsubscribe();
      updateSub.unsubscribe();
      deleteSub.unsubscribe();
    };
  }, [profile, assignmentId, isFeedbackPage, isSubmissionsPage, isCustomPlaylistPage, isDefaultPlaylistPage, isGiveFeedbackPage]);

  useEffect(() => {
    if (createCommentRequestData) {
      onSuccess();
    }
  }, [createCommentRequestData]);

  const submitComment = (args: SubmitCommentArgs) => (content = '') => (e: React.FormEvent) => {
    e.preventDefault();
    const input = {
      email: user?.email,
      assignmentId: assignmentId || args.assignmentId,
      submissionId: submissionId || args.submissionId,
      content,
      parentId: args.parentId,
      workshopId: workshopId || args.workshopId,
      type: "Comment",
      recipientEmail: args.recipientEmail
    };
    createCommentRequest({ variables: { input } });
  };

  const removeComment = (comment: CommentType) => (e: React.MouseEvent) => {
    e.preventDefault();
    const input = { id: comment.id };
    if (comments.filter(c => c.parentId === comment.id).length > 0) {
      updateCommentRequest({ variables: { input: { ...input, content: `[COMMENT WAS DELETED]` } } });
    } else {
      deleteCommentRequest({ variables: { input } });
    }
  };

  const editComment = ({ commentId, content }: { commentId: string, content: string }) => (e: React.FormEvent) => {
    const input = { id: commentId, content };
    updateCommentRequest({ variables: { input } });
  };

  const mySubmissionIds = useMemo(() =>
    profile?.submissions?.items
      ?.filter((item): item is NonNullable<typeof item> => !!item)
      .map((item) => item.id) || [],
    [profile]
  );

  const commentsForMe = useMemo(() =>
    comments.filter(c => c.submissionId && mySubmissionIds.includes(c.submissionId)),
    [comments, mySubmissionIds]
  );

  const filteredComments = (isFeedbackPage && !showAllComments) ? commentsForMe :
    comments.filter(item => {
      if (showAllComments) return true;
      if (showByMe) {
        return item?.email === user.email;
      }
      else if (item?.submission?.email === user.email) {
        return true;
      }
      return false;
    }).sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)));

  const commentsByParentId = useMemo(() => {
    const map = new Map<string, CommentType[]>();
    filteredComments.forEach(comment => {
      if (!comment.parentId) return;
      const children = map.get(comment.parentId) || [];
      children.push(comment);
      map.set(comment.parentId, children);
    });
    return map;
  }, [filteredComments]);

  const parentComments = filteredComments.filter(c => c.parentId == null);

  return (
    <Grid container sx={{ mt: 2, pb: 6 }}>
      <Grid item xs={12} >
        <Typography variant="h6" component="h3">
          Feedback{' '}
          <Badge badgeContent={
            isFeedbackPage && lastVisit ?
              filteredComments.filter(comment => new Date(comment.createdAt) > new Date(lastVisit)).length :
              filteredComments.length || 0
          } color="secondary">
            <CommentIcon />
          </Badge>
        </Typography>
        <If condition={!loading} fallbackContent={<CircularProgress />}>
          <If condition={!!showToggle}>
            <ToggleButtonGroup
              exclusive
              value={!!showAllComments ? "all" : "me"}
              onChange={(_, value) => setShowAllComments(value === "all")}
              sx={{ float: "right" }}>
              <ToggleButton value="me" aria-label="For Me">For Me <Person /></ToggleButton>
              <ToggleButton value="all" aria-label="Show All" disabled={!showAll}>All <People /></ToggleButton>
            </ToggleButtonGroup>
          </If>
          <If condition={!!submissionId}>
            <WriteComment onDismiss={() => {}} submitComment={submitComment({ submissionId, assignmentId, workshopId, recipientEmail })} editing={false} replying={false} />
          </If>
          {parentComments && parentComments
            .map(comment => (
              <MyComment
                key={comment.id}
                writeCommentFunctions={{ submitComment, removeComment, editComment }}
                comment={comment}
                commentsByParentId={commentsByParentId}
                activeReplyId={activeReplyId}
                setActiveReplyId={setActiveReplyId} />
            )
            )}
        </If>

      </Grid>

    </Grid>)
}

export { WriteComment, Comment, MyComment, FeedbackSection }