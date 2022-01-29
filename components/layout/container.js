import { Box } from "@mui/system";
import Navbar from "./Navbar";
import { Container, styled } from "@mui/material";

export const GlassContainer = styled(Box)(({ theme }) => ({
  /* From https://css.glass */
  background: "rgba(255, 255, 255, 0.2)",
  borderRadius: "16px",
  boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
  backdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.3)",
  minHeight: "100%",
}));
const Contain = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Container>{children}</Container>
    </Box>
  );
};

export default Contain;
