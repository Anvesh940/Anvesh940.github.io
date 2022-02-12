import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Person, Groups } from "@mui/icons-material";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    border: "2px solid #1976d2",
    borderRadius: 5
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
    fontWeight: 600
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Plans() {
  const classes = useStyles();
  const [ selected, setSelected ] = React.useState();

  return (
    <React.Fragment>
      <Typography fontSize={32} fontWeight= 'bold' align='center' gutterBottom>
        How are you planning to use Eden?
      </Typography>
      <Typography variant="body1" align='center' gutterBottom>
        We'll streamline your setup experience accordingly
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div onClick={() => {setSelected(0)}} className={selected === 0 ? classes.root : ""} >
            <Card variant="outlined">
              <CardActionArea>
                <CardContent>
                  <Person />
                  <Typography
                    variant="h6"
                    fontWeight= 'bold'
                    gutterBottom
                  >
                    For myself
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                  >
                    Write better. Think more clearly. Stay organized.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div onClick={() => {setSelected(1)}} className={selected === 1 ? classes.root : ''}>
            <Card variant="outlined">
              <CardActionArea>
                <CardContent>
                  <Groups />
                  <Typography
                    variant="h6"
                    fontWeight= 'bold'
                    gutterBottom
                  >
                    With my team
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                  >
                    Wikis, docs, tasks & projects, all in one place.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
