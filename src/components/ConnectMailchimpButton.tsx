import { Button, Icon } from '@mui/material'
import { Link } from 'gatsby'
import React from 'react'
import mailchimp from '../assets/mailchimp.svg'
import { useLocation } from 'react-use'

const MCLogo = () => (
  <Icon>
    <img src={mailchimp} height={25} width={25} />
  </Icon>
)


export default function ConnectMailchimpButton({ mailchimpEnabled = false }) {
  const location = useLocation()
  const OAUTH_CALLBACK = `${location.protocol}//${location.host}/app/profile/edit`
  const MAILCHIMP_CLIENT_ID = process.env.GATSBY_MAILCHIMP_CLIENT_ID

  return (
    <Button
      color="secondary"
      variant="contained"
      startIcon={<MCLogo />}
      component={Link}
      disabled={mailchimpEnabled}
      sx={{
        "&.Mui-disabled": {
          background: "#2e7d32",
          color: "#fff"
        }
      }}
      href={`https://login.mailchimp.com/oauth2/authorize?response_type=code&client_id=${MAILCHIMP_CLIENT_ID}&redirect_uri=${OAUTH_CALLBACK}`}>
      {mailchimpEnabled ? 'Mailchimp' : 'Connect Mailchimp'}
    </Button>
  )
}
