import { Button } from "../../../../../../shared/ui";
import "./Input.scss";

export const Input: React.FC = () => {
  return (
    <div role="group" aria-label="input field" className="input-wrapper">
      <img
        src="/images/home-page/email.svg"
        alt="email image"
        className="input-wrapper__image"
      />
      <input
        type="email"
        placeholder="Your email"
        className="input-wrapper__input"
      />

      <Button
        type="button"
        className="input-wrapper__btn"
        icon={{ src: "/images/home-page/send.svg", alt: "sent svg" }}
      >
        Subscribe
      </Button>
    </div>
  );
};
