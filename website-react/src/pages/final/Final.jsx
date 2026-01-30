import "./Final.css";

import Agradecimiento from "../../assets/svgs/final/final.svg";

export default function Final() {
    return (
        <div className="final-container">
            <img src={Agradecimiento} className="mensaje-agradecimiento" />
        </div>
    );
}