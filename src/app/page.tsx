import {
  BadgeCheck,
  Brain,
  BriefcaseBusiness,
  Check,
  Flame,
  Headphones,
  Radio,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const cities = ["Pune", "Mumbai", "Bangalore", "Hyderabad", "Delhi"];

const problems = [
  "Fear of speaking",
  "Lack of confidence",
  "No speaking partner",
  "Grammar-focused learning",
];

const solutions = [
  "Real conversations",
  "Live practice",
  "Instant matching",
  "Daily confidence building",
];

const features = [
  {
    icon: Radio,
    title: "Random Audio Calls",
    text: "Instantly connect with English learners.",
  },
  {
    icon: Headphones,
    title: "English Cafes",
    text: "Join live topic-based speaking rooms.",
  },
  {
    icon: Brain,
    title: "AI Conversation Topics",
    text: "Get smart prompts during conversations.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Interview Practice",
    text: "Practice HR and placement interviews.",
  },
  {
    icon: Flame,
    title: "Daily Speaking Challenges",
    text: "Build consistency and confidence.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Anonymous",
    text: "Comfortable voice-first communication.",
  },
];

const rooms = [
  ["Beginner English Room", "212 online", "Introductions"],
  ["IELTS Practice", "84 online", "Cue cards"],
  ["Late Night Talks", "156 online", "College life"],
  ["Placement Interview Room", "96 online", "HR rounds"],
  ["Daily Discussion Cafe", "178 online", "Current affairs"],
];

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Engineering student, Pune",
    quote:
      "Random calls helped me stop overthinking. I now speak in placement mocks without freezing.",
  },
  {
    name: "Meera Nair",
    role: "Freelancer, Bangalore",
    quote:
      "The cafes feel natural and low pressure. It is much easier than practicing alone with videos.",
  },
  {
    name: "Riya Khan",
    role: "MBA aspirant, Delhi",
    quote:
      "Interview rooms gave me daily speaking reps with real people preparing for the same goals.",
  },
];

const gameStats = [
  {
    icon: Flame,
    title: "14 day streak",
    text: "Daily speaking goal",
  },
  {
    icon: Trophy,
    title: "8,420 XP",
    text: "Top 6% this week",
  },
  {
    icon: BadgeCheck,
    title: "12 badges",
    text: "Fluency milestones",
  },
  {
    icon: Star,
    title: "#18 leaderboard",
    text: "Mumbai learners",
  },
];

const publicImages = [
  {
    src: "/ChatGPT Image May 20, 2026, 09_08_18 PM.png",
    alt: "Sivi Speak landing page preview one",
  },
  {
    src: "/ChatGPT Image May 20, 2026, 09_08_49 PM.png",
    alt: "Sivi Speak landing page preview two",
  },
  {
    src: "/ChatGPT Image May 20, 2026, 09_11_47 PM.png",
    alt: "Sivi Speak landing page preview three",
  },
  {
    src: "/ChatGPT Image May 20, 2026, 09_12_36 PM.png",
    alt: "Sivi Speak landing page preview four",
  },
  {
    src: "/ChatGPT Image May 20, 2026, 09_16_19 PM.png",
    alt: "Sivi Speak landing page preview five",
  },
  {
    src: "/ChatGPT Image May 20, 2026, 09_17_54 PM.png",
    alt: "Sivi Speak landing page preview six",
  },
];

function VoiceBars() {
  return (
    <div className="voice-bars" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span key={index} style={{ animationDelay: `${index * 0.08}s` }} />
      ))}
    </div>
  );
}

