import { Button } from "../../../../shared/ui";
import "./Cards.scss";

interface ILink {
  src: string;
  alt: string;
}
const imagesLink: ILink[] = [
  { src: "/images/home-page/cardImage1.svg", alt: "card design" },
  { src: "/images/home-page/cardImage2.svg", alt: "card design" },
  { src: "/images/home-page/cardImage3.svg", alt: "card design" },
  { src: "/images/home-page/cardImage4.svg", alt: "card design" },
];

export const Cards: React.FC = () => {
  return (
    <section className="section-cards" aria-labelledby="cards__title">
      <div className="section-cards__text-container">
        <h2 className="section-cards__title" id="cards__title">
          Choose the design you like and apply for card right now
        </h2>
        <Button className="section-cards__btn">Choose the card</Button>
      </div>

      <ul className="section-cards__cards" role="list">
        {imagesLink.map(({ src, alt }) => (
          <li key={src} role="listitem">
            <img
              src={src}
              alt={alt}
              key={src}
              className="section-cards__card-img"
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
