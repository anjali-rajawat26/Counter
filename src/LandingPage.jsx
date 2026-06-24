import { useEffect } from 'react'
import './LandingPage.css'
import profilePic from './assets/myphoto.jpeg'

const WHATSAPP_LINK = 'https://wa.me/7509278354'
const INSTAGRAM_LINK = 'https://instagram.com/anjali_rajawat_11'

function WhatsAppIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.6-.7-2.7-1.6-3.5-3-.2-.3 0-.5.1-.7.2-.2.4-.5.6-.7.2-.2.2-.4.1-.6-.1-.2-.6-1.5-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-.9 2.4 0 1.4 1 2.8 1.1 3 .1.2 1.9 3 4.7 4.1 2.3.9 2.8.7 3.3.7.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.5-.3z"/>
      <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.2L2 22l4.9-1.5c1.4.8 3.1 1.2 4.9 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-2.9.9.9-2.8-.2-.3C4.4 15 4 13.5 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8z"/>
    </svg>
  )
}

function InstagramIcon({ size = 18, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="1" fill={color} stroke="none" />
    </svg>
  )
}

const stats = [
  { num: '✓', label: 'Friendly & Quick' },
  { num: '₹', label: 'Affordable Rates' },
  { num: '💬', label: 'Direct Communication' },
  { num: '<1hr', label: 'Fast Response' },
]

const steps = [
  { n: '01', icon: '📋', title: 'Pick Your Package', desc: 'Choose a story shoutout, bundle, or reel mention based on your budget and goals.' },
  { n: '02', icon: '💬', title: 'Quick Confirmation', desc: 'Message me on WhatsApp, share your content or details, and confirm your slot.' },
  { n: '03', icon: '🚀', title: 'Goes Live Fast', desc: 'Your promotion is posted within the agreed time — simple and hassle-free.' },
]

const whyCards = [
  { icon: '📈', title: 'Real Audience Reach', desc: 'Engaged viewers, not bots or inflated numbers.' },
  { icon: '⚡', title: 'Quick Promotion', desc: 'Stories go live fast — no long wait times.' },
  { icon: '💸', title: 'Affordable Pricing', desc: 'Promotion plans that fit every budget.' },
  { icon: '💬', title: 'Personal Support', desc: 'You talk directly with Anjali — no middlemen.' },
  { icon: '🎨', title: 'Creator-Friendly', desc: 'Built to help fellow creators grow too.' },
  { icon: '🏪', title: 'Business-Friendly', desc: 'Tailored promotion for businesses of any size.' },
]

const collabTypes = [
  { em: '🏬', label: 'Small Businesses' },
  { em: '📸', label: 'Instagram Creators' },
  { em: '📍', label: 'Local Brands' },
  { em: '🚀', label: 'Startups' },
  { em: '🌸', label: 'Personal Brands' },
  { em: '🛍️', label: 'Online Stores' },
]

const pricingPlans = [
  { icon: '📸', name: 'Single Story Shoutout', price: 'Starting at ₹149', oldPrice: '₹249', desc: 'One Instagram story promoting your profile, product or service.', tag: null },
  { icon: '📦', name: '3 Story Bundle', price: 'Starting at ₹399', oldPrice: '₹549', desc: 'Three story promotions to boost visibility over time. Best value per story.', tag: 'Most Popular' },
  { icon: '🎬', name: 'Reel Mention', price: 'Starting at ₹799', oldPrice: '₹999', desc: 'A dedicated reel feature for longer-lasting reach beyond your followers.', tag: null },
]

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in')
        })
      },
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className="ambient-bg" />

      <nav className="nav">
        <div className="nav-inner">
          <div className="brand"><span className="dot" />Anjali Rajawat</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#how">How It Works</a>
            <a href="#why">Why Us</a>
            <a href="#collab">Collaborate</a>
          </div>
          <a className="nav-cta" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            Chat Now
          </a>
        </div>
      </nav>

      <header className="hero">
        <span className="hero-orb orb1" />
        <span className="hero-orb orb2" />
        <span className="hero-orb orb3" />
        <span className="hero-orb orb4" />
        <div className="hero-inner">
  <div className="hero-photo-wrap">
  <img src={profilePic} alt="Anjali Rajawat" className="hero-photo" />
</div>
  <div className="badge"><span className="spark">✦</span> Now Booking Promotions</div>
<a className="handle-tag" href="https://www.instagram.com/ramya_tomar?igsh=NHNpM3l0d3dhcWNu&utm_source=qr" target="_blank" rel="noopener noreferrer">
  <span className="ig-dot"><InstagramIcon size={11} color="#fff" /></span>
  Promotions via <strong>@ramya_tomar</strong>
