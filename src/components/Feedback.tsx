import React, { useEffect, useState } from "react"
import { Avatar, Badge, Button, Grid, IconButton, Paper, TextField, ToggleButtonGroup, Typography, ToggleButton, CircularProgress } from "@mui/material"
import { useProfile, useUser, useViewAdmin } from "../auth/hooks"
import { Delete, Edit, Send, Comment as CommentIcon, Person, People, Save } from "@mui/icons-material"
import { Link } from "@reach/router"
import { gql, useMutation } from "@apollo/client"
import { createComment, deleteComment, updateComment } from "../graphql/d3/mutations"
// import { createMention } from "../graphql/d3/mutations"
import { API, graphqlOperation } from "aws-amplify"
import { listComments, commentsByDate, getFileRequestSubmission } from "./feedback.queries"
import { compareDesc, formatDistanceToNow, isPast } from "date-fns"
import { onCreateComment, onDeleteComment, onUpdateComment } from "../graphql/d3/subscriptions"
import { getCloudFrontURL, getDisplayName } from "../utils"
import If from "./If"
import { ROUTES } from "../constants"
import { usePlayingState } from "./AudioPlayer/audio-player.context"
import { useAppStore } from "../store"

const WriteComment = ({ editingContent = '', submitComment, editing, replying }) => {
  const { profile } = useProfile()
  const { isWriting, setIsWriting } = useAppStore()
  const [isPlaying] = usePlayingState()
  const [commentContent, setCommentContent] = useState(editingContent)
  const [error, setError] = useState(null)

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

  const onSubmit = e => {
    try {
      submitComment(commentContent)(e)
      setCommentContent('')
      setError(null)
      setIsWriting(false)
    } catch (error) {
      console.error(error)
      setError(error)
    }
  }

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
            inputProps={{ maxLength: 500 }}
            value={commentContent}
            helperText={error ? error.message : `${500 - commentContent.length} characters remaining`}
            onChange={e => setCommentContent(e.target.value)}
            error={!!error}
          // disabled={!!isWriting && !commentContent}
          />

        </Grid>
        <Grid item alignItems="end" justifyContent="start" style={{ paddingLeft: 0, padding: 0, display: "flex", marginBottom: "0.25em" }}>
          <IconButton
            // disabled={!!isWriting && !commentContent}
            sx={{ marginBottom: '1em' }}
            type="submit"
            aria-label="send">{!!editing ? <Save /> : <Send />}</IconButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

const Comment = ({ writeCommentFunctions, comment, currentTrackMetaData, children = [] }) => {
  const [showWriteComment, setShowWriteComment] = useState(false)
  const [editing, setEditing] = useState(false)
  const [replying, setReplying] = useState(false)
  const user = useUser()
  const [viewAdmin] = useViewAdmin()
  const isAuthor = comment?.email === user?.email;
  const showDeleteComment = !editing && !showWriteComment && (isAuthor || viewAdmin) // this will be admin or owner
  const showEditComment = !showWriteComment && isAuthor // this will be owner
  const basePathToTrack = comment?.assignment?.playlist ?
    ROUTES.playlist.getPath({ playlistId: comment.assignment.playlist.id }) :
    ROUTES.assignmentPlaylist.getPath({ assignmentId: comment?.assignmentId });
  const startDate = comment?.assignment?.playlistStartDate;
  const canView = !!viewAdmin || (startDate ? isPast(new Date(startDate)) : true)

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
          <If condition={comment?.submission?.id} fallbackContent={<em>Submission deleted</em>}>
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
        <If condition={!!showWriteComment || !!editing}>
          <WriteComment
            {...writeCommentFunctions}
            submitComment={(content) => (e) => {
              !!editing ?
                writeCommentFunctions.editComment({ commentId: comment.id, content })(e) :
                writeCommentFunctions.submitComment({
                  parentId: comment.id,
                  assignmentId: comment?.assignmentId,
                  submissionId: comment.submission.id,
                  workshopId: comment?.workshopId,
                  recipientEmail: replying ? comment?.email : comment?.submission?.email
                })(content)(e)
              setShowWriteComment(false)
              setEditing(false)
              setReplying(false)
            }}
            editing={editing}
            replying={replying}
            editingContent={!!editing ? comment.content : ''}
          />
        </If>
        <If condition={!editing}>
          <Button onClick={() => {
            setShowWriteComment(!showWriteComment)
            setReplying(!replying)
          }}>{showWriteComment ? 'Dismiss' : 'Reply To'}</Button>
        </If>
        <If condition={showEditComment && !editing}>
          <IconButton onClick={() => {
            setShowWriteComment(false)
            setReplying(false)
            setEditing(true)
          }}><Edit />
          </IconButton>
        </If>
        <If condition={showEditComment && editing}>
          <Button onClick={() => {
            setShowWriteComment(false)
            setEditing(false)
            setReplying(false)
          }}>Dismiss</Button>
        </If>
        {showDeleteComment ?
          <IconButton
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

const MyComment = ({ writeCommentFunctions, comment, allComments = [], audioLists = [] }) => {
  const childComments = () => allComments.filter(c => c.parentId === comment.id)
  return (
    <Comment
      writeCommentFunctions={writeCommentFunctions}
      comment={comment}
      currentTrackMetaData={comment.submission}>
      {childComments().map((childComment) => (
        <MyComment
          key={childComment.id}
          writeCommentFunctions={writeCommentFunctions}
          comment={childComment}
          allComments={allComments}
          audioLists={audioLists} />
      ))
      }
    </Comment >
  )
}

const FeedbackSection = ({
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
  const [] = useState('')
  const [comments, setComments] = useState([])
  const [showAllComments, setShowAllComments] = useState(showAll)
  const [loading, setLoading] = useState(false)
  const [commentsForMe, setCommentsForMe] = useState([])

  const [
    createCommentRequest,
    { error: createCommentRequestError, data: createCommentRequestData }
  ] = useMutation(gql(createComment))

  // const [
  //   createMentionRequest,
  //   { error: createMentionRequestError, data: createMentionRequestData }
  // ] = useMutation(gql(createMention))

  const [
    deleteCommentRequest,
    { error: deleteCommentRequestError, data: deleteCommentRequestData }
  ] = useMutation(gql(deleteComment))

  const [
    updateCommentRequest,
    { error: updateCommentRequestError, data: updateCommentRequestData }
  ] = useMutation(gql(updateComment))

  const isFeedbackPage = !assignmentId && !submissionId;
  const isSubmissionsPage = assignmentId && !submissionId;
  const isDefaultPlaylistPage = assignmentId && submissionId;
  const isCustomPlaylistPage = !assignmentId && submissionId;
  const isGiveFeedbackPage = assignmentId && submissionId;

  useEffect(() => {
    if (!profile) return;
    let query = listComments;
    let variables = {}
    let myCommentsVariables = {};

    if (isFeedbackPage) {
      // show all feedback from all workshops the user has an active membership
      const workshopIds = profile?.memberships?.items
        ?.filter(item => item.status === "ACTIVE")
        ?.map(item => item.workshopId) || []

      const mySubmissionIds = profile?.submissions?.items?.map(item => item?.id) || [];

      query = commentsByDate
      variables = {
        limit: 250,
        type: "Comment",
        sortDirection: "DESC",
        filter: {
          or: workshopIds.map(id => ({ workshopId: { eq: id } })),
        }
      }

      myCommentsVariables = {
        ...variables,
        limit: 500,
        filter: {
          or: mySubmissionIds.map(id => ({ submissionId: { eq: id } }))
        }
      }
    }

    else if (isSubmissionsPage) {
      query = commentsByDate
      variables = {
        type: "Comment",
        sortDirection: "DESC",
        filter: { assignmentId: { eq: assignmentId } }
      }
    }

    // playlist page
    else if (isCustomPlaylistPage || isDefaultPlaylistPage || isGiveFeedbackPage) {
      query = getFileRequestSubmission
      variables = {
        id: submissionId
      }
    }

    const fetchComments = async () => {
      setLoading(true)
      const result = await API.graphql({
        query,
        variables
      })

      // global feedback page
      if (isFeedbackPage || isSubmissionsPage) {
        setComments(result?.data?.commentsByDate?.items)
        if (isFeedbackPage) {
          const myComments = await API.graphql({
            query: commentsByDate,
            variables: myCommentsVariables
          })

          setCommentsForMe(myComments?.data?.commentsByDate?.items);
        }
      }
      else if (isCustomPlaylistPage || isDefaultPlaylistPage || isGiveFeedbackPage) {
        setComments(result?.data?.getFileRequestSubmission?.comments?.items)
      }
      else {
        setComments(result?.data?.listComments?.items)
      }
      setLoading(false)
    }

    fetchComments()

    const createSub = API.graphql(graphqlOperation(onCreateComment, { filter: variables.filter })).subscribe({
      next: ({ value }) => {
        setComments(
          (items) => [...items, value.data.onCreateComment]
            .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt))))
      }
    })

    const updateSub = API.graphql(graphqlOperation(onUpdateComment, { filter: variables.filter })).subscribe({
      next: ({ value }) => {
        setComments(items => {
          const toUpdateIndex = items.findIndex(item => item.id === value.data.onUpdateComment.id)
          if (toUpdateIndex === - 1) { // If the todo doesn't exist, treat it like an "add"
            return [...items, value.data.onUpdateComment]
          }
          return [...items.slice(0, toUpdateIndex), value.data.onUpdateComment, ...items.slice(toUpdateIndex + 1)].sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
        })
      }
    })

    const deleteSub = API.graphql(graphqlOperation(onDeleteComment, { filter: variables.filter })).subscribe({
      next: ({ value }) => {
        setComments(items => {
          const toDeleteIndex = items.findIndex(item => item.id === value.data.onDeleteComment.id)
          return [...items.slice(0, toDeleteIndex), ...items.slice(toDeleteIndex + 1)].sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))
        })
      }
    })

    return () => {
      createSub.unsubscribe()
      updateSub.unsubscribe()
      deleteSub.unsubscribe()
    }
  }, [submissionId, profile])

  useEffect(() => {
    if (createCommentRequestData) {
      onSuccess()
    }
  }, [createCommentRequestData])


  const submitComment = ({ parentId, submissionId: parentSubmissionId, assignmentId: parentAssignmentId, workshopId: parentWorkshopId, recipientEmail }) =>
    (content = '') => (e) => {
      e.preventDefault()
      const input = {
        email: user?.email,
        assignmentId: assignmentId || parentAssignmentId,
        submissionId: submissionId || parentSubmissionId,
        content,
        parentId,
        workshopId: workshopId || parentWorkshopId,
        type: "Comment",
        recipientEmail
      }
      return createCommentRequest({ variables: { input } })
      // .then((resp) => {
      //   if (resp?.data?.createComment?.id) {
      //     return createMentionRequest({
      //       variables: {
      //         input: {
      //           email: user?.email,
      //           commentId: resp?.data?.createComment?.id
      //         }
      //       }
      //     })
      //   }
      // })
    }

  const removeComment = comment => (e) => {
    e.preventDefault()
    const input = {
      id: comment.id
    }

    if (comments.filter(c => c.parentId === comment.id).length > 0) {
      return updateCommentRequest({ variables: { input: { ...input, content: `[COMMENT WAS DELETED]` } } })
    }
    return deleteCommentRequest({ variables: { input } })
  }

  const editComment = ({ commentId, content }) => e => {
    const input = {
      id: commentId,
      content
    }
    return updateCommentRequest({ variables: { input } })
  }

  const filteredComments = (isFeedbackPage && !showAllComments) ? commentsForMe :
    comments.filter(item => {
      if (showAllComments) return item
      if (showByMe) {
        if (item?.email === user.email) return item
      }
      else if (item?.submission?.email === user.email) return item
    }).sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))

  const parentComments = filteredComments.filter(c => c.parentId == null)
  return (
    <Grid container sx={{ mt: 2, pb: 6 }}>
      <Grid item xs={12} >
        <Typography variant="h6" component="h3">
          Feedback{' '}
          <Badge badgeContent={filteredComments.length || 0} color="secondary">
            <CommentIcon />
          </Badge>
        </Typography>
        <If condition={!loading} fallbackContent={<CircularProgress />}>
          {/* JUST allow comments on any track for now. */}
          {/* <If condition={requestedFeedback || !!comments.length || !submissionId} fallbackContent={<Typography><em>Feedback not requested here.</em></Typography>}> */}
          <If condition={!!showToggle}>
            <ToggleButtonGroup
              exclusive
              value={!!showAllComments ? "all" : "me"}
              onChange={(e, value) =>
                setShowAllComments(value === "all")}
              sx={{ float: "right" }}>
              <ToggleButton value="me" aria-label="For Me">For Me <Person /></ToggleButton>
              <ToggleButton value="all" aria-label="Show All" disabled={!showAll}>All <People /></ToggleButton>
            </ToggleButtonGroup>
          </If>
          <If condition={!!submissionId}>
            <WriteComment submitComment={submitComment({ submissionId, assignmentId, workshopId, recipientEmail })} />
          </If>
          {parentComments && parentComments
            .map(comment => (
              <MyComment
                key={comment.id}
                writeCommentFunctions={{ submitComment, removeComment, editComment }}
                comment={comment}
                allComments={comments} />
            )
            )}
          {/* </If> */}
        </If>

      </Grid>

    </Grid>)
}

export { WriteComment, Comment, MyComment, FeedbackSection }