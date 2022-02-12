import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function Personal(props) {
  
  function handleChange(e) {
    props.onUsernameChange(e.target.value);
  }

  return (
    <React.Fragment>
      <Typography fontSize={32} fontWeight= 'bold' align='center' gutterBottom>
        Welcome! First things first...
      </Typography>
      <Typography variant="body1" align='center' gutterBottom>
        You can always change them later
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="fullName"
            name="fullName"
            label="Full Name"
            fullWidth
            autoComplete="full-name"
            variant="outlined"
            margin="dense"
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="displayName"
            name="displayName"
            label="Display Name"
            fullWidth
            autoComplete="display-name"
            variant="outlined"
            margin="dense"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}