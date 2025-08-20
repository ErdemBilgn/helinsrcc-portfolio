import "./About.css";
import MEabout from "/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Beni Tanıyın</h5>
      <h2>Hakkımda</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={MEabout} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Tecrübe</h5>
              <small>3+ Yıllık Deneyim</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Müşteriler</h5>
              <small>200’den Fazla Müşteri</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projeler</h5>
              <small>80+ Tamamlanan Proje</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit earum eligendi qui voluptatibus laboriosam. Voluptate
            molestiae sed blanditiis, fugiat nemo, officia hic explicabo
            praesentium consequatur reprehenderit optio vel voluptatibus,
            officiis a sit quisquam ullam.
          </p>

          <a href="#contact" className="btn btn-primary">
            İletişime Geçin
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
