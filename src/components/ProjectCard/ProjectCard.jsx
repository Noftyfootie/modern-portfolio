import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      {/* Project Visual */}
      <div className="project-card__visual">
        <img
          src={project.images.default}
          alt={`${project.title} project preview`}
          className="project-card__image project-card__image--default"
        />

        <img
          src={project.images.hover}
          alt=""
          aria-hidden="true"
          className="project-card__image project-card__image--hover"
        />
      </div>

      {/* Project Information */}
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>

        <h3 className="project-card__title">{project.title}</h3>

        <p className="project-card__description">{project.description}</p>

        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        <div className="project-card__links">
          <a
            href={project.liveUrl}
            className="project-card__link project-card__link--primary"
          >
            View Project
            <span aria-hidden="true">↗</span>
          </a>

          <a
            href={project.githubUrl}
            className="project-card__link project-card__link--secondary"
          >
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
