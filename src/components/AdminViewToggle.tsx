import { AdminPanelSettings, Person } from '@mui/icons-material'
import { Grid, Paper, ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import { useIsAdmin, useViewAdmin } from '../auth/hooks'
import If from './If'


export default function AdminViewToggle() {
  const [viewAdmin, setViewAdmin] = useViewAdmin()
  const isAdmin = useIsAdmin()
  return (
    <If condition={isAdmin}>
      <Grid container>
        <Grid item xs={12} sx={{ pb: 2, display: 'flex', justifyContent: 'end' }}>
          <Paper sx={{ height: '100%', width: 'fit-content' }}>
            <fieldset>
              <legend style={{ textAlign: 'center' }}>admin view toggle</legend>
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
            </fieldset>
          </Paper>
        </Grid>
      </Grid>
    </If>
  )
}
