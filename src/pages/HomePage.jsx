/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import moonAndSeeVideo from '../assets/videos/MoonandSea.mov';

const HomePage = () => (
  <>
    <Typography variant="h3" gutterBottom>
      Welcome to the site of the best product in the world
    </Typography>
    <Box>
      <video src={moonAndSeeVideo} autoPlay />
    </Box>
    <Typography variant="body1" gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    </Typography>
  </>
);

export default HomePage;
