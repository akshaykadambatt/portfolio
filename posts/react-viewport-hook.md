---
title: 'A viewport hook for React'
metaTitle: 'For creating a responsive layout in React JS'
metaDesc: 'For creating a responsive layout in React JS'
socialImage: images/23-09-2022.jpg
date: '2022-11-20'
tags:
  - code
  - vanilla-js
  - react
  - post
---
# A viewport hook for React
## For creating a responsive layout in React JS
Creating a responsive layout in react can get really complicated if we dont follow a solid base of development. Here's a great way to structure your responsive data into a clean React custom hook.
```js
import { useEffect, useState } from "react"

const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth)

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth)
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return { 
        width: width, //viewport width
        tab: 1023, //tablet breakpoint
        mob: 767  // mobile breakpoint
        }
}

export default useViewport
```
Place this code in a typescript or javascript file anywhere in the src folder and use the hook in the following manner.
```js
//in the imports;
import useViewport from "../data/useViewport";

//within the functional component;
const viewport = useViewport();

//in the return jsx;
{
    (viewport.width < viewport.mob) ? <MobileComponent /> : <DesktopComponent />
}
```
The hook can be further extended for more complicated functions, like getting viewport height, maybe color schemes, or even as a base theme source. 