import React, { useEffect, useState } from "react"
import { Avatar, Badge, Button, ButtonGroup, Card, CardContent, Divider, Grid, IconButton, Paper, TextField, ToggleButtonGroup, Typography, ToggleButton } from "@mui/material"
import { useIsAdmin, useUser } from "../auth/hooks"
import { Close, Delete, Edit, Send, Comment as CommentIcon, Person, People } from "@mui/icons-material"
import { Link } from "@reach/router"
import { gql, useMutation, useQuery } from "@apollo/client"
import { createComment, deleteComment, updateComment } from "../graphql/mutations"
import { API, graphqlOperation } from "aws-amplify"
import { listComments, listFileRequestSubmissions } from "../graphql/queries"
import { compareDesc, formatDistanceToNow } from "date-fns"
import { onCreateComment, onDeleteComment, onUpdateComment } from "../graphql/subscriptions"

const WriteComment = ({ commentContent, setCommentContent, submitComment }) => {
  const user = useUser()

  return (
    <Paper style={{ padding: "40px 20px" }} component="form" noValidate autoComplete="off" onSubmit={submitComment}>
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar
            alt={user.fullName}
            src={user.avatar}
          />
        </Grid>
        <Grid justifyContent="left" item xs zeroMinWidth>
          <TextField
            id="filled-multiline-static"
            label="Write a comment"
            multiline
            variant="filled"
            fullWidth
            value={commentContent}
            onChange={e => setCommentContent(e.target.value)}
          />

        </Grid>
        <Grid item alignItems="end" justifyContent="start" style={{ paddingLeft: 0, padding: 0, display: "flex", marginBottom: "0.25em" }}>
          <IconButton type="submit" aria-label="send"><Send></Send></IconButton>
        </Grid>
      </Grid>
      <Divider variant="fullWidth" style={{ margin: "30px 0" }} />

    </Paper>
  )
}

const Comment = ({ writeCommentFunctions, comment, currentTrackMetaData, children = [] }) => {
  const [showWriteComment, setShowWriteComment] = useState(false)
  const [editing, setEditing] = useState(false)

  const user = useUser()
  const isAdmin = useIsAdmin()
  const isAuthor = comment.email === user.email;

  const showDeleteComment = isAuthor || isAdmin // this will be admin or owner
  const showEditComment = isAuthor // this will be owner


  return (<Paper style={{ padding: "20px" }} key={comment.id}>
    <Grid container wrap="nowrap" spacing={2}>
      <Grid item>
        <Link to={`/app/profile/${comment.profile.id}`}>
          <Avatar
            alt={comment?.profile?.name || 'Anonymous'}
            src={comment?.profile?.avatar}
          />
        </Link>
      </Grid>
      <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 style={{ margin: 0, textAlign: "left" }}>

          <Link to={`/app/profile/${comment.profile.id}`}>
            {comment?.profile?.name || 'Anonymous'}
          </Link>
          <span style={{ textAlign: "left", color: "gray" }}> – {formatDistanceToNow(new Date(comment.createdAt))} ago</span>
        </h4>

        <p style={{ textAlign: "left" }}>
          {comment.content}
        </p>

        {(!!showWriteComment || !!editing) ? <WriteComment {...writeCommentFunctions}
          submitComment={(e) => {
            !!editing ? writeCommentFunctions.editComment(comment.id)(e) : writeCommentFunctions.submitComment(comment.id)(e)
            setShowWriteComment(false)
            setEditing(false)
            writeCommentFunctions.setCommentContent('')
          }}
        /> : null}
        <Button onClick={() => setShowWriteComment(!showWriteComment)}>{showWriteComment ? 'Dismiss' : 'Reply To'}</Button>
        {showEditComment ? <IconButton onClick={() => {
          setShowWriteComment(false)
          setEditing(!editing)
          writeCommentFunctions.setCommentContent(comment.content)
        }}>{!editing ? <Edit></Edit> : <Close></Close>}</IconButton> : null}
        {showDeleteComment ? <IconButton onClick={writeCommentFunctions.removeComment(comment)}><Delete></Delete></IconButton> : null}
        {comment.createdAt !== comment.updatedAt && (
          <p style={{ textAlign: "left", color: "gray" }}>Updated {formatDistanceToNow(new Date(comment.updatedAt))} ago</p>
        )}
      </Grid>
    </Grid>
    {children}
    <Divider variant="fullWidth" style={{ marginTop: "20px" }} />
  </Paper>)
}

