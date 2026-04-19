import {
  Cards,
  ExchangeRate,
  Features,
  News,
  ServicesInTheWorld,
  Support,
} from "./sections";

export const HomePage: React.FC = () => {
  return (
    <main>
      <Cards />
      <Features />
      <ExchangeRate />
      <ServicesInTheWorld />
      <News />
      <Support />
    </main>
  );
};
