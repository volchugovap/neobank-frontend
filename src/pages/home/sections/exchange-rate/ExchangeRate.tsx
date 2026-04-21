import { Link } from 'react-router';
import './ExchangeRate.scss';

interface IPrice {
  currency: string;
  price: number;
}

const prices: IPrice[] = [
  { currency: 'USD', price: 60 },
  { currency: 'JPY', price: 65 },
  { currency: 'RUB', price: 0.8 },
  { currency: 'EUR', price: 70 },
  { currency: 'FRA', price: 62 },
  { currency: 'TRU', price: 61 },
];

export const ExchangeRate: React.FC = () => {
  const mskDate = new Date().toLocaleString('ru-RU', {
    timeZone: 'Europe/Moscow',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const updateString = `Update every 15 minutes, MSC ${mskDate}`;

  return (
    <section className="converter" aria-labelledby="converter__title">
      <div className="converter__top">
        <h2 className="converter__title" id="converter__title">
          Exchange rate in internet bank
        </h2>
        <p className="converter__info">{updateString}</p>
      </div>

      <div className="converter__middle">
        <div className="converter__currency-group">
          <p className="converter__currency-label">Currency</p>
          <ul className="converter__currency-list">
            {prices.map(({ currency, price }, index) => (
              <li key={`${currency}-${index}`} className="converter__currency-item">
                <span className="converter__currency-name">{currency}:</span>
                <span className="converter__currency-value">{price}</span>
              </li>
            ))}
          </ul>
        </div>
        <img
          alt=""
          src="/images/home-page/bank.svg"
          className="converter__bank-img"
          role="presentation"
        />
      </div>

      <Link to="/" className="converter__bottom">
        All courses
      </Link>
    </section>
  );
};
