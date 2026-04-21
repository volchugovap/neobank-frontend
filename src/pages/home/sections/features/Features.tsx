import "./Features.scss";

const phrases = [
  "Powerfull online protection",
  "Cashback without borders",
  "Personal design",
  "Work anywhere in the world",
];

export const Features: React.FC = () => {
  return (
    <section className="section-features" aria-labelledby="features__title">
      <img
        src="/images/home-page/programmer.svg"
        alt="programmer"
        className="section-features__img"
      />

      <div className="section-features__text-container">
        <h2 className="section-features__title" id="features__title">
          We Provide Many Features You Can Use
        </h2>
        <p className="section-features__description">
          You can explore the features that we provide with fun and have their
          own functions each feature
        </p>
        <ul className="section-features__list-items">
          {phrases.map((el) => (
            <li key={el} className="section-features__item">
              <img
                src="/images/home-page/success.svg"
                alt=""
                role="presentation"
              />
              {el}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
