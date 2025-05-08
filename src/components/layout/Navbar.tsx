import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../constants/styles";
import { navLinks } from "../../constants";
import { logo, menu, close, linkedin, githubs } from "../../assets";
import { config } from "../../constants/config";

const Navbar = () => {
  const [active, setActive] = useState<string>("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
      if (scrollTop < 100) setActive("");

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionId = current.getAttribute("id");
        if (!sectionId) return;

        const sectionElement = current as HTMLElement;
        const rect = sectionElement.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          window.scrollY >= sectionTop - sectionHeight * 0.3 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight * 0.3
        ) {
          setActive(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <style>
        {`
          @keyframes walkLeftRight {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(10px); }
          }
          .logo-walk {
            animation: walkLeftRight 1s ease-in-out infinite;
          }
        `}
      </style>

      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img
            src={logo}
            alt="logo"
            className="h-13 w-14 object-contain logo-walk"
          />
          <p className="flex cursor-pointer text-[18px] font-bold text-white">
            {config.html.title}
          </p>
        </Link>

        <div className="hidden sm:flex items-center gap-6 ml-auto">
          {["home", "about", "contact"].map((id) => {
            const nav = navLinks.find((n) => n.id === id);
            if (!nav) return null;
            return (
              <a
                key={nav.id}
                href={`#${nav.id}`}
                className={`${
                  active === nav.id ? "text-white" : "text-secondary"
                } cursor-pointer text-[18px] font-medium hover:text-white`}
              >
                {nav.title}
              </a>
            );
          })}

          <a
            href="https://www.linkedin.com/in/ritika-singh-232017248"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="h-6 w-6 transform transition-transform duration-300 hover:scale-110"
            />
          </a>

          <a
            href="https://github.com/Ritika800"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-white"
          >
            <img
              src={githubs}
              alt="GitHub"
              className="h-8 w-8 transform transition-transform duration-300 hover:scale-110"
            />
          </a>
        </div>

        <div className="flex flex-1 items-center justify-end sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="h-[28px] w-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } black-gradient absolute right-0 top-20 z-10 mx-4 my-2 min-w-[140px] rounded-xl p-6`}
          >
            <ul className="flex flex-col items-start gap-4">
              {["home", "about", "contact"].map((id) => {
                const nav = navLinks.find((n) => n.id === id);
                if (!nav) return null;
                return (
                  <li
                    key={nav.id}
                    className={`cursor-pointer text-[16px] font-medium ${
                      active === nav.id ? "text-white" : "text-secondary"
                    }`}
                    onClick={() => setToggle(false)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                );
              })}

              <li>
                <a
                  href="https://www.linkedin.com/in/ritika-singh-232017248"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white"
                >
                  <img
                    src={linkedin}
                    alt="LinkedIn"
                    className="h-5 w-5 transform transition-transform duration-300 hover:scale-110"
                  />
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/Ritika800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary hover:text-white"
                >
                  <img
                    src={githubs}
                    alt="GitHub"
                    className="h-5 w-4 transform transition-transform duration-300 hover:scale-110"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
