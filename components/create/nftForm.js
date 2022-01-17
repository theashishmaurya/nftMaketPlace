import {
  Button,
  Divider,
  FormControl,
  Input,
  Paper,
  Stack,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const NftForm = () => {
  const [file, setFile] = useState();

  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const handleChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log(file, data);
  };
  const onDrop = useCallback((acceptedFiles) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handlefileupload = (e) => {
    setFile(e.target.files[0]);
    // console.log(e.target.files[0]);
    try {
      // var url = URL.createObjectURL(e.target.file);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Paper
        sx={{
          padding: { xs: "2rem", md: "4rem" },
        }}
      >
        <FormControl fullWidth>
          <Box sx={{ display: "flex" }}>
            <Box>
              <Typography
                variant='h4'
                fontWeight='bold'
                sx={{ margin: "1rem 0rem" }}
              >
                Create New Item
              </Typography>

              <Typography fontWeight='500' sx={{ margin: "1rem 0rem" }}>
                Image, Video, Audio, or 3D Model
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "30vh",
                  backgroundColor: isDragActive ? "#fafafa" : "#CADDE1",
                  borderStyle: "dashed",
                  margin: "1rem 0rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                {...getRootProps()}
              >
                <input
                  style={{ display: "none" }}
                  accept='image/*'
                  id='contained-button-file'
                  type='file'
                  multiple
                  {...getInputProps()}
                />
                <Typography>Your Media Here</Typography>
              </Box>

              <input
                style={{ display: "none" }}
                accept='image/*'
                id='contained-button-file'
                type='file'
                multiple
                onChange={handlefileupload}
              />
              <label htmlFor='contained-button-file'>
                <Button
                  variant='contained'
                  component='span'
                  sx={{ margin: "1rem 0" }}
                >
                  Upload
                </Button>
              </label>
            </Box>
            <Box sx={{ margin: "0 2rem" }}>
              <Divider orientation='vertical' />
            </Box>
            <Box sx={{ margin: "4rem 0rem", width: "30rem" }}>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography fontWeight='bold'>Name</Typography>
                <TextField
                  variant='outlined'
                  size='small'
                  fullWidth
                  placeholder='name'
                  required
                  onChange={(e) => {
                    handleChange(e, "name");
                  }}
                />
              </Stack>
              <Stack gap={1} sx={{ margin: "1rem 0rem", flexGrow: 1 }}>
                <Typography fontWeight='bold'>Description</Typography>

                <TextareaAutosize
                  minRows={5}
                  fullWidth
                  placeholder='Description'
                  onChange={(e) => {
                    handleChange(e, "description");
                  }}
                />
              </Stack>
            </Box>
          </Box>
          <Divider sx={{ margin: "1rem 0" }} />
          <Button
            onClick={handleSubmit}
            variant='contained'
            sx={{ margin: "1rem 0rem" }}
          >
            Mint
          </Button>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default NftForm;
