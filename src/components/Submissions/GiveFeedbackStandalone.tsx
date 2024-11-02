import React, { useState } from 'react';
import { GiveFeedback } from './GiveFeedback';
import { gql, useQuery } from '@apollo/react-hooks';
import { getFileRequest } from '../../graphql/queries';
import If from '../If';
import AppBreadcrumbs from '../AppBreadcrumbs';
import { Grid } from '@mui/material';
import { ROUTES } from '../../constants';

type GiveFeedbackStandaloneProps = {

};

const GiveFeedbackStandalone: React.FC<GiveFeedbackStandaloneProps> = ({ assignmentId = '' }) => {
  const { loading, error: getError, data } = useQuery(gql(getFileRequest), {
    variables: {
      id: assignmentId
    }
  })

  const [showPlaylist, setShowPlaylist] = useState(false)
  const [feedbackGiven, setFeedbackGiven] = useState(0)

  return <Grid container spacing={2}>
    <Grid item xs={12}>
      <AppBreadcrumbs
        paths={[ROUTES.home, ROUTES.workshop,
        {
          path: ROUTES.assignment.getPath({ assignmentId }),
          name: data?.getFileRequest?.title || assignmentId,
        },
        ROUTES.assignmentGiveFeedback]}
        workshop={data?.getFileRequest?.workshop}
        workshopId={data?.getFileRequest?.workshopId}
      />
    </Grid>
    <If condition={data?.getFileRequest}>
      <Grid item xs={12}>
        <GiveFeedback
          fileRequestData={data?.getFileRequest}
          setShowPlaylist={setShowPlaylist}
          setFeedbackGiven={setFeedbackGiven}
          feedbackGiven={feedbackGiven}
          showPlaylist={showPlaylist}
        />
      </Grid>
    </If>
  </Grid>
}
export default GiveFeedbackStandalone;