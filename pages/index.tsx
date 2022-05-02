import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button } from "../components/elements";
import { styled } from "@mui/system";
import { VscArrowRight, VscGithubAlt } from "react-icons/vsc";
import { RiStackOverflowFill, RiLinkedinLine } from "react-icons/ri";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import ItemBlock from "../components/ItemBlock";
import RecentBlock from "../components/RecentBlock";
import DesignElem from "../components/DesignElem"
import Head from 'next/head'

const HeadBox = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
  padding: "45vh 8vw 0vh 8vw",
  "@media (max-width: 400px)": { padding: "39vh 8vw 0vh 8vw" },
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden",
  top: "-100px",
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AKSHAY K NAIR, Software Engineer</title>
        <meta property="og:site_name" content="AKSHY"/>
        <meta property="og:title" content="AKSHAY K NAIR, Software Engineer"/>
        <meta property="og:url" content="https://akshaykn.vercel.app/" />
        <meta property="og:image" content="https://akshaykn.vercel.app/akshay_k_nair.webp" />
        <meta property="og:image:secure_url" content="https://akshaykn.vercel.app/akshay_k_nair.webp" />
      </Head>
      <HeadBox>
        <Box>
          <Typography variant="h1" sx={{ mb: 0 }}>
            Akshay K Nair
          </Typography>
          <Typography variant="h2" sx={{ mb: 2 }} data-aos="anim1">
            Software Engineer
          </Typography>
          <Typography
            gutterBottom
            data-aos="anim1"
            sx={{ fontWeight: 300, maxWidth: "800px", pb: 2 }}
            data-aos-delay="150"
          >
            Hi there! I&apos;m Akshay. I&apos;m a software engineer with a strong CS background and a great interest in 
            JavaScript, and the web. I&apos;m learning new things everyday and creating stuff I like along the way. 
            This is my personal portfolio and an archive of a few of my works.
          </Typography>
          <Box data-aos="anim1" data-aos-delay="250">
            <Button endIcon={<VscArrowRight />} size="large" variant="outlined">
              Works
            </Button>
          </Box>
        </Box>
        <div id="backWrap">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </HeadBox>
      <Box sx={{ transform: 'translateZ(0)', overflow:'hidden'}}>
      <Block data-aos="anim1">
        <Heading variant="h3" gutterBottom>
          Stuff I know
        </Heading>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3}}>
          <Grid item xs={12} md={4} data-aos="anim1" data-aos-delay="100">
            <Box
              sx={{
                background: "linear-gradient(45deg, #ab91ff0d 45%, #02a1e91c)",
                height: "100%",
                p: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Languages
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                JavaScript
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                TypeScript
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                PHP
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                HTML5
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                CSS3
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                SQL
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Python
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} data-aos="anim1" data-aos-delay="300">
            <Box
              sx={{
                background: "linear-gradient(45deg, #ab91ff0d 45%, #02a1e91c)",
                height: "100%",
                p: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Frameworks
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                React
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Next JS
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Laravel
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                WordPress
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                ElectronJS
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Bootstrap
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Styled Components
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Redux
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Tailwind CSS
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} data-aos="anim1" data-aos-delay="600">
            <Box
              sx={{
                background: "linear-gradient(45deg, #ab91ff0d 45%, #02a1e91c)",
                height: "100%",
                p: 3,
                borderRadius: 2,
              }}
            >
              <Typography variant="h4" gutterBottom>
                Tools
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Git
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                MySQL
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Firebase
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Apache
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                Composer
              </Typography>
              <Typography sx={{ fontSize: 20, fontWeight: 300 }}>
                NPM
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Block></Box>
      <Block>
        <Heading variant="h3" gutterBottom data-aos="anim1">
          About Me
        </Heading>
        <Grid container>
          <Grid
            item data-aos="anim1" data-aos-delay="100"
            xs={12}
            md={4}
            sx={{ display: "flex", justifyContent: "center", py:3 }}
          >
            <Avatar
              alt="Remy Sharp" 
              src="/akshay_k_nair.webp"
              className="avatar"
              sx={{ width: "300px", height: "300px" }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ py:3 }}>
            <Typography variant="h4" gutterBottom data-aos="anim1" data-aos-delay="80">
              Akshay K Nair
            </Typography>
            <Typography
              gutterBottom
              data-aos="anim1"
              sx={{ fontWeight: 300, maxWidth: "800px" }}
              data-aos-delay="150"
            >
              Hi there! My name is Akshay. I&apos;m a software engineer from
              India and I love the web. I&apos;m learning new things everyday
              and creating things I like along the way. This is my personal
              portfolio and an archive of my works.
            </Typography>
            <Stack direction="row" spacing={2} my={3}>
              <Box data-aos="anim1" data-aos-delay="100">
                <a href="https://stackoverflow.com/users/7481663/akshay-k-nair" target="_blank" rel="noreferrer">
                <Button size="large" variant="outlined" >
                  <RiStackOverflowFill fontSize="24px" />
                </Button></a>
              </Box>
              <Box data-aos="anim1" data-aos-delay="200">
                <Button size="large" variant="outlined">
                  <RiLinkedinLine fontSize="24px" />
                </Button>
              </Box>
              <Box data-aos="anim1" data-aos-delay="300">
                <Button size="large" variant="outlined">
                  <VscGithubAlt fontSize="24px" />
                </Button>
              </Box>
              <Box data-aos="anim1" data-aos-delay="400">
                <Button size="large" variant="outlined">
                  <AiOutlineWhatsApp fontSize="24px" />
                </Button>
              </Box>
            </Stack>
            <Box data-aos="anim1" data-aos-delay="250">
              <Button
                endIcon={<VscArrowRight />}
                size="large"
                variant="outlined"
              >
                Works
              </Button>
            </Box>
            </Box>
          </Grid>
        </Grid>
      </Block>
      <BlockFullWidth>
      <Container >
        <Heading variant="h3" data-aos="anim1">My Recent Works</Heading>
      </Container>
      <ItemBlock /></BlockFullWidth>
      <BlockFullWidth>
      <Container >
        <Heading variant="h3" data-aos="anim1">Blog</Heading>
      </Container>
      <RecentBlock /></BlockFullWidth>
      <BlockFullWidth>
      <DesignElem text={"Simplicity from Complexity"} /></BlockFullWidth>
    </>
  );
};

export default Home;


const Block = styled(Container)({
  marginBottom:60,
  marginTop:100,
  overflow:'hidden'
})

const BlockFullWidth = styled(Box)({
  marginBottom:160,
  marginTop:100,
  transform: 'translateZ(0)',
  overflow:'hidden'
})

const Heading = styled(Typography)({
  paddingInline:50,
  marginBottom:30
})