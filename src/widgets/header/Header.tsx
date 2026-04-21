import { Button } from "../../shared/ui";
import { Link } from "react-router";
import type { INavLinks } from "../../shared/types";
import { useState, useEffect } from "react";
import "./Header.scss";

const navLinks: INavLinks[] = [
  { title: "Credit card", path: "/" },
  { title: "Product", path: "/" },
  { title: "Account", path: "/" },
  { title: "Resources", path: "/" },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  // Закрываем меню при ресайзе окна на ширину > 500px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 500 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  return (
    <header className={`header ${isMenuOpen ? "menu-open" : ""}`}>
      <Link to="/" className="header__logo">
        NeoBank
      </Link>

      <nav className="header__nav">
        <ul className="header__nav-list">
          {navLinks.map(({ title, path }) => (
            <li key={title + path}>
              <Link to={path} className="header__nav-link" onClick={closeMenu}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="header__actions">
        <Button className="header__btn" onClick={closeMenu}>
          Online Bank
        </Button>
        <Button
          className="header__burger"
          onClick={toggleMenu}
          aria-label="Меню"
          aria-expanded={isMenuOpen}
        >
          ☰
        </Button>
      </div>
    </header>
  );
};
