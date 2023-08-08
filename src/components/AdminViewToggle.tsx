import { Lock, LockOpen } from '@mui/icons-material'
import { ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import React, { useEffect } from 'react'
import { useIsAdmin, useViewAdmin } from '../auth/hooks'
import If from './If'
export default function AdminViewToggle() {
  const [viewAdmin, setViewAdmin] = useViewAdmin()
  const isAdmin = useIsAdmin()

  useEffect(() => {
    if (isAdmin && viewAdmin === null) {
      setViewAdmin(true)
    }
  }, [isAdmin])

  return (
    <If condition={isAdmin}>
      <Tooltip title={`${!!viewAdmin ? "Viewing as admin" : "Viewing as member"}`} placement="bottom-end">
        <ListItemButton
          aria-label="Admin View Toggle"
          onClick={() => setViewAdmin(!viewAdmin)}
        >
          <ListItemIcon>
            {!!viewAdmin ? <Lock color="secondary" /> : <LockOpen color="secondary" />}
          </ListItemIcon>
          <ListItemText primary={viewAdmin ? "Admin view" : "Member view"}></ListItemText>
        </ListItemButton>
      </Tooltip>
    </If>
  )
}
