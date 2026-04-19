import { Link } from "react-router";
import type { INavLinks } from "../../shared/types";
import "./Footer.scss";

const navLinks: INavLinks[] = [
  {
    path: "/",
    title: "About bank",
  },
  {
    path: "/",
    title: "Ask a Question",
  },
  {
    path: "/",
    title: "Quality of service",
  },
  {
    path: "/",
    title: "Requisites",
  },
  {
    path: "/",
    title: "Press center",
  },
  {
    path: "/",
    title: "Bank career",
  },
  {
    path: "/",
    title: "Investors",
  },
  {
    path: "/",
    title: "Analytics",
  },
  {
    path: "/",
    title: "Business and processes",
  },
  {
    path: "/",
    title: "Compliance and business ethics",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__top-container">
        <Link to={"/"} className="footer__logo-link">
          <img
            src="/images/logo.svg"
            alt="Neoflex logo"
            className="footer__logo"
          />
        </Link>
        <address className="footer__address">
          <a href="tel:+7(495)984-25-13" className="footer__address-number">
            +7 (495) 984 25 13
          </a>
          <a href="mailto:info@neoflex.ru" className="footer__address-email">
            info@neoflex.ru
          </a>
        </address>
      </div>

      <nav className="footer__nav" aria-label="Навигация по сайту">
        <ul className="footer__nav-list">
          {navLinks.map(({ path, title }) => (
            <li className="footer__item" key={path}>
              <Link to={path} className="footer__nav-link">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <p className="footer__description">
        We use cookies to personalize our services and improve the user
        experience of our website. Cookies are small files containing
        information about previous visits to a website. If you do not want to
        use cookies, please change your browser settings
      </p>
    </footer>
  );
};
