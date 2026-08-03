import './Stack.css';
import reactIcon from '../assets/imagens/tecnologias/react.png';
import typescriptIcon from '../assets/imagens/tecnologias/typescript.png';
import jsIcon from '../assets/imagens/tecnologias/js.png';
import nodejsIcon from '../assets/imagens/tecnologias/nodejs.png';
import viteIcon from '../assets/imagens/tecnologias/vite.jpg';
import tauriIcon from '../assets/imagens/tecnologias/cenas.png';
import csharpIcon from '../assets/imagens/tecnologias/c-sharp.png';
import pythonIcon from '../assets/imagens/tecnologias/python.png';
import rustIcon from '../assets/imagens/tecnologias/rust-programming-language--v1.jpg';
import sqlIcon from '../assets/imagens/tecnologias/sql.png';
import isaacIcon from '../assets/imagens/tecnologias/isaac.jpg';
import raspberryIcon from '../assets/imagens/tecnologias/rspberry.png';
import arduinoIcon from '../assets/imagens/tecnologias/Arduino_IDE_logo.svg.png';
import sapIcon from '../assets/imagens/tecnologias/SAP Logo 1-1.png';
import gitIcon from '../assets/imagens/tecnologias/git.png';
import scrumIcon from '../assets/imagens/tecnologias/srum.png';

function Stack({ lang }) {
  const title = lang === 'pt' ? '/* Stack que uso */' : '/* Tech stack */';
  const subtitle = lang === 'pt'
    ? 'AS TECNOLOGIAS POR TRÁS DOS MEUS PROJETOS.'
    : 'THE TECHNOLOGIES BEHIND MY PROJECTS.';

  // NOTA: níveis estimados a partir do currículo/projetos descritos no site.
  // Ajusta o "level" (0-100) de cada tecnologia para refletir o teu nível real.
  const frontend = [
    { name: 'React', icon: reactIcon, level: 85 },
    { name: 'TypeScript', icon: typescriptIcon, level: 70 },
    { name: 'JavaScript', icon: jsIcon, level: 80 },
    { name: 'Vite', icon: viteIcon, level: 75 },
    { name: 'Tauri', icon: tauriIcon, level: 60 }
  ];

  const backend = [
    { name: 'C#', icon: csharpIcon, level: 65 },
    { name: 'Python', icon: pythonIcon, level: 75 },
    { name: 'Node.js', icon: nodejsIcon, level: 70 },
    { name: 'Rust', icon: rustIcon, level: 55 },
    { name: 'SQL', icon: sqlIcon, level: 70 }
  ];

  const tools = [
    { name: 'NVIDIA Isaac Sim', icon: isaacIcon, level: 60 },
    { name: 'Raspberry Pi', icon: raspberryIcon, level: 55 },
    { name: 'Arduino', icon: arduinoIcon, level: 55 },
    { name: 'SAP (ERP)', icon: sapIcon, level: 65 },
    { name: 'Git / GitHub', icon: gitIcon, level: 85 },
    { name: 'Scrum', icon: scrumIcon, level: 70 }
  ];

  const renderSkills = (skills) => (
    <div className="skills-container">
      {skills.map((skill) => (
        <div key={skill.name} className="skill-row">
          <div className="skill-header">
            {skill.icon && <img src={skill.icon} alt="" className="skill-icon" />}
            <span className="skill-name">{skill.name}</span>
            <span className="skill-percent">{skill.level}%</span>
          </div>
          <div className="skill-bar-track">
            <div className="skill-bar-fill" style={{ '--level': `${skill.level}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="stack" className="stack-section">
      <h2 className="section-tag" style={{ fontFamily: 'var(--font-craft)', color: 'var(--hot-pink)' }}>{title}</h2>
      <h3 className="stack-subtitle">{subtitle}</h3>

      <div className="stack-grid">
        {/* Frontend */}
        <div className="stack-category">
          <h4 className="category-title">{'>'} Frontend</h4>
          {renderSkills(frontend)}
        </div>

        {/* Backend & Lógica */}
        <div className="stack-category">
          <h4 className="category-title">{'>'} Backend & Logic</h4>
          {renderSkills(backend)}
        </div>

        {/* Hardware & Ferramentas */}
        <div className="stack-category">
          <h4 className="category-title">{'>'} Tools & Hardware</h4>
          {renderSkills(tools)}
        </div>
      </div>
    </section>
  );
}

export default Stack;
