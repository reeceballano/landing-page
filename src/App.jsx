import { createBrowserRouter, RouterProvider } from "react-router";
import routesConfig from "./router/routerConfig";

const router = createBrowserRouter(routesConfig);

const App = () => {
    return (
        <div className="app">
            <RouterProvider router={router} />
        </div>
    )
}

export default App;