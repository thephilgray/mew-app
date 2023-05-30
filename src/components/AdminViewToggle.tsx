import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Fab, Tooltip } from '@mui/material'
import React from 'react'
import { useIsAdmin, useViewAdmin } from '../auth/hooks'
import If from './If'


export default function AdminViewToggle() {
  const [viewAdmin, setViewAdmin] = useViewAdmin()
  const isAdmin = useIsAdmin()
  return (
    <If condition={isAdmin}>
      <Tooltip title={`${!!viewAdmin ? "Preview as member" : "Turn preview off"}`} placement="top-start">
        <Fab color="secondary"
          aria-label="Admin View Toggle"
          onClick={() => setViewAdmin(!viewAdmin)}
          sx={{ position: 'fixed', bottom: '1em', right: '1em' }}>
          {!!viewAdmin ? <Visibility /> : <VisibilityOff />}
        </Fab>
      </Tooltip>
    </If>
  )
}
