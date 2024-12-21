import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const useStyles = makeStyles((theme) => ({
  hero: {
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  buttons: {
    marginTop: theme.spacing(4),
    display: 'flex',
    gap: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.hero}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to My Portfolio
        </Typography>
        <Typography variant="h6" component="p" color="textSecondary">
          I&apos;m [Your Name], a passionate [Your Profession] specializing in
          [Your Specialties].
        </Typography>
        <Box className={classes.buttons}>
          <Button
            variant="contained"
            color="primary"
            component={RouterLink}
            to="/about"
          >
            Learn More About Me
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://github.com/yourusername"
            target="_blank"
            startIcon={<GitHubIcon />}
          >
            GitHub
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            startIcon={<LinkedInIcon />}
          >
            LinkedIn
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
