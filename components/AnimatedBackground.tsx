import type { NextPage } from "next";
import React, { useRef, useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";
import { useTheme } from '@mui/material/styles';

type AppProps = {
  filter: string;
  top: string;
  opacity?: string;
};

const AnimatedBackground: NextPage<AppProps> = ({ filter,top,opacity }): JSX.Element => {
  const theme = useTheme();
  return (
    <VideoTag>
      {theme.palette.mode === "dark" ?
        <video autoPlay loop muted playsInline src="/back_dark.mp4"
          style={{
              filter: filter,
              top: top,
              opacity: opacity?opacity:1
          }}
        >
        </video>
        :
        <video autoPlay loop muted playsInline src="/back_light.mp4"
          style={{
              filter: filter,
              top: top,
              opacity: opacity?opacity:1
          }}
        ></video>
      }
    </VideoTag>
  );
};

export default AnimatedBackground;

const VideoTag = styled(Box)(`
video {
    z-index: -1;
    position: absolute;
    top: -76px;
    right: -90px;
    transform: scalex(-1);
    filter: hue-rotate(267deg);
    width: 85%;
    /* Extra small devices (phones, 600px and down) */
    @media only screen and (max-width: 600px) {
      width: 185%;
    }
    /* Small devices (portrait tablets and large phones, 600px and up) */
    @media only screen and (min-width: 600px) {
      width: 155%;
    }
    /* Medium devices (landscape tablets, 768px and up) */
    @media only screen and (min-width: 768px) {
      width: 135%;
    }
    /* Large devices (laptops/desktops, 992px and up) */
    @media only screen and (min-width: 992px) {
      right: -0px;
      width: 90%;
    }
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    @media only screen and (min-width: 1200px) {
      right: -0px;
      top: -76px;
      width: 80%;
    }
}
    
`);
