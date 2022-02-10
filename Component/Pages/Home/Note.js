import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Button,
  Container,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { NoteFor, SendURL, URLForm } from "../Add/Form";
import { useDispatch } from "react-redux";
import { OpenDailog, OpenNote } from "../../Store/Add";

const steps = ["Note", "Stream Key", "Send URL"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <NoteFor />;
    case 1:
      return <URLForm />;
    case 2:
      return <SendURL />;
    default:
      throw new Error("Unknown step");
  }
}

const theme = createTheme();

export default function Note({ setHide }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const dispatch = useDispatch();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setHide(false);
  };
  React.useEffect(() => {
    if (activeStep === 0) {
      setHide(true);
    }
  }, [activeStep]);

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper
          variant="outlined"
          sx={{ my: { xs: 2, md: 6 }, p: { xs: 2, md: 2 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Note
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Thank you for your order.
                </Typography>
                <Typography variant="subtitle1">
                  Your order number is #2001539. We have emailed your order
                  confirmation, and will send you an update when your order has
                  shipped.
                </Typography>
                <Button
                  variant="contained"
                  onClick={() => {
                    dispatch(OpenDailog());
                  }}
                >
                  Close
                </Button>
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
                    {activeStep === steps.length - 1 ? "Finesh" : "Next"}
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
