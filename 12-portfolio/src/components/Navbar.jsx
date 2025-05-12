import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Columns2, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    // DoesNotWork?
    const handleScroll = () => {
      setIsScrolled(window.screenY < 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300 ',
        isScrolled ? 'py-3 bg-background/95 backdrop-blur-md shadow-xs' : 'py-5'
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          className="text-lg font-black text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10 uppercase">
            <span className="text-glow text-foreground">NAME </span>
            <span>Portfolio</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-4">
          {navLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.href}
                className="text-foreground/80 hover:text-primary transation-colors duration-300 font-semibold"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Menu Toggler [Displayed only on Mobile] */}
        <button
          onClick={() => setIsMenuOpened((prev) => !prev)}
          className="md:hidden cursor-pointer z-999"
          aria-label={isMenuOpened ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpened ? <X /> : <Menu />}
        </button>

        {/* Mobile nav */}
        <div
          className={cn(
            'md:hidden fixed inset-0 bg-background/85  backdrop-blur-xs z-40',
            'transition-all duration-300 flex flex-col items-center justify-center',
            isMenuOpened
              ? ' opacity-100 pointer-events-auto'
              : ' opacity-0 pointer-events-none'
          )}
        >
          <ul className="flex flex-col items-center gap-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  onClick={() => setIsMenuOpened(false)}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transation-colors duration-300 font-semibold"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
