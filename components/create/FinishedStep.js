import { Box } from "@mui/system";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Stack, Typography } from "@mui/material";
import { GlassButton } from "../landingPage/heroArea";
import Link from "next/link";
const FinishedStep = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "70vh",
      }}
    >
      <Stack gap={10}>
        <Typography>
          Congratulations! Your Assest is minted Successfully
        </Typography>
        <Link href='/assets'>
          <GlassButton variant='contained'>Back to Marketplace</GlassButton>
        </Link>
      </Stack>
    </Box>
  );
};

export default FinishedStep;
