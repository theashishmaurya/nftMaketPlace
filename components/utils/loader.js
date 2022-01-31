import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import css from "./loader.module.css";

const Loader = () => {
  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className={css.loader}></div>
    </Box>
  );
};

export default Loader;
