import {
  Cards,
  ExchangeRate,
  Features,
  News,
  ServicesInTheWorld,
  Support,
} from "./sections";
import "./HomePage.scss";

export const Home: React.FC = () => {
  return (
    <main className="main">
      <Cards />
      <Features />
      <ExchangeRate />
      <ServicesInTheWorld />
      <News />
      <Support />
    </main>
  );
};
