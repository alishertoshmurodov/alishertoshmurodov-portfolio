import ContactButton from "./ContactButton";
import { motion } from "framer-motion";
import "./Projects.css";
import projectsData from "../projects.json";

const projects = projectsData.map((project) => {
  return (
    <motion.div
      className="projects__project"
      key={project.name}
      initial={{ opacity: 0, y: '50%' }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{once: true}}
    >
      <div className="projects__project-img">
        <img src={project.photo} alt={project.name + " photo"}></img>
        <div className="projects__project-links">
          <a
            href={project.live}
            rel="noreferrer"
            target="_blank"
            className="button-main"
          >
            View project
          </a>
          <a
            href={project.github}
            rel="noreferrer"
            target="_blank"
            className="button-main"
          >
            View Code
          </a>
        </div>
      </div>
      <h4 className="projects__project-name">{project.name}</h4>
      <p className="projects__project-tools">{project.tools}</p>
    </motion.div>
  );
});

function Projects() {
  return (
    <section className="projects">
      <div className="projects__heading">
        <h2>Projects</h2>
        <ContactButton />
      </div>
      <div className="projects__container">{projects}</div>
    </section>
  );
}

export default Projects;