const MyComment = ({ writeCommentFunctions, comment, allComments = [], audioLists = [] }) => {

  const childComments = () => allComments.filter(c => c.parentId === comment.id)

  return (
    <Comment writeCommentFunctions={writeCommentFunctions} comment={comment} currentTrackMetaData={comment.submission}>
      {childComments().map((childComment) => (
        <MyComment
          writeCommentFunctions={writeCommentFunctions}
          comment={childComment}
          allComments={allComments}
          audioLists={audioLists}>
        </MyComment>
      ))}
    </Comment >
  )
}

const FeedbackSection = ({ assignmentId, submissionId, showAll = true }) => {
  const user = useUser()
  const [commentContent, setCommentContent] = useState('')
  const [comments, setComments] = useState([])
  const [showAllComments, setShowAllComments] = useState(showAll)

  // const { loading: listSubmissionsLoading, error: listSubmissionsError, data: listSubmissionsData } =
  //   useQuery(gql(listFileRequestSubmissions, { limit: 1000, filter: { fileRequestId: { eq: assignmentId } } }))

  const [
    createCommentRequest,
    { error: createCommentRequestError, data: createCommentRequestData }
  ] = useMutation(gql(createComment))

  const [
    deleteCommentRequest,
    { error: deleteCommentRequestError, data: deleteCommentRequestData }
  ] = useMutation(gql(deleteComment))

  const [
    updateCommentRequest,
    { error: updateCommentRequestError, data: updateCommentRequestData }
  ] = useMutation(gql(updateComment))

  useEffect(() => {
    let subscriptionFilter = { assignmentId: { eq: assignmentId } }
    if (submissionId) {
      subscriptionFilter = { and: [{ assignmentId: { eq: assignmentId } }, { submissionId: { eq: submissionId } }] }
    }

    const fetchComments = async () => {
      const result = await API.graphql({
        query: listComments,
        variables: {
          limit: 1000,
          filter: subscriptionFilter
        }
      })

      setComments(result.data.listComments.items)
    }

    fetchComments()

    const createSub = API.graphql(graphqlOperation(onCreateComment, subscriptionFilter)).subscribe({
      next: ({ value }) => {
        setComments((items) => [...items, value.data.onCreateComment]
          .sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt))))
      }
    })

    const updateSub = API.graphql(graphqlOperation(onUpdateComment, subscriptionFilter)).subscribe({
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

    const deleteSub = API.graphql(graphqlOperation(onDeleteComment, subscriptionFilter)).subscribe({
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
  }, [submissionId])

  useEffect(() => {
    if (createCommentRequestData) {
      setCommentContent('')
      // refetchCommentData({ filter: { submissionId: { eq: metaData.submissionId } } })
      // refetchCommentData()
    }
  }, [createCommentRequestData])


  const submitComment = parentId => (e) => {
    e.preventDefault()
    const input = {
      email: user.email,
      assignmentId,
      submissionId,
      content: commentContent,
      parentId
    }

    return createCommentRequest({ variables: { input } })
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

  const editComment = commentId => e => {
    const input = {
      id: commentId,
      content: commentContent
    }

    return updateCommentRequest({ variables: { input } })
  }

  const filteredComments = comments.filter(item => {
    if (showAllComments) return item
    if (item?.submission?.email === user.email) return item
  }).sort((a, b) => compareDesc(new Date(a.createdAt), new Date(b.createdAt)))

  const parentComments = filteredComments.filter(c => c.parentId == null)
  return (
    <Grid container>
      <Grid item xs={12} style={{ marginTop: "1em" }}>
        <Typography variant="h6" component="h3">
          Feedback{' '}
          <Badge badgeContent={filteredComments.length || 0} color="secondary">
            <CommentIcon />
          </Badge>
          <ToggleButtonGroup
            exclusive
            value={!!showAllComments ? "all" : "me"}
            onChange={(e, value) =>
              setShowAllComments(value === "all")}
            sx={{ float: "right" }}>
            <ToggleButton value="me" aria-label="For Me">For Me <Person /></ToggleButton>
            <ToggleButton value="all" aria-label="Show All" disabled={!showAll}>All <People /></ToggleButton>
          </ToggleButtonGroup>
        </Typography>
        {submissionId ? <WriteComment
          commentContent={commentContent}
          setCommentContent={setCommentContent}
          submitComment={submitComment()}
        /> : null}
        {parentComments && parentComments

          .map(comment => (
            <MyComment key={comment.id} writeCommentFunctions={{ commentContent, setCommentContent, submitComment, removeComment, editComment }} comment={comment} allComments={comments}></MyComment>
          )
          )}

      </Grid>

    </Grid>)
}


export { WriteComment, Comment, MyComment, FeedbackSection }