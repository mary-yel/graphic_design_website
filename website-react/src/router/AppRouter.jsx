import { createBrowserRouter } from "react-router-dom";

import Inicio from "../pages/inicio/Inicio";
import Proyectos from "../pages/proyectos/Proyectos";
import Programa from "../pages/programa/Programa";
import Novedades from "../pages/novedades/Novedades";
import Semilleros from "../pages/semilleros/Semilleros";
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
            {
                path: "proyectos",
                element: <Proyectos />,
            },
            {
                path: "programa",
                element: <Programa />,
            },
            {
                path: "novedades",
                element: <Novedades />,
            },
            {
                path: "semilleros",
                element: <Semilleros />,
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
