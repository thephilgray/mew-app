import React, { useState } from 'react';
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';

import { SortableTrack } from './SortableTrack';
import { Grid, Typography } from '@mui/material';

export default function SortableTrackList({ trackList = [], setTrackList }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );


  function handleDelete(id) {
    setTrackList(trackList.map(item => {
      if (item.id === id) {
        return { ...item, delete: true };
      }
      return item;
    })
      .filter(item => {
        // if new item, don't set to delete in db, just remove
        if (item.create) {
          return item.id !== id
        }
        return item
      })
    )
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={trackList}
        strategy={verticalListSortingStrategy}
      >
        <Grid container spacing={1}>
          {trackList.filter(track => !track.delete)
            .map(track =>
              <SortableTrack key={track.id} id={track.id} submission={track?.submission} handleDelete={handleDelete}>
                <Grid container>
                  <Grid item xs={12}>
                    <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>{track?.submission?.name}</Typography>
                    <Typography variant="subtitle2">{track?.submission?.artist}</Typography>
                  </Grid>
                </Grid>
              </SortableTrack>)}
        </Grid>
      </SortableContext>
    </DndContext>
  );



  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setTrackList((items) => {

        let updatedItems = [...items];
        const oldIndex = updatedItems.findIndex(item => item.id === active.id);
        const newIndex = updatedItems.findIndex(item => item.id === over.id);
        // swap the order
        const oldOrder = updatedItems[oldIndex].order;
        const newOrder = updatedItems[newIndex].order;


        updatedItems = updatedItems.map((item, index) => {
          if (index === oldIndex) {
            return { ...item, order: Number(newOrder), ...!item.create && { update: true } }
          }
          if (index === newIndex) {
            return { ...item, order: Number(oldOrder), ...!item.create && { update: true } }
          }
          return item
        })

        return arrayMove(updatedItems, oldIndex, newIndex);
      });
    }
  }
}