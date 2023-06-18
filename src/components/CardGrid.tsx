import { Card, CardContent, CardMedia, Chip, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import If from './If';
import { getCloudFrontURL } from '../utils';
import { Link } from 'gatsby';
import { Artwork } from '../models';
import watercolor from '../assets/watercolor.png'

type Item = {
  // routeName:
  chipContent: React.ReactFragment;
  rightOverlayContent: React.ReactFragment;
  artwork: Artwork;
  bottomContent: React.ReactFragment;
  id: string;
  active: boolean;
  description: string;
  name: string;
  link: string;
}

type CardGridProps = {
  items: Item[];
};


export const CardGridItem: React.FC<Item> = ({ name = '', bottomContent, chipContent, rightOverlayContent, id, active, artwork, description }) => {
  return <Grid item xs={12} sm={6} key={id} sx={{ opacity: active ? '100%' : '50%' }} >
    <Link to={`workshops/${id}`} style={{ textDecoration: 'none' }}>
      <Card >
        <CardMedia
          sx={{ height: 140 }}
          image={artwork?.path ? getCloudFrontURL(artwork.path) : watercolor}
          title={artwork?.credit || 'artwork'}
        >
          {chipContent || null}
          <If condition={!!rightOverlayContent}>
            <Paper sx={{ display: 'flex', alignItems: 'center', p: 1, float: 'right', justifySelf: 'flex-end', background: 'rgba(0, 0, 0, 0.7)' }} elevation={0}>
              {rightOverlayContent}
            </Paper>
          </If>
        </CardMedia>
        <CardContent sx={{ minHeight: 200 }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <If condition={!!description}>
            <Typography variant="body2" color="text.secondary" sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              '-webkit-line-clamp': '3', /* number of lines to show */
              'lineClamp': '3',
              '-webkit-box-orient': 'vertical',
            }}>
              {description}
            </Typography>
          </If>
          <If condition={!!bottomContent}>
            <Grid container spacing={1} sx={{ mt: 1 }}>
              {bottomContent}
            </Grid>
          </If>
        </CardContent>
      </Card>
    </Link>
  </Grid >
}

const CardGrid: React.FC<CardGridProps> = ({ items }) => {
  return <Grid container minHeight={375} spacing={{ xs: 2, md: 3 }} >
    <If condition={!!items.length} fallbackContent={<Grid item xs={12}>
      <Typography>None found.</Typography>
    </Grid>}>
      {items.map(CardGridItem)}
    </If>
  </Grid>
}
export default CardGrid;