</a>
  <h1 className="hero-title">Get Your Brand <em>Seen & Loved</em></h1>
         <p className="hero-sub">
  I manage <strong>@ramya_tomar</strong> on Instagram and help small businesses,
  creators and personal brands get noticed through simple, affordable story
  promotions and collaborations.
</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon /> Chat on WhatsApp
            </a>
            <a className="btn btn-ghost" href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
              <InstagramIcon /> View Instagram
            </a>
          </div>
        </div>
      </header>

      <section className="about" id="about">
        <div className="wrap">
          <div className="about-grid">
            <div className="glass about-card reveal">
  <span className="eyebrow">About Me</span>
  <h2 style={{ fontSize: '1.7rem', marginTop: 8 }}>Hi, I'm Anjali Rajawat</h2>
  <p>
    I manage <strong>@ramya_tomar</strong> on Instagram and love helping brands,
    creators and small businesses get visibility through fun, simple promotions.
    Whether you're just starting out or looking to reach more people, I'll help
    you get seen.
  </p>
</div>
            <div className="stat-grid reveal">
              {stats.map((s) => (
                <div className="glass stat" key={s.label}>
                  <span className="num">{s.num}</span>
                  <span className="label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">The Process</span>
            <h2>How Promotion Works</h2>
            <p>A simple, no-risk path from first story to ongoing collaboration.</p>
          </div>
          <div className="steps">
  {steps.map((s, i) => (
    <div className="glass step reveal" key={s.n} style={{ transitionDelay: `${i * 0.12}s` }}>
      <div className="stepnum-wrap">
        <span className="stepnum">{s.n}</span>
      </div>
      <span className="step-icon">{s.icon}</span>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
    </div>
  ))}
</div>
        </div>
      </section>

      <section className="why" id="why">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Why Work With Us</span>
            <h2>Built for Real Results</h2>
          </div>
          <div className="why-grid">
            {whyCards.map((c) => (
              <div className="glass why-card reveal" key={c.title}>
                <span className="icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     <section className="trust-banner">
  <div className="wrap">
    <div className="glass trust-card reveal">
      <span className="trust-icon">🤝</span>
      <p>Trusted by small businesses, creators and personal brands looking to grow their reach affordably.</p>
    </div>
  </div>
</section>

      <section className="collab" id="collab">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Who I Work With</span>
            <h2>Collaboration Types</h2>
          </div>
          <div className="collab-grid">
            {collabTypes.map((c) => (
              <div className="glass collab-chip reveal" key={c.label}>
                <span className="em">{c.em}</span>{c.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="wrap">
          <div className="cta-card reveal">
            <span className="eyebrow">Let's Talk</span>
            <h2>Let's Grow Together</h2>
            <p>Looking for a fun, affordable way to promote your brand? Message me and let's talk packages.</p>
            <div className="cta-buttons">
              <a className="btn btn-primary btn-lg" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={20} /> Get Free Story Promotion
              </a>
              <a className="btn btn-ghost btn-lg" href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={20} /> Visit Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing" id="pricing">
  <div className="wrap">
    <div className="section-head reveal">
      <span className="eyebrow">Promotion Packages</span>
      <h2>Simple, Affordable Pricing</h2>
      <p>Pick what fits your brand — message me to confirm details and book your slot.</p>
    </div>
    <div className="pricing-grid">
  {pricingPlans.map((p, i) => (
    <div
      className={`glass pricing-card reveal ${p.tag ? 'popular' : ''}`}
      key={p.name}
      style={{ transitionDelay: `${i * 0.12}s` }}
    >
      {p.tag && <span className="pricing-tag">{p.tag}</span>}
      <span className="pricing-icon">{p.icon}</span>
      <h3>{p.name}</h3>
      <div className="price-row">
        {p.oldPrice && <span className="old-price">{p.oldPrice}</span>}
        <span className="price">{p.price}</span>
      </div>
      <p>{p.desc}</p>
      <a className="btn btn-primary pricing-btn" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
        <WhatsAppIcon size={16} /> Book Now
      </a>
    </div>
  ))}
</div>
  </div>
</section>
      <footer>
        <div className="fbrand">Anjali Rajawat</div>
        <div className="ficons">
          <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <InstagramIcon size={20} color="#4A2354" />
          </a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <WhatsAppIcon size={20} color="#3FAE5A" />
          </a>
        </div>
        <div className="fnote">@ramya_tomar promotions, managed by Anjali Rajawat · © 2026 All rights reserved</div>
      </footer>

      <a className="sticky-wa" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <WhatsAppIcon size={28} color="#fff" />
      </a>
      <a className="sticky-ig" href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" aria-label="Visit Instagram">
        <InstagramIcon size={26} color="#fff" />
      </a>
    </>
    
  )
}