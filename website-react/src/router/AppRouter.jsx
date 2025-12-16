import { createBrowserRouter } from "react-router-dom";

import Inicio from "../pages/inicio/Inicio";
import AppLayout from "../components/layout/AppLayout";

const router = createBrowserRouter([
    // Rutas públicas:
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                index: true,
                element: <Inicio />,
            },
        ],
    },

    // Not Found [404]
    {
        path: "*",
        element: <h2>Página no encontrada</h2>,
    },
]);

export default router;
