import { Outlet } from "react-router-dom";
import Header from "../header/Header";

export default function AppLayout() {
    return (
        <div className="app-shell">
            <Header />

            <div className="app-shell-body">
                <main className="app-main">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
