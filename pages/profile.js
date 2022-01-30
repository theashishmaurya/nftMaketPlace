import Image from "next/image";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { UserAddressContext } from "../components/context/userContext";
import { GlassContainer } from "../components/layout/container";
import { LineAxisOutlined } from "@mui/icons-material";
const Profile = () => {
  const [value, setValue] = useState(0);
  const [NFTdata, setNFTData] = useState([]);
  const [currentUser, setCurrentUser] = useContext(UserAddressContext);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(async () => {
    console.log(currentUser);
    axios
      .post("/api/fetchNFTOwnedBy", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: {
          address: currentUser,
        },
        timeout: 1000 * 5,
      })
      .then((result) => {
        console.log(result.data);
        setNFTData(result.data);
      })
      .catch((err) => {
        console.log("error:", err);
      });
  }, [currentUser]);
  return (
    <GlassContainer
      sx={{ flexGrow: 1, margin: "4rem 0rem", padding: "2rem 0rem" }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          className="image-circle"
          src="/polygon.png"
          objectFit="cover"
          height={150}
          width={150}
        />
      </Box>

      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          margin: "4rem 0rem",
        }}
      >
        <Tabs value={value} onChange={handleChange} centered>
          {/* <Tab label='Minted Item' sx={{ margin: { md: "0 10rem" } }} />
          <Tab label='Listed Item' sx={{ margin: { md: "0 10rem" } }} /> */}
          <Tab label="Your Collection" sx={{ margin: { md: "0 10rem" } }} />
        </Tabs>
      </Box>
    </GlassContainer>
  );
};

export default Profile;
