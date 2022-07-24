import { useEffect } from "react";

export default function useLocoScroll(start:any) {
    useEffect(() => {
        let scroll:any;
        // @ts-ignore
        import("locomotive-scroll").then((locomotiveModule) => {
            scroll = new locomotiveModule.default({
                el: document.querySelector("[data-scroll-container]"),
                smooth: true,
                smoothMobile: true,
                resetNativeScroll: true,
                lerp: 0.12
            });
        });
        return () => {
            if (scroll) {
                console.log('scroll destroy');
                scroll.destroy();
            }
        }
    },[]);
}