import * as React from "react";
import Stepper from "./Stepper";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  marginAutoContainer: {
    width: 850,
    height: 80,
    display: "flex",
    margin: "auto",
  },
}));

function Onboarding() {
  const classes = useStyles();
  return (
    <div className={classes.marginAutoContainer}>
      <Stepper />
    </div>
  );
}

export default Onboarding;
