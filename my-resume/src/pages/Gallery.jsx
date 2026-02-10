// 1. Import your images from the assets folder
import project1 from '../assets/project1.png'; // Rename these to match your filenames!
import logo from '../assets/logo.png';

function Gallery() {
  // 2. This is your "Database" of projects
  const projects = [
    {
      id: 1,
      title: "My First Professional Project",
      description: "A cool web app built for my own amusment.",
      image: project1,
      link: "https://github.com/yourusername/repo1"
    },
    {
      id: 2,
      title: "Portfolio Logo Design",
      description: "Custom branding created for my personal identity.",
      image: logo,
      link: "https://github.com/Quadeatschool/QuadeOnTheWeb"
    }
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Professional Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
        
        {/* 3. This is where the magic happens: Mapping the data to HTML */}
        {projects.map((project) => (
          <div key={project.id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '4px' }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View Repository</a>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Gallery;