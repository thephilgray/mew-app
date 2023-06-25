import { Card, CardContent, CardMedia, Paper, Skeleton, Typography, styled } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
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


const StyledGrid = styled(Grid)`
    &:hover {
        transform: scale(1.015);
    }`


export const CardGridItem: React.FC<Item> = ({ name = '', link = "", bottomContent, chipContent, rightOverlayContent, belowOverlayContent, id, active = true, artwork, description }) => {
  return <StyledGrid xs={12} sm={6} key={id} sx={{ opacity: active ? '100%' : '50%', '&:hover': { opacity: '100%' } }} >
    <Link to={link} style={{ textDecoration: 'none' }}>
      <Card >
        <CardMedia
          sx={{ height: 140 }}
          image={artwork?.path ? getCloudFrontURL(artwork.path) : watercolor}
          title={artwork?.credit || 'artwork'}
        >
          {chipContent || null}
          <If condition={!!rightOverlayContent}>
            <Paper sx={{ display: 'flex', alignItems: 'center', p: 1, ml: 'auto', width: 'fit-content', justifySelf: 'flex-end', background: 'rgba(0, 0, 0, 0.7)', flexWrap: 'wrap' }} elevation={0}>
              {rightOverlayContent}
            </Paper>
          </If>
          {belowOverlayContent || null}
        </CardMedia>
        <CardContent sx={{ minHeight: 225 }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <If condition={!!description}>
            <Typography variant="body2" color="text.secondary" sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              'WebkitLineClamp': '2', /* number of lines to show */
              'lineClamp': '2',
              'WebkitBoxOrient': 'vertical',
            }}>
              {description}
            </Typography>
          </If>
          <If condition={!!bottomContent}>
            {bottomContent}
          </If>
        </CardContent>
      </Card>
    </Link>
  </StyledGrid >
}

const CardGrid: React.FC<CardGridProps> = ({ items }) => {
  return <Grid container minHeight={375} spacing={{ xs: 2, md: 3 }}>
    <If condition={!!items.length} fallbackContent={<Grid xs={12}>
      <Typography variant="body1">None found.</Typography>
    </Grid>}>
      {items.map(CardGridItem)}
    </If>
  </Grid>
}

export const SkeletonCardGrid = ({ numberOfItems = 6 }) => {
  return <Grid container minHeight={375} spacing={{ xs: 2, md: 3 }}>
    {Array.from(new Array(numberOfItems)).map((item, i) => (
      <StyledGrid xs={12} sm={6} key={i} >
        <Skeleton height={365} animation="wave" variant="rectangular" />
      </StyledGrid>
    ))}
  </Grid>
}

export default CardGrid;