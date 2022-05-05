import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/system";

type AppProps = {
  text: string;
};

const DesignElem: NextPage<AppProps> = ({ text }): JSX.Element => {
  return (
    <Container data-aos="anim1" sx={{ my: 10 }}>
      <Box
        sx={{
          bgcolor: "rgb(var(--two)/30%)",
          my: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{ fontSize: "max(6vw, 25px) !important", fontWeight: 100 }}
          textAlign={"center"}
          data-aos="anim1"
          data-aos-delay="100"
        >
          {text}
        </Typography>
        <Typography
          sx={{ fontSize: "max(6vw, 25px) !important", fontWeight: 100 }}
          textAlign={"center"}
          data-aos="anim1"
          data-aos-delay="200"
        >
          {text}
        </Typography>
        <Typography
          sx={{ fontSize: "max(6vw, 25px) !important", fontWeight: 100 }}
          textAlign={"center"}
          data-aos="anim1"
          data-aos-delay="300"
        >
          {text}
        </Typography>
        <Typography
          sx={{ fontSize: "max(6vw, 25px) !important", fontWeight: 100 }}
          textAlign={"center"}
          data-aos="anim1"
          data-aos-delay="400"
        >
          {text}
        </Typography>
        <Typography
          sx={{ fontSize: "max(6vw, 25px) !important", fontWeight: 100 }}
          textAlign={"center"}
          data-aos="anim1"
          data-aos-delay="500"
        >
          {text}
        </Typography>
        <Typography
          sx={{ fontSize: "max(6vw, 25px) !important", fontWeight: 100 }}
          textAlign={"center"}
          data-aos="anim1"
          data-aos-delay="600"
        >
          {text}
        </Typography>
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