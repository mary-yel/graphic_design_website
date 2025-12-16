import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-info-left">
                    <p>
                        El programa de Diseño Gráfico en la Universidad de Santander, tiene el propósito de solucionar necesidades de la comunicación comercial y las nuevas tendencias de comunicación interactiva de la sociedad, en concordancia con
                        las políticas nacionales relacionadas con la profesión y la educación universitaria.
                    </p>
                </div>

                <div className="footer-logo">
                    <div className="placeholder-logo">DISEÑO GRÁFICO</div>
                </div>

                <div className="footer-info-right">
                    <p>Cra. 6 Nº 14-27</p>
                    <p>PBX: (+57) (605) 5730073</p>
                    <p>Horario: Lunes a Viernes 8:00 a.m. a 12:00 m / 2:00 p.m. a 7:00 p.m.</p>
                </div>
            </div>

            <div className="footer-bottom">
                <span>Copyright © 2025</span>
                <div className="footer-links">
                    <span>Términos</span>
                    <span>Condiciones</span>
                </div>
            </div>
        </footer>
    );
}
