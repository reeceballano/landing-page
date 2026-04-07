import { Children } from "react"
import DefaultLayout from "../layouts/DefaultLayout"
import Home from "../pages/Home"

const routesConfig = [
    {
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]

    }
]

export default routesConfig;