import { useNavigate } from "react-router";
import "./NotFoundSection.scss";
import { Button } from "../../../../shared/ui";

export const NotFoundSection: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <section
      className="not-found-section"
      aria-labelledby="not-found-section__title"
    >
      <div className="not-found-section__left-bar">
        <span className="not-found-section__top-text">Oops....</span>
        <h2 id="not-found-section__title" className="not-found-section__title">
          Page not found
        </h2>
        <p className="not-found-section__description">
          This Page doesn`t exist or was removed! We suggest you go back.
        </p>
        <Button onClick={handleClick} className="not-found-section__btn">
          Go back
        </Button>
      </div>
      <img
        src="/images/404.svg"
        alt="404 image"
        className="not-found-section__image"
      />
    </section>
  );
};
