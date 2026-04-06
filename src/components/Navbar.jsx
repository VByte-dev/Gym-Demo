import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = ["Home", "Features", "Program", "Trainers", "Pricing"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 md:bg-transparent transition-all
         ${
        scrolled ? "backdrop-blur-md" : ""
      } ${open ? "bg-background/95" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <span className="font-display text-3xl text-foreground tracking-wider">
          PulseFit
        </span>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-xs uppercase tracking-widest text-foreground hover:text-primary transition-colors duration-300"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#pricing"
          className="hidden md:inline-block bg-primary text-primary-foreground font-bold text-sm px-5 py-2 rounded-full hover:bg-accent hover:scale-105 transition-all duration-300"
        >
          Join Now
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <ul className="flex flex-col items-center gap-6 py-8">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm uppercase tracking-widest text-foreground hover:text-primary transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
            <li className="">
              <a
                href="#pricing"
                onClick={() => setOpen(false)}
                className=" bg-primary text-primary-foreground font-bold text-sm px-6 py-2  rounded-full"
              >
                Join Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
