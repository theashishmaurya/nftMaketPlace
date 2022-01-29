import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import HeroArea from "../components/landingPage/heroArea";
import { GlassContainer } from "../components/layout/container";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <GlassContainer sx={{ flexGrow: 1, margin: "2rem 0rem" }}>
      <HeroArea />
    </GlassContainer>
  );
}
