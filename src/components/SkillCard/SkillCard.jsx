import "./SkillCard.css";

function SkillCard({ skill }) {
  return (
    <article className="skill-card">
      <div className="skill-card__number">0{skill.id}</div>

      <div className="skill-card__content">
        <h3 className="skill-card__title">{skill.title}</h3>

        <p className="skill-card__description">{skill.description}</p>

        <div className="skill-card__technologies">
          {skill.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default SkillCard;
