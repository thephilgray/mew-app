import { Button, CircularProgress, Icon } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import mailchimp from '../assets/mailchimp.svg'
import { useLocation } from 'react-use'
import { updateMembershipService } from '../graphql/mutations'
import { gql, useMutation } from '@apollo/react-hooks'
import { useProfile } from '../auth/hooks'

const MCLogo = () => (
  <Icon>
    <img src={mailchimp} height={25} width={25} />
  </Icon>
)


export default function ConnectMailchimpButton({ mailchimpEnabled = false, workshopId = 'profile', connectLoading = false, callback = () => { } }) {
  const location = useLocation()
  const { profile } = useProfile()
  const OAUTH_CALLBACK = `${location.protocol}//${location.host}/app/profile/edit`
  const MAILCHIMP_CLIENT_ID = process.env.GATSBY_MAILCHIMP_CLIENT_ID


  const [requestUpdateMembershipService, { loading: disconnectLoading }] = useMutation(gql(updateMembershipService))
  const onUpdateMembershipService = async () => {
    await requestUpdateMembershipService({
      variables: {
        workshopId,
        action: "DISCONNECT_MAILCHIMP",
        payloads: [
          { emailAddress: profile?.email }
        ]
      },
    })
  }

  const ConnectMailchimp = () => (
    <Button
      sx={{
        backgroundColor: "#ffe01b", color: "text.primary", '&:hover': {
          backgroundColor: "rgba(255,224,27,0.65)"
        },
      }}
      variant="contained"
      startIcon={connectLoading ? <CircularProgress size="1rem" color="inherit" /> : < MCLogo />}
      component={Link}
      href={`https://login.mailchimp.com/oauth2/authorize?response_type=code&client_id=${MAILCHIMP_CLIENT_ID}&redirect_uri=${OAUTH_CALLBACK}`}>
      Connect Mailchimp
    </Button >
  )

  const DisconnectMailchimp = () => (
    <Button
      color="error"
      variant="contained"
      startIcon={disconnectLoading ? <CircularProgress size="1rem" color="inherit" /> : < MCLogo />}
      onClick={() => onUpdateMembershipService().then(callback)}
    >
      Disconnect Mailchimp
    </Button >
  )

  return mailchimpEnabled ? <DisconnectMailchimp /> : <ConnectMailchimp />
}
