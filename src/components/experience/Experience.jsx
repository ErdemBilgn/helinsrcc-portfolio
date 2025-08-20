import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const arcthitectureSkills = [
  {
    name: "HTML",
    level: "İleri Seviye",
  },

  {
    name: "CSS",
    level: "Orta Seviye",
  },

  {
    name: "JavaScript",
    level: "İleri Seviye",
  },

  {
    name: "Bootstrap",
    level: "Başlangıç",
  },

  {
    name: "Tailwind",
    level: "Orta Seviye",
  },

  {
    name: "React",
    level: "İleri Seviye",
  },
];

const landscapeSkills = [
  {
    name: "HTML",
    level: "İleri Seviye",
  },

  {
    name: "CSS",
    level: "Orta Seviye",
  },

  {
    name: "JavaScript",
    level: "İleri Seviye",
  },

  {
    name: "Bootstrap",
    level: "Başlangıç",
  },

  {
    name: "Tailwind",
    level: "Orta Seviye",
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <h5>Uzmanlık Alanlarım</h5>
      <h2>Deneyimlerim</h2>

      <div className="container experience__container">
        {/* ARCHITECTURE */}
        <div className="experience__architecture">
          <h3>İç Mimarlık</h3>
          <div className="experience__content">
            {arcthitectureSkills.map((skill, index) => (
              <article key={"a" + index} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* LANDSCAPE */}
        <div className="experience__landscape">
          <h3>Peyzaj Mimarlığı</h3>
          <div className="experience__content">
            {landscapeSkills.map((skill, index) => (
              <article key={"l" + index} className="experience__details">
                <BsPatchCheckFill className="experience__details-icon" />
                <div>
                  <h4>{skill.name}</h4>
                  <small className="text-light">{skill.level}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
