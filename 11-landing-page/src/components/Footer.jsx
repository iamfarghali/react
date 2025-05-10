import Logo from "./Logo";

function Footer() {
  const footerLinks = {
    company: [
      { name: "About", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "How it Works", href: "#" },
      { name: "Contact Us", href: "#" },
    ],
    getHelp: [
      { name: "Support Carrer", href: "#" },
      { name: "24h Service", href: "#" },
      { name: "Quick Chat", href: "#" },
    ],
    support: [
      { name: "FAQ", href: "#" },
      { name: "Policy", href: "#" },
      { name: "Business", href: "#" },
    ],
    contact: [
      { name: "WhatsApp", href: "#" },
      { name: "Support 24", href: "#" },
    ],
  };

  return (
    <footer id="about" className="bg-gradient-to-l from-red-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 md:pb-0 space-y-8">
        <div className="grid grid-cols-1 gap-18 md:grid-cols-[2fr_4fr]">
            {/* Left */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                <Logo />
                <h2 className="text-lg font-semibold capitalize">
                    The next design
                </h2>
                </div>
                <p className="text-xs sm:text-sm text-gray-600">
                Quidem tempora quos numquam deleniti repellendus? In consectetur
                repellendus cupiditate.
                </p>
                <ul className="flex items-start gap-2">
                <li className="w-4 h-4 rounded-full p-4 bg-yellow-500"></li>
                <li className="w-4 h-4 rounded-full p-4 bg-yellow-500"></li>
                <li className="w-4 h-4 rounded-full p-4 bg-yellow-500"></li>
                </ul>
            </div>

            {/* Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
                {Object.entries(footerLinks).map(([category, links]) => (
                    <div className="flex flex-col gap-3" key={category}>
                        <h3 className="font-bold capitalize">{category}</h3>
                        <ul className="flex flex-col gap-3">
                            {links.map((link, idx) => (
                                <li key={idx} className="text-sm font-semibold text-gray-500">
                                    <a href={link.href}>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>


        <div className="border-t border-blue-200">
            <div className="flex justify-center items-center py-6 px-4">
                <p className="text-gray-800 text-xs font-semibold">Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
