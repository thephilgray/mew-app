import { AdminPanelSettings, Person } from '@mui/icons-material'
import { Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import { useIsAdmin, useViewAdmin } from '../auth/hooks'
import GroupGuard from './Auth/GroupGuard'
import { Group } from '../constants'
import If from './If'


export default function AdminViewToggle() {
  const [viewAdmin, setViewAdmin] = useViewAdmin()
  const isAdmin = useIsAdmin()
  return (
    <If condition={isAdmin}>
      <Grid container>
        <Grid item xs={12} sx={{ pb: 2 }}>
          <ToggleButtonGroup
            exclusive
            value={!!viewAdmin ? "admin" : "member"}
            onChange={(e, value) =>
              setViewAdmin(value === "admin")}
            sx={{ float: "right" }}>
            { }
            <ToggleButton value="member" aria-label="Member View">Member View <Person /></ToggleButton>
            <ToggleButton value="admin" aria-label="Admin View">Admin View <AdminPanelSettings /></ToggleButton>
          </ToggleButtonGroup>
        </Grid>
      </Grid>
    </If>
  )
}
