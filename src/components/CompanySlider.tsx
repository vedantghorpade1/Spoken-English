import Image from "next/image";

const companyLogos = [
  { name: "Accenture", src: "/company/accenture.png" },
  { name: "Amazon", src: "/company/amazon.png" },
  { name: "Google", src: "/company/google.png" },
  { name: "HDFC Bank", src: "/company/hdfc.png" },
  { name: "IBM", src: "/company/ibm.png" },
  { name: "ICICI Bank", src: "/company/icici.png" },
  { name: "Samsung", src: "/company/samsung.png" },
  { name: "SBI", src: "/company/sbi.png" },
  { name: "TCS", src: "/company/tcs.png" },
  { name: "Wipro", src: "/company/wipro.png" },
];

function LogoTrack({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="company-logo-track" aria-hidden={hidden}>
      {companyLogos.map((logo) => (
        <div className="company-logo-item" key={logo.name}>
          <Image src={logo.src} alt={hidden ? "" : logo.name} width={180} height={80} />
        </div>
      ))}
    </div>
  );
}

export default function CompanySlider() {
  return (
    <section className="section company-section" aria-labelledby="company-title">
      <div className="section-heading">
        <span className="section-kicker">Career ready communication</span>
        <h2 id="company-title">Learners build confidence for real workplace conversations</h2>
        <p>
          From interviews to meetings, Sivi Speak helps learners prepare for the
          teams and companies they want to grow with.
        </p>
      </div>
      <div className="company-slider" aria-label="Companies represented by learner career goals">
        <LogoTrack />
        <LogoTrack hidden />
      </div>
    </section>
  );
}
