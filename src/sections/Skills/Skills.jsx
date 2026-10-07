import SkillCard from "../../components/SkillCard/SkillCard";
import skills from "../../data/skills";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__container">
        <div className="skills__header">
          <div>
            <span className="skills__eyebrow">Skills & Technologies</span>

            <h2 className="skills__title">Tools I Use to Build</h2>
          </div>

          <p className="skills__description">
            The technologies, tools, and development skills I use to create
            modern, responsive, and engaging digital experiences.
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
