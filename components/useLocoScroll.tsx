import { useEffect } from "react";

export default function useLocoScroll() {
    useEffect(() => {
        let scroll:any;
        // @ts-ignore
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                smoothMobile: true,
                tablet: {
                    smooth: true
                },
                smartphone: {
                    smooth: false
                },
                resetNativeScroll: true,
                lerp: 0.12
            });
        });
        return () => {
            if (scroll) {
                scroll.destroy();
            }
        }
    },[]);
}