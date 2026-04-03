import '../styles/Footer.css';
import githubIcon from '../assets/GitHubIcon.png';
import linkedinIcon from '../assets/LinkInIcon.png';
import logo from '../assets/logo.png';

function Footer() {
  const currentYear = new Date().getFullYear();
  const githubUrl = 'https://github.com/Quadeatschool';
  const linkedinUrl = 'https://www.linkedin.com/in/your-linkedin-handle/';

  return (
    <footer className="site-footer">
      <div className="footer-brand-wrap">
        <img className="footer-logo" src={logo} alt="Portfolio logo" />
        <p className="footer-copy">Quade Portfolio © {currentYear}</p>
      </div>
      <div className="footer-socials" aria-label="Social profile links">
        <a
          className="social-link"
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <img className="social-icon" src={githubIcon} alt="GitHub" />
        </a>
        <a
          className="social-link"
          href={linkedinUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn profile"
        >
          <img className="social-icon" src={linkedinIcon} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
