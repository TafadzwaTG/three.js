import { useEffect, useMemo, useState } from 'react';
import { gsap } from 'gsap';
import { experiences, journal, navLinks, programs } from './data';

const track = (event, payload = {}) => {
  window.__afrovibesEvents = window.__afrovibesEvents || [];
  window.__afrovibesEvents.push({ event, payload, at: new Date().toISOString() });
};

const routeLabel = (path) => (path === '/' ? 'home' : path.replace('/', ''));

const SocialProof = () => (
  <p className="proof">★★★★★ Loved by 2,400+ people · Rated 4.9 globally</p>
);

const Urgency = ({ spots = 4 }) => <p className="urgency">🔥 Only {spots} spots left this week</p>;

function App() {
  const [path, setPath] = useState(window.location.pathname || '/');
  const [introDone, setIntroDone] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [showExit, setShowExit] = useState(false);
  const [email, setEmail] = useState('');
  const [bookingStep, setBookingStep] = useState(1);

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname || '/');
    window.addEventListener('popstate', onPop);
    const timer = setTimeout(() => setIntroDone(true), 2500);
    const hover = document.querySelectorAll('.hover-lift');
    gsap.fromTo(
      '.reveal',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power2.out' }
    );
    hover.forEach((el) => {
      el.addEventListener('mouseenter', () => gsap.to(el, { scale: 1.03, boxShadow: '0 0 24px rgba(201,168,76,0.5)', duration: 0.3 }));
      el.addEventListener('mouseleave', () => gsap.to(el, { scale: 1, boxShadow: 'none', duration: 0.3 }));
    });

    const move = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX - 9}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY - 9}px`);
    };
    window.addEventListener('mousemove', move);
    const leave = () => {
      if (!email) setShowExit(true);
    };
    document.addEventListener('mouseleave', leave);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', onPop);
      document.removeEventListener('mouseleave', leave);
      window.removeEventListener('mousemove', move);
    };
  }, [path, email]);

  const go = (to) => {
    window.history.pushState({}, '', to);
    setPath(to);
    track('nav_click', { to });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const weekend = [0, 6].includes(new Date().getDay());
  const demandMultiplier = path === '/experiences' ? 1.15 : 1;
  const dynamicText = useMemo(
    () => `Dynamic pricing active: ${weekend ? 'Weekend +12%' : 'Weekday base'} · demand x${demandMultiplier.toFixed(2)}`,
    [weekend, demandMultiplier]
  );

  return (
    <div className="app">
      {!introDone ? (
        <section className="intro">
          <h1>AfroVibes</h1>
          <p>Move your body. Feel Africa.</p>
        </section>
      ) : (
        <>
          <header className="nav">
            <button className="brand" onClick={() => go('/')}>AfroVibes</button>
            <nav>
              {navLinks.map((link) => (
                <button key={link} onClick={() => go(link)} className={path === link ? 'active' : ''}>{routeLabel(link)}</button>
              ))}
            </nav>
            <button className="cta" onClick={() => go('/book')}>Book Your Experience</button>
          </header>

          <main>
            {path === '/' && <Home go={go} soundOn={soundOn} setSoundOn={setSoundOn} />}
            {path === '/experiences' && <Experiences go={go} dynamicText={dynamicText} />}
            {path === '/programs' && <Programs go={go} />}
            {path === '/book' && <Booking bookingStep={bookingStep} setBookingStep={setBookingStep} />}
            {path === '/about' && <About />}
            {path === '/vibes' && <Vibes />}
            {path === '/journal' && <Journal go={go} />}
            {path === '/partners' && <Partners />}
            {path === '/community' && <Community go={go} />}
          </main>

          <button className="sticky" onClick={() => go('/book')}>Book now · high demand</button>
          {showExit && (
            <aside className="exit-modal">
              <h3>Get 10% off your first experience</h3>
              <p>Enter your email to unlock your code.</p>
              <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              <button onClick={() => { setShowExit(false); track('exit_popup_conversion'); }}>Claim discount</button>
            </aside>
          )}

          <footer className="footer">Cape Town-crafted experiences · WhatsApp community · @AfroVibes</footer>
        </>
      )}
    </div>
  );
}

const Home = ({ go, soundOn, setSoundOn }) => (
  <>
    <section className="hero reveal">
      <div>
        <h1>Move Your Body. Feel Africa.</h1>
        <p>Cinematic fitness, music and adventure hosted in Cape Town by TG.</p>
        <SocialProof />
        <Urgency spots={4} />
        <button className="cta hover-lift" onClick={() => go('/book')}>Book Your Experience</button>
      </div>
      <div className="video-placeholder">Ocean · Mountains · Workouts · Dance</div>
      <button className="sound" onClick={() => setSoundOn(!soundOn)}>{soundOn ? 'Sound On' : 'Sound Off'}</button>
    </section>

    <section className="grid reveal">
      {experiences.slice(0, 3).map((item) => (
        <article key={item.name} className="card hover-lift">
          <h3>{item.name}</h3>
          <p>{item.duration} · {item.difficulty}</p>
          <SocialProof />
          <Urgency spots={item.spots} />
        </article>
      ))}
    </section>

    <section className="train reveal">
      <h2>Train with TG</h2>
      <p>Founder-led sessions blending coaching, DJ sets and local culture.</p>
      <button className="cta" onClick={() => go('/about')}>Meet TG</button>
    </section>
  </>
);

const Experiences = ({ go, dynamicText }) => (
  <section className="page reveal">
    <h2>Experiences</h2>
    <p>{dynamicText}</p>
    <div className="grid">
      {experiences.map((item) => (
        <article key={item.name} className="card hover-lift">
          <div className="media">Immersive visual</div>
          <h3>{item.name}</h3>
          <p>${Math.round(item.price * 1.15)} · {item.duration} · {item.difficulty}</p>
          <p>{item.proof}</p>
          <Urgency spots={item.spots} />
          <button className="cta" onClick={() => go('/book')}>Reserve spot</button>
        </article>
      ))}
    </div>
  </section>
);

const Programs = ({ go }) => (
  <section className="page reveal">
    <h2>Programs</h2>
    <div className="grid">
      {programs.map((program) => (
        <article key={program.title} className="card hover-lift">
          <h3>{program.title}</h3>
          <p><strong>Goal:</strong> {program.goal}</p>
          <p><strong>Structure:</strong> {program.structure}</p>
          <SocialProof />
          <button className="cta" onClick={() => go('/book')}>{program.cta}</button>
        </article>
      ))}
    </div>
    <table className="compare">
      <thead><tr><th>Program</th><th>Length</th><th>Intensity</th></tr></thead>
      <tbody><tr><td>Reset</td><td>7 days</td><td>Medium</td></tr><tr><td>Immersion</td><td>14 days</td><td>High</td></tr><tr><td>Warrior</td><td>2 days</td><td>High</td></tr></tbody>
    </table>
  </section>
);

const Booking = ({ bookingStep, setBookingStep }) => (
  <section className="page reveal">
    <h2>Booking</h2>
    <div className="progress"><span style={{ width: `${bookingStep * 33}%` }} /></div>
    <SocialProof />
    {bookingStep === 1 && <div className="card"><h3>1. Select experience + time</h3><p>Spots left shown live.</p><button onClick={() => { setBookingStep(2); track('booking_step_1_complete'); }}>Continue</button></div>}
    {bookingStep === 2 && <div className="card"><h3>2. Personal details</h3><p>Name, email, WhatsApp.</p><button onClick={() => { setBookingStep(3); track('booking_step_2_complete'); }}>Continue</button></div>}
    {bookingStep === 3 && <div className="card"><h3>3. Payment (Stripe test mode)</h3><p>4242 4242 4242 4242 · 12/34 · 123</p><button onClick={() => { track('booking_completed'); alert('Booked! Join WhatsApp and get referral discount.'); }}>Pay now</button></div>}
    <p className="urgency">People are viewing this right now. Complete in 03:00 for priority.</p>
  </section>
);

const About = () => <section className="page reveal"><h2>About TG + AfroVibes</h2><p>TG is a coach, DJ and cultural curator. Every program is founder-led with AfroVibes playlists.</p></section>;
const Vibes = () => <section className="page reveal"><h2>Vibes</h2><p>Masonry gallery + UGC + social embeds placeholder. Tag @AfroVibes.</p></section>;
const Partners = () => <section className="page reveal"><h2>Partners</h2><p>Hotels, hostels, travel platforms, creator program with affiliate form + widget mock.</p></section>;

const Journal = ({ go }) => (
  <section className="page reveal">
    <h2>Journal</h2>
    {journal.map((post) => (
      <article key={post} className="card hover-lift">
        <h3>{post}</h3>
        <p>SEO metadata + schema + internal links configured in production CMS integration.</p>
        <button className="cta" onClick={() => go('/book')}>Book related experience</button>
      </article>
    ))}
  </section>
);

const Community = ({ go }) => (
  <section className="page reveal">
    <h2>Community</h2>
    <p>WhatsApp CTA, loyalty tiers (Explorer → Legend), referral rewards and promoter toolkit.</p>
    <button className="cta" onClick={() => go('/book')}>Join now</button>
  </section>
);

export default App;
