import { Outlet, useLocation } from "react-router-dom";

import Header from "../header/Header";
import Footer from "../../components/footer/Footer";

export default function AppLayout() {

    // Para cambiar el color de fondo según página:

    const location = useLocation();

    const orangeRoutes = ["/proyectos", "/semilleros"];

    const isOrange = orangeRoutes.some(route =>
        location.pathname.startsWith(route)
    );

    const headerVariant = isOrange ? "orange" : "default";

    return (
        <div className="app-shell">
            <Header variant={headerVariant} />

            <div className="app-shell-body">
                <main className="app-main">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    );
}
