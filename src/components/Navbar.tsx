import { Mic2 } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Live Rooms", href: "#rooms" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Sivi Speak home">
          <span className="brand-mark">
            <Mic2 size={18} />
          </span>
          <span>Sivi Speak</span>
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <a className="nav-cta" href="#pricing">
          Start free
        </a>
      </nav>
    </header>
  );
}
