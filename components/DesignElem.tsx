import type { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

type AppProps = {
  text: string;
};

const DesignElem: NextPage<AppProps> = ({ text }): JSX.Element => {
  const video = useRef<HTMLVideoElement>();
  useEffect(() => {
    if(video.current){
      video.current.setAttribute('src',"/cubos-3d-background-1.mp4")
      video.current.play();
    }
  }, []);
  return (
    <Container data-aos="anim1" sx={{ my: 10, overflow:"hidden" }}>
      <Box
        sx={{
          overflow:"hidden"
        }}>
      <Box
        sx={{
          bgcolor: "rgb(var(--two)/30%)",
          my: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          overflow:"hidden"
        }}
      >
        <video data-aos="anim1" autoPlay loop muted playsInline style={{ position: "absolute" }} ref={video}>
        </video>
        <Text
          data-aos="anim1"
          data-aos-delay="100"
        >
          {text}
        </Text>
        <Text
          data-aos="anim1"
          data-aos-delay="200"
        >
          {text}
        </Text>
        <Text
          data-aos="anim1"
          data-aos-delay="300"
        >
          {text}
        </Text>
        <Text
          data-aos="anim1"
          data-aos-delay="400"
        >
          {text}
        </Text>
        <Text
          data-aos="anim1"
          data-aos-delay="500"
        >
          {text}
        </Text>
        <Text
          data-aos="anim1"
          data-aos-delay="600"
        >
          {text}
        </Text>
      </Box>
      </Box>
    </Container>
  );
};

export default DesignElem;

const BackDesign: NextPage<AppProps> = ({ text }): JSX.Element => {
  return (<>
    <BackDesignBlock>{text}</BackDesignBlock>
  </>);
}
export {BackDesign};
const BackDesignBlock = styled(Box)(`
  font-size: 100px;
  position: fixed;
  top: 45%;
  text-align: center;
  width: 98%;
  font-size: 60px;
  -webkit-text-stroke: 1px var(--main-color);
  -webkit-text-fill-color: transparent;
  z-index: -2;
  opacity: 1;
  user-select: none;
  font-weight: 300;
`);

const Text = styled(Typography)({
  fontSize: "clamp(1rem, -0.875rem + 11vw, 3.5rem) !important", 
  fontWeight: 100,
  textAlign: "center",
  color: "#fff"
});