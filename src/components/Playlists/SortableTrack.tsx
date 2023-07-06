import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { ButtonGroup, Grid, IconButton, Paper } from '@mui/material';
import { DragHandle, RemoveCircleOutline } from '@mui/icons-material';
import { SimplePlayerButton } from '../AudioPlayer/SimplePlayer';

export function SortableTrack(props) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <Grid item xs={12} ref={setNodeRef} style={style}  >
      <Paper sx={{ p: 1 }}>
        <Grid container alignItems="center">
          <Grid item xs={2} sm={1}>
            <IconButton onClick={() => props.handleDelete(props.id)}>
              <RemoveCircleOutline />
            </IconButton>
          </Grid>
          <Grid item xs={8} sm={9}>
            {props.children}
          </Grid>
          <Grid item xs={2} display="flex" justifyContent="flex-end">
            <ButtonGroup>
              <SimplePlayerButton audioPath={`${props?.submission?.fileRequestId}/${props?.submission?.fileId}`} />
              <IconButton {...attributes} {...listeners}>
                <DragHandle />
              </IconButton>
            </ButtonGroup>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}