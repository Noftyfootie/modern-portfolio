import AchievementCard from "../../components/AchievementCard/AchievementCard";
import achievements from "../../data/achievements";
import "./Achievements.css";

function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements__container">
        <div className="achievements__header">
          <div>
            <span className="achievements__eyebrow">Achievements</span>

            <h2 className="achievements__title">
              Learning, Growth & Experience
            </h2>
          </div>

          <p className="achievements__description">
            A collection of academic milestones, professional experience, and
            certifications that have shaped my journey as a developer.
          </p>
        </div>

        <div className="achievements__grid">
          {achievements.map((achievement) => (
            <AchievementCard key={achievement.id} achievement={achievement} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;
