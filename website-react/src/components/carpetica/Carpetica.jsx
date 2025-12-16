import "./Carpetica.css";

export default function Carpetica({ clasificaciN, dA, mes, imagen }) {
    return (
        <div className="carpetica">
            <div className="carpetica-top">{imagen ? <img src={imagen} alt={clasificaciN} /> : <div className="img-placeholder" />}</div>

            <div className="carpetica-info">
                <div className="carpetica-label">{clasificaciN}</div>
                <div className="carpetica-date">
                    <span className="dia">{dA}</span>
                    <span className="mes">{mes}</span>
                </div>
            </div>
        </div>
    );
}
