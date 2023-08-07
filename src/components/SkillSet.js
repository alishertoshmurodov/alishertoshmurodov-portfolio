import { motion } from "framer-motion";
import "./SkillSet.css";

const skillsData = [
  {
    name: "HTML",
    experience: "1",
    key: 1,
  },
  {
    name: "CSS",
    experience: "1",
    key: 2,
  },
  {
    name: "Javascript",
    experience: "1",
    key: 3,
  },
  {
    name: "Accessibility",
    experience: "1",
    key: 4,
  },
  {
    name: "React",
    experience: "0.5",
    key: 5,
  },
  {
    name: "Sass",
    experience: "0.5",
    key: 6,
  },
];

const skills = skillsData.map((skill) => {
  return (
    <motion.div
      className="skillset__item"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{duration: 0.3, ease: 'linear'}}
      key={skill.key}
    >
      <h3>{skill.name}</h3>
      <p>{skill.experience} Years Experience</p>
    </motion.div>
  );
});

function SkillSet() {
  return <section className="skillset">{skills}</section>;
}

export default SkillSet;
