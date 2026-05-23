import {
  Apple,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Mic2,
  Play,
  Twitter,
  Youtube,
} from "lucide-react";

const companyLinks = ["About Us", "Careers"];
const supportLinks = ["Help Center", "Contact Us"];
const legalLinks = ["Terms of Service", "Privacy Policy"];

const contactItems = [
  {
    icon: Mail,
    label: "support@sivispeak.com",
  },
  {
    icon: MessageCircle,
    label: "+91 82798 66006",
  },
  {
    icon: MapPin,
    label: "Bengaluru, India",
  },
];

const socialItems = [
  { icon: Facebook, label: "Facebook" },
  { icon: Twitter, label: "X" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Instagram, label: "Instagram" },
  { icon: Youtube, label: "YouTube" },
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
            Your trusted partner in English fluency. We help learners worldwide
            achieve their communication goals through personalized, live
            practice sessions.
          </p>
          <div className="footer-contact">
            {contactItems.map(({ icon: Icon, label }) => (
              <a href="#top" key={label}>
                <span>
                  <Icon size={17} />
                </span>
                {label}
              </a>
            ))}
          </div>
          <h3>Follow Us</h3>
          <div className="footer-socials" aria-label="Social links">
            {socialItems.map(({ icon: Icon, label }) => (
              <a href="#top" key={label} aria-label={label} title={label}>
                <Icon size={19} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h3>Company</h3>
            {companyLinks.map((link) => (
              <a href="#top" key={link}>
                {link}
              </a>
            ))}
          </div>
          <div>
            <h3>Support</h3>
            {supportLinks.map((link) => (
              <a href="#top" key={link}>
                {link}
              </a>
            ))}
            <h3 className="footer-link-heading">Legal</h3>
            {legalLinks.map((link) => (
              <a href="#top" key={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>&copy; 2026 Sivi Speak. All rights reserved.</span>
        <div className="app-downloads" aria-label="Download our app">
          <span>Download our app:</span>
          <a className="store-badge" href="#top" aria-label="Get it on Google Play">
            <Play size={16} fill="currentColor" />
            <span>
              <small>GET IT ON</small>
              Google Play
            </span>
          </a>
          <a className="store-badge" href="#top" aria-label="Download on the App Store">
            <Apple size={17} fill="currentColor" />
            <span>
              <small>Download on the</small>
              App Store
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
