import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import AboutBlock from "../components/AboutBlock";
import { styled } from "@mui/system";
import useLocoScroll from "../components/useLocoScroll";
import AnimatedBackground from "../components/AnimatedBackground";

const About: NextPage = () => {
  useLocoScroll();
  return (
    <>
      <AnimatedBackground filter={"hue-rotate(267deg)"} top={"-76px"}/>
      <Container sx={{paddingTop:"100px"}}>
        <AboutBlock />
      </Container>
      <Box sx={{height:"200px"}}></Box>
    </>
  )
}

export default About
