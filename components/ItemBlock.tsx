import { useEffect, RefObject } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import React from "react";

export default function ItemsBlock() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [currentSlideText, setCurrentSlideText] = React.useState(null);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: "free-snap",
    slides: { origin: "center",spacing: 35 },
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    breakpoints: {
      "(min-width: 368px)": {
        slides: {perView: 1.25, origin: "center",spacing: 35 },
        mode: "free-snap"
      },
      "(min-width: 768px)": {
        slides: {perView: 1.5, origin: "center",spacing: 35 },
        mode: "free-snap"
      },
      "(min-width: 1200px)": {
        slides: {perView: 3, origin: "center",spacing: 35 },
        mode: "free-snap"
      }
    }
  });

  const slide: React.CSSProperties = {
    width: "100vw",
    height: "300px",
    backdropFilter: "blur(15px)",
    borderRadius: "10px",
    padding: "16px",
    boxSizing: "border-box",
    background: "linear-gradient(45deg, #1e8dff, #77e9fb)",
    // border: "4px solid rgb(244 0 0 / 30%)",
    userSelect: "none"
  };
  const sliderWrap: React.CSSProperties = {
    display: "flex",
    overflowX: 'hidden',
    paddingBottom:'70px'
  };
  function getClass(params:Number) {
    return "currentSlide";
  }
  useEffect(() => {
    let elem: any = document.querySelector('.currentSlide') as HTMLElement;
    setCurrentSlideText(elem.dataset.text);
    // document.querySelector("#progress").style.left = 100 * currentSlide + "px";
  }, [currentSlide]);
  const designerText: React.CSSProperties = {
    fontSize: "60px",
    WebkitTextStroke: "1px var(--main-color)",
    WebkitTextFillColor: "transparent",
    height: "0",
    textAlign: "left",
    position: "relative",
    zIndex: 2,
    opacity: "1",
    paddingLeft: "10vw",
    userSelect: "none",
    fontWeight: '300',
    top: '-210px'
  };
  const progressWrap: React.CSSProperties = {
    width: "100%",
    margin: "45px 0px 25px 0",
    padding: "0 15px 0 16px",
    background: "rgba(0,0,0,0.071)",
    display: "flex",
    height: "2px",
    justifyContent: "flex-start",
    alignItems: "center"
  };
  let progress: React.CSSProperties = {
    background: "var(--main-color)",
    height: "2px",
    width: "25%",
    opacity: ".6",
    position: "relative",
    left: 25 * currentSlide + "%",
    transition: "all 0.5s cubic-bezier(0.73, 0.39, 0, 0.69) 0s"
  };
  return (
    <>
      <div className="slider reveal" style={sliderWrap} ref={sliderRef}>
        <div
          data-text="Personals"
          style={slide}
          className={
            currentSlide === 0
              ? getClass(1) + " keen-slider__slide"
              : "keen-slider__slide"
          }
        >
          1
        </div>
        <div
          data-text="Work projects"
          style={slide}
          className={
            currentSlide === 1
              ? getClass(1) + " keen-slider__slide"
              : "keen-slider__slide"
          }
        >
          2
        </div>
        <div
          data-text="Others"
          style={slide}
          className={
            currentSlide === 2
              ? getClass(2) + " keen-slider__slide"
              : "keen-slider__slide"
          }
        >
          3
        </div>
        <div
          data-text="Others"
          style={slide}
          className={
            currentSlide === 3
              ? getClass(3) + " keen-slider__slide"
              : "keen-slider__slide"
          }
        >
          4
        </div>
      </div>
      <div
        style={designerText}
        data-speed="5"
        data-top="200"
        className="backtext"
      >
        {currentSlide + 1}. {currentSlideText}
      </div>
      <div style={progressWrap}>
        <div id="progress" style={progress}></div>
      </div>
    </>
  );
}
