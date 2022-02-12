import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function Workspace() {
  return (
    <React.Fragment>
      <Typography fontSize={32} fontWeight='bold' align='center' gutterBottom>
        Let's set up a home for all your work
      </Typography>
      <Typography variant="body1" align='center' gutterBottom>
        You can always create another workspace later.
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="workspaceName"
            name="workspaceName"
            label="Workspace name"
            fullWidth
            variant="outlined"
            margin="dense"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="workspaceUrl"
            name="workspaceUrl"
            label="Workspace URL"
            fullWidth
            variant="outlined"
            margin="dense"
            InputProps={{
                startAdornment: <InputAdornment position="start">www.eden.com/</InputAdornment>,
              }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}