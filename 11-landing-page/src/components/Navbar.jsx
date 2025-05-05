import { useState } from "react";
import Logo from "./Logo";

function Navbar() {
    const [active, setActive] = useState("#home");
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const links = [
        {href:"#home", label:"Home"},
        {href:"#about", label:"About"},
        {href:"#services", label:"Our Services"},
        {href:"#testimonials", label:"Testimonials"},
    ];

  return <nav className="fixed top-0 left-0 right-0 bg-white/90 z-999 shadow-sm backdrop-blur-sm">
   <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16">
    <Logo />

    {/* Links */}
    <ul className="hidden sm:flex items-center justify-between gap-2 h-full ">
        {links.map(link => <li key={link.href} className="h-full">
            <a 
                href={link.href} 
                onClick={() => setActive(link.href)} 
                className={`
                    relative h-full flex items-center px-3 text-sm font-medium after:absolute after:bottom-0 after:left-0 after:bg-blue-600 hover:after:w-full hover:after:h-[1px] ${active === link.href ? 'after:w-full after:h-[1px] text-blue-600' : 'text-gray-600 hover:text-gray-9   00'}
                `}>
                {link.label}
            </a>
        </li>)}
    </ul>

   <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 cursor-pointer">
        <a href="#newsletter">Get in touch</a>
    </button>
   </div>
  </nav>;
}

export default Navbar;
