import { Box } from "@mui/system";
import Navbar from "./Navbar";
import { Container } from "@mui/material";

const Contain = ({ children }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Navbar />
      <Container sx={{ padding: "1rem" }}>{children}</Container>
    </Box>
  );
};

export default Contain;
