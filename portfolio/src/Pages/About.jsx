import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SchoolIcon from '@mui/icons-material/School';

const useStyles = makeStyles((theme) => ({
  aboutSection: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  avatar: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: 'auto',
  },
  listItemIcon: {
    minWidth: theme.spacing(5),
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.aboutSection}>
        <Avatar
          alt="Your Name"
          src="/path-to-your-avatar.jpg" // Replace with your avatar image path
          className={classes.avatar}
        />

        <Typography variant="h4" component="h2" align="center" gutterBottom>
          About Me
        </Typography>
        <Typography
          variant="body1"
          align="center"
          color="textSecondary"
          paragraph
        >
          [Brief introduction about yourself, your background, and your
          interests.]
        </Typography>

        <Typography variant="h5" component="h3" gutterBottom>
          My Skills
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center">
              <ListItemIcon className={classes.listItemIcon}>
                <CodeIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Frontend Development"
                secondary="React, JavaScript, HTML, CSS, MUI"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center">
              <ListItemIcon className={classes.listItemIcon}>
                <DesignServicesIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="UI/UX Design"
                secondary="Figma, Adobe XD, Responsive Design"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Box display="flex" alignItems="center">
              <ListItemIcon className={classes.listItemIcon}>
                <SchoolIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Continuous Learning"
                secondary="Keeping up with the latest web technologies and best practices."
              />
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          style={{ marginTop: '2rem' }}
        >
          Education & Certifications
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon className={classes.listItemIcon}>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText
              primary="Bachelor of Science in Computer Science"
              secondary="University Name, Year"
            />
          </ListItem>
        </List>
      </Box>
    </Container>
  );
};

export default About;
