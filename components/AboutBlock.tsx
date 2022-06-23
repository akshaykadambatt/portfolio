import type { NextPage } from "next";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, Avatar, Stack } from "@mui/material";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiStackOverflowFill, RiLinkedinLine } from "react-icons/ri";
import { VscGithubAlt, VscArrowRight } from "react-icons/vsc";
import { Button } from "../components/elements";
import Link from "next/link";
import Image from 'next/image'

type AppProps = {
  classText?: string;
};

const AboutBlock : NextPage<AppProps> = ({ classText }): JSX.Element => {
  return (
    <Grid container>
      <Grid
        item data-aos="anim1" data-aos-delay="100"
        xs={12}
        md={4}
        sx={{ display: "flex", justifyContent: "center", py:3 }}
      >
        <Image
          placeholder = "blur"
          src="/akshay_k_nair.webp"
          alt="Picture of the author"
          width={300}
          height={300}
          className = { classText + "avatar" }
        />
        {/*<Avatar
          alt="Remy Sharp" 
          src="/akshay_k_nair.webp"
          className = { classText + "avatar" }
          sx={{ width: "300px", height: "300px" }}
        />*/}
      </Grid>
      <Grid item xs={12} md={8}>
        <AboutText classText = { classText } />
      </Grid>
    </Grid>
  );
};

export default AboutBlock;

const AboutText : NextPage<AppProps> = ({ classText }): JSX.Element => {
  return (
    <Box sx={{ py:3 }}>
          <Box className={ classText } >
            <Typography variant="h4" gutterBottom data-aos="anim1" data-aos-delay="80" >
              Akshay K Nair
            </Typography>
          </Box>
          <Box className={ classText } >
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
          </Box>
          <Stack direction="row" spacing={2} my={3} className={ classText } >
            <Box data-aos="anim1" data-aos-delay="100">
              <a href="https://stackoverflow.com/users/7481663/akshay-k-nair" target="_blank" rel="noreferrer">
              <Button size="large" variant="outlined" aria-label="StackOverflow" >
                <RiStackOverflowFill fontSize="24px" />
              </Button></a>
            </Box>
            <Box data-aos="anim1" data-aos-delay="200">
            <a href="https://www.linkedin.com/in/akshay-k-nair/" target="_blank" rel="noreferrer">
              <Button size="large" variant="outlined" aria-label="LinkedIn">
                <RiLinkedinLine fontSize="24px" />
              </Button></a>
            </Box>
            <Box data-aos="anim1" data-aos-delay="300">
            <a href="https://github.com/akshayknz" target="_blank" rel="noreferrer">
              <Button size="large" variant="outlined" aria-label="GitHub">
                <VscGithubAlt fontSize="24px" />
              </Button></a>
            </Box>
            <Box data-aos="anim1" data-aos-delay="400">
            <a href="https://api.whatsapp.com/send?phone=+918301044114&text=Hi%20Akshay!" target="_blank" rel="noreferrer">
              <Button size="large" variant="outlined" aria-label="WhatsApp">
                <AiOutlineWhatsApp fontSize="24px" />
              </Button></a>
            </Box>
          </Stack>
          <Box className={ classText }>
            <Stack direction="row" spacing={2} data-aos="anim1" data-aos-delay="250"  >
              <Link href="/work">
                <Button endIcon={<VscArrowRight />} size="large" variant="outlined" aria-label="See Works">
                  Works
                </Button>
              </Link>
              <Link href="/about">
                <Button endIcon={<VscArrowRight />} size="large" variant="outlined" aria-label="Goto About page">
                  About
                </Button>
              </Link>
            </Stack>
          </Box>
        </Box>
  );
}
export {AboutText};
