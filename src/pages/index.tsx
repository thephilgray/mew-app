import * as React from 'react';
import { Link } from 'gatsby';
import { Global, css } from '@emotion/react';
import watercolor from '../assets/watercolor.png';
import { Button, Grid, Typography, Container } from '@mui/material';
import mewAppLogo from '../assets/mewlogo.png';

const IndexPage: React.FC = (): JSX.Element => {
  // TODO: Replace with actual data fetching from the backend
  const homePageSettings = {
    projectExplanation: `MEW is a music community and songwriting accountability group that I’ve been facilitating since November 2019. We’ve written 8,685 songs as of May 2024, and more every week.`,
  };

  const featuredWorkshop = {
    name: 'Summer Session',
    status: 'We’re currently in session, but the next one starts July-ish 2025',
    mailchimpSignupUrl: 'http://eepurl.com/hp04-9',
  };

  return (
    <>
      <title>MEW HOME</title>
      <Global
        styles={css`
          body {
            background-image: url(${watercolor});
            animation: moveIt 60s linear infinite;
          }
          @keyframes moveIt {
            from {
              background-position: bottom left;
            }
            to {
              background-position: top right;
            }
          }
        `}
      />
      <Container maxWidth="md" sx={{ textAlign: 'center', py: 8 }}>
        <img
          src={mewAppLogo}
          alt="MEW logo"
          style={{ width: '100%', maxWidth: '200px', padding: '.25rem' }}
        />
        <Typography variant="h4" component="h1" gutterBottom sx={{ mt: 4 }}>
          ABOUT MUSIC EVERY WEEK
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {homePageSettings.projectExplanation}
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {featuredWorkshop.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          {featuredWorkshop.status}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          href={featuredWorkshop.mailchimpSignupUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mr: 2 }}
        >
          Join the email list
        </Button>
        <Button component={Link} variant="contained" color="secondary" to="/app">
          Sign in
        </Button>
      </Container>
    </>
  );
};

export default IndexPage;
