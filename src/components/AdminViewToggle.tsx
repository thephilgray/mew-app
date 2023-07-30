import { Lock, LockOpen, Visibility, VisibilityOff } from '@mui/icons-material'
import { Fab, Tooltip } from '@mui/material'
import React from 'react'
import { useIsAdmin, useViewAdmin } from '../auth/hooks'
import If from './If'
import { useLocation } from 'react-use'
import { useBreakpoint } from './Layout/Layout'
export default function AdminViewToggle() {
  const [viewAdmin, setViewAdmin] = useViewAdmin()
  const isAdmin = useIsAdmin()
  const location = useLocation()
  const isPlaylistPage = location.pathname?.includes('playlists')
  const breakpoint = useBreakpoint()
  const smallScreen = breakpoint === "XS"

  return (
    <If condition={isAdmin && !(isPlaylistPage && smallScreen)}>
      <Tooltip title={`${!!viewAdmin ? "Viewing as admin" : "Viewing as member"}`} placement="top-start">
        <Fab color="secondary"
          aria-label="Admin View Toggle"
          onClick={() => setViewAdmin(!viewAdmin)}
          sx={{ position: 'fixed', bottom: '1em', right: '1em' }}>
          {!!viewAdmin ? <LockOpen /> : <Lock />}
        </Fab>
      </Tooltip>
    </If>
  )
}
