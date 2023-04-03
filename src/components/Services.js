import { Title } from "./Title.js";
import { services } from "../data.js";

export const Services = () => {
  return (
    <section className="section services" id="services">
      <Title uncolored="our" colored="services" />
      <div className="section-center services-center">
        {services.map((service) => (
          <article className="service" key={service.id}>
            <span className="service-icon">
              <i className={service.icon}></i>
            </span>
            <div className="service-info">
              <h4 className="service-title">{service.text}</h4>
              <p className="service-text">{service.subText}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
