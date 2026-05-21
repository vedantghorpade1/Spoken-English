import { Mic2 } from "lucide-react";

const footerGroups = [
  {
    title: "Product",
    links: ["Random calls", "English cafes", "Interview rooms", "Daily goals"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Community", "Contact"],
  },
  {
    title: "Resources",
    links: ["Speaking guide", "Campus clubs", "Safety", "Help center"],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="brand" href="#top" aria-label="Sivi Speak home">
            <span className="brand-mark">
              <Mic2 size={18} />
            </span>
            <span>Sivi Speak</span>
          </a>
          <p>
            A live spoken-English community for learners who want real practice,
            not another lecture.
          </p>
          <div className="footer-socials" aria-label="Social links">
            <a href="#top">Instagram</a>
            <a href="#top">LinkedIn</a>
            <a href="#top">X</a>
          </div>
        </div>

        <div className="footer-links">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map((link) => (
                <a href="#top" key={link}>
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Sivi Speak. Built for India&apos;s next confident speakers.</span>
        <div>
          <a href="#top">Privacy</a>
          <a href="#top">Terms</a>
        </div>
      </div>
    </footer>
  );
}
