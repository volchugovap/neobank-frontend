import "./ServicesInTheWorld.scss";

export const ServicesInTheWorld: React.FC = () => {
  return (
    <section className="section-services" aria-labelledby="services__title">
      <h2 className="section-services__title" id="services__title">
        You can use our services anywhere in the world
      </h2>
      <p className="section-services__description">
        Withdraw and transfer money online through our application
      </p>
      <img
        loading="lazy"
        alt="global map"
        src="/images/home-page/global.svg"
        className="section-services__image"
      />
    </section>
  );
};
