import { useEffect, useRef, useState } from "react";
import "./BigClients.css";

/* DUMMY CLIENT LOGOS (OPEN SOURCE STYLE) */
const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Google-flutter-logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_logo_%282012%29.svg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png",
  "https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3e/Shopify_logo_2018.svg",
  "https://upload.wikimedia.org/wikipedia/commons/1/19/Slack_Technologies_Logo.svg"
];

export default function BigClients() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bigclients">
      <div className="container">

        {/* HEADER */}
        <div className="bigclients-header">
          <h2>Our Trusted Clients</h2>
          <p>
            We proudly partner with healthcare providers, senior living facilities,
            hospitals, and organizations who trust us for dependable medical transportation.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className={`client-logos ${visible ? "logos-visible" : ""}`}>
          {clientLogos.map((logo, index) => (
            <div className="logo-card" key={index}>
              <img src={logo} alt="Client Logo" />
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className={`bigclients-stats ${visible ? "stats-visible" : ""}`}>
          <div className="stat-item">
            <h3>25+</h3>
            <p>Years Experience</p>
          </div>

          <div className="stat-item">
            <h3>15K+</h3>
            <p>Satisfied Clients</p>
          </div>

          <div className="stat-item">
            <h3>13K+</h3>
            <p>Successful Transport Operations</p>
          </div>
        </div>

      </div>
    </section>
  );
}
