import "./Footer.css";

import Logo1 from "../../assets/svgs/inicio/LogoUniversidad.svg";
import Logo2 from "../../assets/svgs/inicio/LogoAcreditacion.svg";
import Logo3 from "../../assets/svgs/inicio/LogoDiseno.svg";

import Adorno4 from "../../assets/svgs/inicio/AdornoTipo4.svg";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-esq">
                <img src={Adorno4} alt="Esquinero izquierdo" className="esquinero-footer esquinero-footer-left" />
                <img src={Adorno4} alt="Esquinero derecho" className="esquinero-footer esquinero-footer-right" />
            </div>

            <div className="footer-body">
                <div className="footer-top">
                    <div className="footer-info-left">
                        <p className="Justify">
                            Lidera la comunicación visual y publicitaria con un enfoque global, sostenible y tecnológico. Transforma tu creatividad en soluciones innovadoras que conectan marcas con las nuevas tendencias del mundo.
                        </p>
                    </div>

                    <div className="footer-logo">
                        <img src={Logo1} alt="Logo Universidad" id="Universidad" />
                        <img src={Logo2} alt="Logo Acreditación" id="Acreditacion" />
                        <img src={Logo3} alt="Logo Diseño Gráfico" id="LogoDiseno" />
                    </div>

                    <div className="footer-info-right">
                        <p>Cra. 6 Nº 14-27</p>
                        <p>PBX: (+57) (605) 5730073</p>
                        <p>Horario de Atención: Lunes a viernes de</p>
                        <p>8:00 a.m. a 12:00 p.m.</p>
                        <p>2:00 p.m. a 7:00 p.m.</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>Copyright © Universidad de Santander 2025</span>
                    <div className="footer-links">
                        <span>Términos</span>
                        <span>Condiciones</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
