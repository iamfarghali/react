import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
  const [active, setActive] = useState("#home");
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Our Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-red-50/75 to-blue-50/75 z-999 shadow-xs backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-12">
        {/* Logo */}
        <Logo />

        {/* Links */}
        <ul className="hidden md:flex items-center justify-between gap-2 h-full ">
          {links.map((link) => (
            <li key={link.href} className="h-full">
              <a
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`
                            relative h-full flex items-center px-3 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:bg-blue-600 hover:after:w-full hover:after:h-[1px] focus:outline-none focus:ring-2 focus:ring-blue-300 ${
                              active === link.href
                                ? "after:w-full after:h-[1px] text-blue-600"
                                : "text-gray-700 hover:text-gray-950"
                            }
                        `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => setActive("#newsletter")}
          className="hidden md:block focus:outline-none focus:ring-2 focus:ring-blue-300 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer"
        >
          <a
            className="inline-block px-4 py-2 focus:outline-none"
            href="#newsletter"
          >
            Get in touch
          </a>
        </button>

        {/* Mobile Menu Toggler [Displayed only on mobile screens] */}
        <button
          onClick={() => setIsMenuOpened((prev) => !prev)}
          className="md:hidden text-lg cursor-pointer text-gray-500 hover:text-gray-800"
        >
          <i
            className={`fa-solid ${isMenuOpened ? "fa-xmark" : "fa-bars"}`}
          ></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpened && (
        <div className="md:hidden px-2 pt-4 pb-6 border-t border-gray-200">
          {/* Links */}
          <ul className="flex flex-col justify-between gap-4">
            {links.map((link) => (
              <li key={link.href} className="h-full">
                <a
                  href={link.href}
                  onClick={() => {
                    setActive(link.href);
                    active !== link.href && setIsMenuOpened(false);
                  }}
                  className={`flex items-center px-3 text-sm font-medium ${
                    active === link.href ? "text-blue-600" : "text-gray-600"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
            onClick={() => {
              setActive("#newsletter");
              setIsMenuOpened(false);
            }}
            className="mt-6 w-full bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer"
          >
            <a className="inline-block px-4 py-2" href="#newsletter">
              Get in touch
            </a>
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
