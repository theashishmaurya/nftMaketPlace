import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import HeroArea from "../components/landingPage/heroArea";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeroArea />
    </Box>
  );
}
