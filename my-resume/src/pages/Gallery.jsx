import screenshotOne from '../assets/Screenshot 2025-02-04 104224.png';
import logo from '../assets/logo.png';

function Gallery() {
  const projects = [
    {
      id: 1,
      title: 'Chinese Word Map',
      description:
        'Maps Chinese characters into a story structure designed for mind palace memory exercises.',
      image: screenshotOne,
      link: 'https://github.com/Quadeatschool/ChineseWordMap',
    },
    {
      id: 2,
      title: 'Quade OnTheWeb Portfolio',
      description:
        'My personal React portfolio with dark mode, contact form, and project showcase pages.',
      image: logo,
      link: 'https://github.com/Quadeatschool/QuadeOnTheWeb',
    },
  ];

  return (
    <main>
      <h1>GitHub Projects Gallery</h1>
      <p>
        A collection of projects from my GitHub. Each card links directly to
        the repository.
      </p>

      <div className="website-grid">
        {projects.map((project) => (
          <article key={project.id} className="website-card">
            <img className="project-image" src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              View Repository
            </a>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Gallery;