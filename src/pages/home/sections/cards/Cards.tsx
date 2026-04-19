import { Button } from "../../../../shared/ui";
import "./Cards.scss";
import "/src/shared/styles/_variables.scss";

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

      <figure className="section-cards__cards">
        {imagesLink.map(({ src, alt }) => (
          <img src={src} alt={alt} key={src} />
        ))}
      </figure>
    </section>
  );
};
