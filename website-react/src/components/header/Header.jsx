import "./Header.css";
import { NavLink } from "react-router-dom";

import homeIcon from "../../assets/svgs/inicio/Home.svg";
import menuIcon from "../../assets/svgs/inicio/Menu.svg";

export default function Header({ className = "" }) {
    return (
        <header className={`HEADER ${className}`}>
            <nav className="HEADER-nav">
                <NavLink to="/" className="HEADER-icon-left">
                    <img src={homeIcon} alt="Inicio" />
                </NavLink>

                <NavLink to="/proyectos" className={({ isActive }) => `HEADER-item ${isActive ? "active" : ""}`}>
                    Proyectos
                </NavLink>

                <NavLink to="/programa" className={({ isActive }) => `HEADER-item ${isActive ? "active" : ""}`}>
                    Programa
                </NavLink>

                <NavLink to="/novedades" className={({ isActive }) => `HEADER-item ${isActive ? "active" : ""}`}>
                    Novedades
                </NavLink>

                <NavLink to="/semilleros" className={({ isActive }) => `HEADER-item ${isActive ? "active" : ""}`}>
                    Semilleros
                </NavLink>

                <NavLink to="/" className="HEADER-icon-right">
                    <img src={menuIcon} alt="Menú" />
                </NavLink>
            </nav>
        </header>
    );
}
