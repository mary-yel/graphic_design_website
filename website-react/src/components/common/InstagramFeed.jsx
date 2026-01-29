import "./InstagramFeed.css";

export default function InstagramFeed({ imagen, link }) {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="instagram-container"
        >
            {imagen 
                ? <img src={imagen} alt="Instagram" /> 
                : <div className="img-placeholder" />
            }
        </a>
    );
}
