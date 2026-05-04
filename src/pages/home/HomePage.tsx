import { Cards, ExchangeRate, Benefits, News, ServicesInTheWorld, Support } from "./sections";

export const HomePage: React.FC = () => {
	return (
		<main>
			<Cards />
			<Benefits />
			<ExchangeRate />
			<ServicesInTheWorld />
			<News />
			<Support />
		</main>
	);
};
