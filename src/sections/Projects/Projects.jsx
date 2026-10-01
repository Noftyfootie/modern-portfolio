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

            <h2 className="projects__title">Projects I've worked on.</h2>
          </div>

          <p className="projects__description">
            A collection of projects I've built and contributed to while growing
            as a frontend developer.
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
