import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function InfoAboutMe() {
  return (
    <Box sx={{ padding: 4, maxWidth: 800, margin: '0 auto' }}>
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography variant="body1">
        Good time of day! I am a prospective programmer with a strong passion for learning and exploring new technologies.
        I have hands-on experience in building my own projects.
      </Typography>
      <Typography variant="body1">
        I have over two years of self-study, during which I became proficient in HTML, CSS, SCSS, and JavaScript (ES6+),
        focusing on front-end web development with the BEM methodology. While I initially worked using a mobile-last
        approach, I am equally comfortable with mobile-first design. I started with Angular, where I completed several test
        tasks and built a small application, but I eventually transitioned to React. Since then, I've developed a small
        marketplace (without transactions) using React, NodeJS, and MongoDB.
      </Typography>
      <Typography variant="body1">
        In recent projects, I have expanded my skill set to include additional front-end and back-end technologies:
      </Typography>
      <Typography variant="h5" gutterBottom>
        Frontend:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="React with TypeScript" />
        </ListItem>
        <ListItem>
          <ListItemText primary="MobX for state management" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Axios for API requests" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Experience with creating PDF documents in the front end" />
        </ListItem>
        <ListItem>
          <ListItemText primary="React Native" />
        </ListItem>
      </List>
      <Typography variant="h5" gutterBottom>
        Backend:
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="JSON Web Tokens (JWT) for user authentication" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Socket.IO for real-time communication" />
        </ListItem>
      </List>
    </Box>
  );
}
