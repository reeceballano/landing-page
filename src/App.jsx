import { createBrowserRouter, RouterProvider } from "react-router";
import routesConfig from "./router/routerConfig";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

const router = createBrowserRouter(routesConfig);

const App = () => {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    )
}

export default App;