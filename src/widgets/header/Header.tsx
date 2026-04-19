import { Button } from "../../shared/ui";
import { Link } from "react-router";
import type { INavLinks } from "../../shared/types";
import "./Header.scss";

const navLinks: INavLinks[] = [
  {
    title: "Credit card",
    path: "/",
  },
  {
    title: "Product",
    path: "/",
  },
  {
    title: "Account",
    path: "/",
  },
  {
    title: "Resources",
    path: "/",
  },
];

export const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to={"/"} className="header__logo">
        NeoBank
      </Link>
      <nav>
        <ul className="header__nav-list">
          {navLinks.map(({ title, path }) => (
            <li key={title + path}>
              <Link to={path} className="header__nav-link">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Button className="header__btn">Online Bank</Button>
    </header>
  );
};
