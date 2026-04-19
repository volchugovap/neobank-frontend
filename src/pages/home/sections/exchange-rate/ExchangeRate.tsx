import { Link } from "react-router";
import "./ExchangeRate.scss";

export const ExchangeRate: React.FC = () => {
  return (
    <section className="converter" aria-labelledby="converter__title">
      <div className="converter__left-side">
        <h2 className="converter__title" id="converter__title">
          Exchange rate in internet bank
        </h2>

        <p className="converter__currency-label">Currency</p>

        <Link to={"/"} className="converter__link">
          All courses
        </Link>
      </div>

      <div className="converter__right-side">
        <p className="converter__info">
          Update every 15 minutes, MSC 09.08.2022
        </p>
        <img
          src="/images/home-page/bank.svg"
          alt="bank icon"
          className="converter__bank-img"
        />
      </div>
    </section>
  );
};
