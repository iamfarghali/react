import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    isMenuOpened
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [isMenuOpened]);

  return (
    <nav
      className={cn(
        'fixed w-full z-99 transition-all duration-300 border-b border-transparent',
        isScrolled
          ? 'py-5 bg-background/90 backdrop-blur-md border-border'
          : 'py-5'
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
            'md:hidden h-dvh fixed inset-0 bg-background/95 backdrop-blur-2xl  z-40',
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
