import "./Portfolio.css";
import { portfolio } from "../../portfolio";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Son Çalışmalarım</h5>
      <h2>Portföy</h2>

      <div className="container portfolio__container">
        {portfolio.map((item, index) => (
          <article key={index} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={item.imageURL} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <a href={item.href} className="btn">
              Detayları Gör
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
