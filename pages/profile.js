import Image from "next/image";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
const Profile = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/fetchNTFOwnedBy", { method: "POST" })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          className='image-circle'
          src='/polygon.png'
          objectFit='cover'
          height={150}
          width={150}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          flexGrow: 1,
          margin: "4rem 0rem",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          {/* <Tab label='Minted Item' sx={{ margin: { md: "0 10rem" } }} />
          <Tab label='Listed Item' sx={{ margin: { md: "0 10rem" } }} /> */}
          <Tab label='Your Collection' sx={{ margin: { md: "0 10rem" } }} />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Profile;
