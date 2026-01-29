import "./CareerPlan.css";

export default function CareerPlan({ subtitle, description, images, icon }) {
    return (
        <section className="plan-section">
            <h3 className="plan-title">
                {subtitle}
                {icon && <img src={icon} alt="" />}
            </h3>

            {description && <p className="plan-description">{description}</p>}

            <div className="plan-slider">
                {images.map((img, i) => (
                    <img key={i} src={img} alt={`Semestre ${i + 1}`} />
                ))}
            </div>
        </section>
    );
}
