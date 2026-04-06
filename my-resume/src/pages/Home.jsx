import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      <h1>Welcome to My Portfolio</h1>
      <p>
        I’m Quade Hafen, a student learning React and growing my software
        engineering journey one project at a time.
      </p>
      <p>
        I like building clean, practical web experiences and I’m always looking
        to improve through real projects and new connections.
      </p>
      <p>
        Outside of coding, I’m into BJJ, MTG, theological conversations, and
        old stories. If you want to network or talk about shared interests,
        reach out.
      </p>

      <section aria-labelledby="cool-websites">
        <h2 id="cool-websites">Websites I Think Are Cool or Useful</h2>
        <p style={{ fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1rem' }}>
          If you're reading this, go to <Link to="/contact" style={{ color: 'var(--link-color)', fontWeight: '700', textDecoration: 'underline', textDecorationThickness: '2px', textUnderlineOffset: '3px' }}>Contact Me</Link> and send me a website you
          think is cool or useful. I'd love to hear what inspires you.
        </p>
        <div className="website-grid">
          <article className="website-card">
            <h3>MDN Web Docs</h3>
            <p>
              Great reference for HTML, CSS, JavaScript, and browser features.
            </p>
            <a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer">
              Visit MDN
            </a>
          </article>

          <article className="website-card">
            <h3>React</h3>
            <p>
              The core library powering this portfolio and a strong place to
              learn modern UI patterns.
            </p>
            <a href="https://react.dev/" target="_blank" rel="noreferrer">
              Visit React
            </a>
          </article>

          <article className="website-card">
            <h3>Vite</h3>
            <p>
              Fast build tooling that makes development feel quick and simple.
            </p>
            <a href="https://vite.dev/" target="_blank" rel="noreferrer">
              Visit Vite
            </a>
          </article>

          <article className="website-card">
            <h3>GitHub</h3>
            <p>
              Useful for version control, collaboration, and hosting projects.
            </p>
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              Visit GitHub
            </a>
          </article>

          <article className="website-card">
            <h3>Coolers</h3>
            <p>
              Amazing color palette generator for designing cohesive UIs.
            </p>
            <a href="https://coolors.co/" target="_blank" rel="noreferrer">
              Visit Coolers
            </a>
          </article>

          <article className="website-card">
            <h3>EmailJS</h3>
            <p>
              Service for sending emails directly from the browser without a backend.
            </p>
            <a href="https://www.emailjs.com/" target="_blank" rel="noreferrer">
              Visit EmailJS
            </a>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;