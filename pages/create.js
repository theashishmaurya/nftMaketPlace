import {
  Button,
  Paper,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import FinishedStep from "../components/create/FinishedStep";
import ListingForm from "../components/create/listForm";
import NftForm from "../components/create/nftForm";
import { GlassContainer } from "../components/layout/container";
import ConnectWallet from "../components/utils/ConnectWallet";
import ConnnectWalletUi from "../components/utils/ConnectWalletUi";

const steps = ["Mint a NFT", "List your NFT"];

const Create = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [currentUser, setCurrentUser] = useState("");
  const isStepOptional = (step) => {
    return step === 1;
  };
  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleNftNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  const handleWalletConnection = async () => {
    ConnectWallet()
      .then((data) => {
        console.log(data);
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (sessionStorage.getItem("address")) {
      setCurrentUser(sessionStorage.getItem("address"));
    } else {
      sessionStorage.setItem("address", currentUser);
    }
  }, [currentUser]);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {currentUser === "" ? (
        <ConnnectWalletUi handleWalletConnection={handleWalletConnection} />
      ) : (
        <GlassContainer
          sx={{
            width: "80%",
            padding: "2rem",
            margin: "4rem",
            minHeight: "90vh",
          }}
        >
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant='caption'>Optional</Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <FinishedStep />
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />

                <Button onClick={handleReset}>Mint More</Button>
              </Box>
            </>
          ) : (
            <>
              {activeStep === 0 ? (
                <>
                  <Box sx={{ margin: "2rem" }}>
                    <NftForm handleNftNext={handleNftNext} />
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ margin: "2rem" }}>
                    <ListingForm handleNftNext={handleNftNext} />
                  </Box>
                </>
              )}
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Button
                  color='inherit'
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color='inherit' onClick={handleSkip} sx={{ mr: 1 }}>
                    Skip
                  </Button>
                )}

                <Button onClick={handleNext}>
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </>
          )}
        </GlassContainer>
      )}
    </Box>
  );
};

export default Create;
