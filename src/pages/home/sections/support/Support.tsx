import "./Support.scss";
import { Input } from "./ui";

export const Support: React.FC = () => {
  return (
    <section className="section-support" aria-labelledby="support__title">
      <h2 className="section-support__title" id="support__title">
        Support
      </h2>
      <p className="section-support__top-paragraph">
        Subscribe Newsletter & get
      </p>
      <p className="section-support__bottom-paragraph">Bank News</p>
      <Input />
    </section>
  );
};
