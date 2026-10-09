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
            <span className="projects__eyebrow"> Project</span>

            <h2 className="projects__title">Built with Purpose</h2>
          </div>

          <p className="projects__description">
            You will discover various projects that embody big dreams starting
            from small beginnings, ranging from innovative digital solutions to
            services that promote sustainability.
          </p>
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
