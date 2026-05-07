import { Link } from "react-router";
import { useCurrencyRates } from "../../../../features";
import { RoundLoader } from "../../../../shared/ui";
import "./ExchangeRate.scss";

const CURRENCIES: string[] = ["USD", "EUR", "RUB", "CNY", "TRY", "CHF"];

export const ExchangeRate: React.FC = () => {
	const { rates, isLoading } = useCurrencyRates({
		baseCurrency: "RUB",
		targetCurrencies: CURRENCIES,
	});

	const mskDate = new Date().toLocaleString("ru-RU", {
		timeZone: "Europe/Moscow",
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
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
						{CURRENCIES.map((code) => (
							<li key={code} className="converter__currency-item">
								<span className="converter__currency-name">{code}:</span>

								{isLoading && <RoundLoader />}
								{!isLoading && (
									<span className="converter__currency-value">
										{rates?.[code] ? (1 / rates[code]).toFixed(2) : "—"}
									</span>
								)}
							</li>
						))}
					</ul>
				</div>
				<img
					alt="bank image"
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
