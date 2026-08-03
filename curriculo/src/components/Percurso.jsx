import './Percurso.css';

function Percurso({ lang }) {
  const sectionTitle = lang === 'pt' ? '/* Minha jornada até aqui */' : '/* My journey so far */';

  // Dados retirados do teu currículo PDF e HTML
  const journeyData = [
    {
      year: '2026',
      title: lang === 'pt' ? 'Licenciatura em Engenharia Informática' : 'Bachelor\'s in Computer Engineering',
      place: 'Instituto Politécnico de Tomar',
      desc: lang === 'pt' 
        ? 'Foco em desenvolvimento de software, algoritmos e robótica. Desenvolvimento do projeto de simulação de Soft-Robotics no Isaac Sim.' 
        : 'Focus on software development, algorithms, and robotics. Developed the Soft-Robotics simulation project in Isaac Sim.',
      type: 'edu'
    },
    {
      year: lang === 'pt' ? 'Concluída' : 'Completed',
      title: lang === 'pt' ? 'Pós-Graduação em SAP (ERP)' : 'Postgraduate in SAP (ERP)',
      place: 'Instituto Politécnico de Tomar',
      desc: lang === 'pt' 
        ? 'Especialização em Sistemas de Gestão Empresarial, focada na criação e análise de dashboards de suporte à decisão.' 
        : 'Specialization in Enterprise Management Systems, focused on creating and analyzing decision-support dashboards.',
      type: 'edu'
    },
    {
      year: lang === 'pt' ? 'Presente' : 'Present',
      title: lang === 'pt' ? 'Base de Operações' : 'Home Base',
      place: 'Caldas da Rainha, Portugal',
      desc: lang === 'pt' 
        ? 'A minha casa e centro de desenvolvimento remoto, à procura de oportunidades 100% remotas para aplicar os meus conhecimentos Full-Stack.' 
        : 'My home and remote development hub, seeking 100% remote opportunities to apply my Full-Stack expertise.',
      type: 'location'
    }
  ];

  return (
    <section id="percurso" className="percurso-section">
      <h2 className="section-tag" style={{ fontFamily: 'var(--font-craft)', color: 'var(--neon-green)' }}>{sectionTitle}</h2>
      
      <div className="timeline">
        {journeyData.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <span className="timeline-year">{item.year}</span>
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-place">{item.place}</h4>
              <p className="timeline-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Percurso;