import "./LongSeed.css";
import InstagramFeed from "../common/InstagramFeed.jsx";

export default function LongSeed({ logo, descp, etiquetas = [], galeria = [], feed, url }) {
    return (
        <div className="long-seed-container">

            <div className="long-seed-logo">
                {logo ? <img src={logo} alt="logo_semillero" /> : <div className="img-placeholder" />}
                <h2>Salidas de Campo:</h2>
            </div>

            <div className="long-seed-info">
                
                <div className="long-seed-tags">
                    {etiquetas.map((tag, index) => (
                        <span key={index} className="long-seed-tag">
                            {tag}
                        </span>
                    ))}
                </div>

                <p className="long-seed-descp">{descp}</p>

                <div className="long-seed-gallery">
                    {galeria.map((img, index) => (
                        <img key={index} src={img} alt={`Galería ${index + 1}`} />
                    ))}
                </div>
            </div>

            <div className="long-seed-social">
                <InstagramFeed imagen={feed} link={url} />
                <h4>¡Síguenos!</h4>
            </div>

        </div>
    );
}
