import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Personal from "./pages/Personal";
import Workspace from "./pages/Workspace";
import Plans from "./pages/Plans";
import Congratulations from "./pages/Congratulations";

const steps = ["Personal", "Workspace", "Plans", "Congratulations"];

const theme = createTheme();

export default function StepperComponent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [ fullName, setFullName ] = React.useState('');
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <Personal onUsernameChange={handleUsername}/>;
      case 1:
        return <Workspace />;
      case 2:
        return <Plans />;
      case 3:
        return <Congratulations fullName={fullName}/>;
      default:
        throw new Error("Unknown step");
    }
  }

  function handleUsername(value) {
    setFullName(value);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ display: "flex", justifyContent: "center" }}>
        <Paper
          elevation={0}
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Grid container spacing={3} gap={1} alignItems='center' justifyContent='center'>
            <img src="/edenLogo.jpg" alt="logo" />
            <Typography fontWeight='bold' component="h1" variant="h4" align="center">
              Eden
            </Typography>
          </Grid>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, mt: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel></StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length - 1 ? (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    sx={{ mt: 3, ml: 1 }}
                    size="large"
                  >
                    Launch Eden
                  </Button>
                </Box>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Back
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    Next
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
