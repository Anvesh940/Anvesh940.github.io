import * as React from 'react';
import Typography from '@mui/material/Typography';

export default function Congratulations(props) {
  return (
    <React.Fragment>
      <Typography variant="h3" align='center' gutterBottom>
        Congratulations, {props.fullName}!
      </Typography>
      <Typography variant="h6" align='center' gutterBottom>
        You have completed onboarding, you can start using the Eden!
      </Typography>
    </React.Fragment>
  );
}