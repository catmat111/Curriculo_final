import './Projetos.css';

function Projetos({ lang }) {
  const sectionTitle = lang === 'pt' ? '/* Projetos que construí */' : '/* Projects I built */';
  const viewOnGithub = lang === 'pt' ? '> ver no GitHub' : '> view on GitHub';
  const privateProject = lang === 'pt' ? 'projeto académico (código não público)' : 'academic project (code not public)';

  const projects = [
    {
      title: 'FormDocs',
      desc_pt: 'Aplicação web completa em ambiente ágil (Scrum). Criação de interfaces responsivas e trabalho em equipa de 6 pessoas.',
      desc_en: 'Full-stack web application in an agile environment (Scrum). Creation of responsive interfaces and collaboration in a team of 6.',
      tech: ['React', 'TypeScript', 'Git']
    },
    {
      title: 'Matcha Garden',
      desc_pt: 'Aplicação multiplataforma focada na performance. Integração de lógicas de servidor e tecnologias inovadoras.',
      desc_en: 'Cross-platform application focusing on performance. Implementation of server-side logic and innovative technologies.',
      tech: ['Node.js', 'SQL', 'Rust', 'Tauri'],
      link: 'https://github.com/catmat111/cute-timer-app'
    },
    {
      title: lang === 'pt' ? 'Biblioteca Digital' : 'Digital Library',
      desc_pt: 'Aplicação web para histórico de leitura e partilha de reviews literárias, com carregamento rápido e otimização.',
      desc_en: 'Web application to track reading history and share literary reviews, ensuring fast loading and optimization.',
      tech: ['React', 'Vite'],
      link: 'https://github.com/catmat111/bilioteca'
    },
    {
      title: lang === 'pt' ? 'Deteção de Poluição' : 'Pollution Detection',
      desc_pt: 'Simulação de um peixe robótico (Soft-Robotics) para deteção de poluição aquática, com algoritmos complexos.',
      desc_en: 'Simulation of a robotic fish (Soft-Robotics) for aquatic pollution detection, utilizing complex algorithms.',
      tech: ['NVIDIA Isaac Sim', 'Python', 'C#'],
      link: 'https://drive.google.com/drive/folders/1I97GuhapXzMCSvN7bX05GE95HzoIMjMt?hl=pt-br',
      linkText: {
        pt: '> ver relatórios e vídeos',
        en: '> view reports and videos'
      }
    },
    {
      title: 'Evergarden',
      desc_pt: 'Plataforma inspirada no anime Violet Evergarden: permite a pessoas idosas escrever cartas aos filhos, entregues em momentos marcantes — ou depois de partirem.',
      desc_en: 'A platform inspired by the anime Violet Evergarden, letting elderly users write letters to their children, delivered at meaningful moments — or after they are gone.',
      tech: ['C#', 'ASP.NET', 'SQL'],
      link: 'https://github.com/catmat111/Evergarden'
    }
  ];

  return (
    <section id="projetos" className="projetos-section">
      <h2 className="section-tag" style={{ fontFamily: 'var(--font-craft)', color: 'var(--hot-pink)' }}>{sectionTitle}</h2>

      <div className="projetos-grid">
        {projects.map((proj, index) => (
          <div key={index} className="projeto-card">
            <div className="card-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <h3>{proj.title}</h3>
            <p>{lang === 'pt' ? proj.desc_pt : proj.desc_en}</p>
            <div className="tech-tags">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            {proj.link ? (
              <a href={proj.link} target="_blank" rel="noreferrer" className="project-link">
                {proj.linkText ? proj.linkText[lang] : viewOnGithub}
              </a>
            ) : (
              <span className="project-link project-link-disabled">{privateProject}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projetos;
