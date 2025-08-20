import "./Services.css";
import { BiCheck } from "react-icons/bi";

const service1List = [
  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const service2List = [
  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const service3List = [
  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>Sunduğum Hizmetler</h5>
      <h2>Hizmetlerim</h2>

      <div className="container services__container">
        {/* SERVICE 1  */}
        <article className="service">
          <div className="service__head">
            <h3>İç Mekan Tasarımları</h3>
          </div>

          <ul className="service__list">
            {service1List.map((item, index) => (
              <li key={"0" + index}>
                <BiCheck className="service__list-icon" />
                <p>{item.p}</p>
              </li>
            ))}
          </ul>
        </article>

        {/* SERVICE 2  */}
        <article className="service">
          <div className="service__head">
            <h3>Peyzaj Tasarımları</h3>
          </div>

          <ul className="service__list">
            {service2List.map((item, index) => (
              <li key={"1" + index}>
                <BiCheck className="service__list-icon" />
                <p>{item.p}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* SERVICE 3  */}

        <article className="service">
          <div className="service__head">
            <h3>Karışık Tasarımlar</h3>
          </div>

          <ul className="service__list">
            {service3List.map((item, index) => (
              <li key={"2" + index}>
                <BiCheck className="service__list-icon" />
                <p>{item.p}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
