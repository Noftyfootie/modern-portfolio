import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projects";
import "./Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        {/* Section Header */}
        <div className="projects__header">
          <div>
            <span className="projects__eyebrow">Selected Work</span>

            <h2 className="projects__title">Dream Big with Start Small</h2>
          </div>
        </div>

        {/* Projects */}
        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
