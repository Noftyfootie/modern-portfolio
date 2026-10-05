import "./AchievementCard.css";

function AchievementCard({ achievement }) {
  return (
    <article className="achievement-card">
      <div className="achievement-card__top">
        <span className="achievement-card__category">
          {achievement.category}
        </span>

        <span className="achievement-card__year">{achievement.year}</span>
      </div>

      <div className="achievement-card__content">
        <h3 className="achievement-card__title">{achievement.title}</h3>

        <p className="achievement-card__organization">
          {achievement.organization}
        </p>

        <p className="achievement-card__description">
          {achievement.description}
        </p>
      </div>

      {achievement.certificate && (
        <div className="achievement-card__certificate">
          <img
            src={achievement.certificate}
            alt={`${achievement.title} certificate`}
          />
        </div>
      )}
    </article>
  );
}

export default AchievementCard;