function AvatarStack() {
  return (
    <div className="avatar-stack" aria-label="Connected users">
      {cities.map((city, index) => (
        <div className="avatar" key={city} title={city}>
          {city.slice(0, 1)}
          <small>{index + 1}</small>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="site-shell">
      <Navbar />

      <section className="hero section" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            Live voice practice for Indian learners
          </div>
          <h1>Speak English with Real People</h1>
          <p>
            Practice spoken English through live random audio conversations,
            build confidence daily, and improve fluency naturally.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#pricing">
              Start Speaking Free
            </a>
            <a className="button button-secondary" href="#rooms">
              Join Live Rooms
            </a>
          </div>
          <div className="hero-proof">
            <AvatarStack />
            <span>Students and job seekers are live from Pune, Mumbai, Bangalore, Hyderabad, and Delhi.</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Sivi Speak landing preview">
          <Image
            className="hero-image"
            src={publicImages[5].src}
            alt={publicImages[5].alt}
            width={1536}
            height={1024}
            priority
          />
        </div>
      </section>

      <section className="section split-section" id="about">
        <div>
          <span className="section-kicker">About the platform</span>
          <h2>Built for the awkward first minute before English starts feeling natural.</h2>
          <p className="section-note">
            Sivi Speak pairs you with real people for short voice-first practice
            sessions, live rooms, and interview drills. No classroom pressure.
          </p>
         
        </div>
        <div className="problem-solution-grid">
          <div className="glass-panel">
            <h3>What holds people back</h3>
            {problems.map((item) => (
              <div className="list-card problem-card" key={item}>
                <Zap size={17} />
                {item}
              </div>
            ))}
          </div>
          <div className="glass-panel solution-panel">
            <h3>What Sivi Speak changes</h3>
            {solutions.map((item) => (
              <div className="list-card solution-card" key={item}>
                <Check size={17} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="features">
        <div className="media-heading">
          <div>
            <span className="section-kicker">Features</span>
            <h2>Everything built for real spoken-English practice</h2>
            <p className="section-note">
              Practice through quick matches, live rooms, smart prompts, and
              confidence-building daily routines.
            </p>
          </div>
          <Image
            className="section-image"
            src={publicImages[1].src}
            alt={publicImages[1].alt}
            width={1536}
            height={1024}
          />
        </div>
        <div className="feature-grid">
          {features.map(({ icon: Icon, title, text }) => (
            <article className="feature-card" key={title}>
              <div className="icon-box">
                <Icon size={22} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section live-section" id="rooms">
        <div className="media-heading media-heading-reverse">
          <Image
            className="section-image"
            src={publicImages[2].src}
            alt={publicImages[2].alt}
            width={1536}
            height={1024}
          />
          <div>
            <span className="section-kicker">Live community</span>
            <h2>Drop into rooms where India is already speaking</h2>
            <p className="section-note">
              Choose a topic, listen first if you need to, then join real
              voice conversations with learners at your level.
            </p>
          </div>
        </div>
        <div className="rooms-layout">
          <div className="room-console">
            <div className="console-header">
              <div>
                <span className="live-pill">LIVE</span>
                <h3>Daily Discussion Cafe</h3>
              </div>
              <p>178 online</p>
            </div>
            <VoiceBars />
            <div className="speaker-row">
              {["AN", "MK", "RS", "VP", "TJ", "SK"].map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
          <div className="room-list">
            {rooms.map(([title, online, topic]) => (
              <article className="room-item" key={title}>
                <div>
                  <span className="live-dot" />
                  <h3>{title}</h3>
                  <p>{topic}</p>
                </div>
                <strong>{online}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="process-layout">
          <div>
            <span className="section-kicker">How it works</span>
            <h2>Three simple steps to start speaking</h2>
            <p className="section-note">
              The flow stays simple so learners can spend less time setting up
              and more time actually speaking.
            </p>
            <div className="timeline">
              {["Create your profile", "Get matched instantly", "Start speaking confidently"].map(
                (step, index) => (
                  <article className="step-card" key={step}>
                    <span>{index + 1}</span>
                    <h3>{step}</h3>
                  </article>
                ),
              )}
            </div>
          </div>
          <Image
            className="section-image"
            src={publicImages[3].src}
            alt={publicImages[3].alt}
            width={1536}
            height={1024}
          />
        </div>
      </section>

      <section className="section gamification">
        <div className="media-heading">
          <div>
            <span className="section-kicker">Gamification</span>
            <h2>Daily momentum that makes confidence visible</h2>
            <p className="section-note">
              Streaks, XP, badges, and leaderboards make every speaking
              session feel measurable.
            </p>
          </div>
          <Image
            className="section-image"
            src={publicImages[4].src}
            alt={publicImages[4].alt}
            width={1536}
            height={1024}
          />
        </div>
        <div className="game-dashboard">
          {gameStats.map(({ icon: GameIcon, title, text }) => {
            return (
              <article className="game-card" key={title}>
                <GameIcon size={24} />
                <strong>{title}</strong>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="section-kicker">Testimonials</span>
          <h2>Learners are using live conversations to unlock fluency</h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article className="testimonial-card" key={item.name}>
              <div className="stars" aria-label="5 star rating">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={15} fill="currentColor" />
                ))}
              </div>
              <p>&quot;{item.quote}&quot;</p>
              <div className="testimonial-user">
                <span>{item.name.slice(0, 1)}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.role}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="section-heading">
          <span className="section-kicker">Pricing</span>
          <h2>Start free. Upgrade when speaking becomes a habit.</h2>
        </div>
        <div className="pricing-grid">
          <article className="price-card">
            <h3>Free Plan</h3>
            <strong>₹0</strong>
            <p>For daily warmups and casual practice.</p>
            {["Random calls", "Limited rooms", "Daily challenges"].map((item) => (
              <span key={item}>
                <Check size={16} />
                {item}
              </span>
            ))}
            <a className="button button-secondary" href="#top">
              Start Free
            </a>
          </article>
          <article className="price-card premium-card">
            <div className="popular">Most popular</div>
            <h3>Premium Plan</h3>
            <strong>₹299/mo</strong>
            <p>For serious fluency, interviews, and advanced matching.</p>
            {[
              "Unlimited calls",
              "AI feedback",
              "Advanced matching",
              "Interview rooms",
              "Premium cafes",
            ].map((item) => (
              <span key={item}>
                <Check size={16} />
                {item}
              </span>
            ))}
            <a className="button button-primary" href="#top">
              Go Premium
            </a>
          </article>
        </div>
      </section>

      <section className="final-cta section">
        <div>
          <span className="section-kicker">Ready when you are</span>
          <h2>Start Speaking English Without Fear</h2>
          <p>Join India&apos;s live spoken-English community today.</p>
          <a className="button button-primary" href="#top">
            Join Free Today
          </a>
        </div>
        <Image
          className="section-image cta-image"
          src={publicImages[5].src}
          alt={publicImages[5].alt}
          width={1536}
          height={1024}
        />
      </section>
      <Footer />
    </main>
  );
}
