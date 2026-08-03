import './Hero.css';
import avatarImg from '../assets/imagens/eu.png';

function Hero({ lang }) {
  const content = {
    pt: {
      greeting: "Olá, eu sou a Catarina",
      role2: "Desenvolvedora Full-Stack",
      description: "Apaixonada pelo desenvolvimento de software, com especial foco em tecnologias web. Gosto de criar interfaces dinâmicas e reativas em React e desenvolver arquiteturas robustas de backend.",
      description2: "Uma curiosidade que nasceu a mexer em circuitos e microcontroladores, hoje aplicada ao desenvolvimento full-stack — gosto de perceber como as coisas funcionam por dentro, do hardware ao browser. Tenho sempre um projeto pessoal a cozinhar em segundo plano e adoro trabalho de equipa em ambiente ágil.",
      button: ">_ ABRIR CURRÍCULO",
      terminalPrompt: "visitante@site:~$",
      terminalTitle: "catarina@portfolio: ~",
      commands: [
        {
          cmd: "whoami",
          output: [
            "catarina_matos",
            "desenvolvedora full-stack // entusiasta de robótica // caçadora de bugs"
          ]
        },
        {
          cmd: "cat estudos.txt",
          output: [
            "Licenciatura em Engenharia Informática — IPT (2026)",
            "Pós-Graduação em SAP (ERP) — IPT",
            "a aprender Rust nas horas vagas, porque sim"
          ]
        },
        {
          cmd: "ls projetos/",
          output: ["FormDocs  Matcha-Garden  Biblioteca-Digital  Deteção-Poluição"]
        },
        {
          cmd: "sudo rm procrastinação",
          output: ["rm: não foi possível remover 'procrastinação': dispositivo ou recurso ocupado (café a caminho)"]
        }
      ],
      // NOTA: números divertidos/estimados — ajusta à vontade
      stats: [
        { value: '4+', label: 'anos de formação' },
        { value: '4', label: 'projetos lançados' },
        { value: '9999+', label: 'bugs esmagados' },
        { value: '∞', label: 'cafés ingeridos' }
      ]
    },
    en: {
      greeting: "Hi, I'm Catarina",
      role2: "Full-Stack Developer",
      description: "Passionate about software development, with a special focus on web technologies. I really enjoy building dynamic and responsive interfaces with React, and developing robust backend architectures.",
      description2: "A curiosity that started tinkering with circuits and microcontrollers, now channeled into full-stack development — I like understanding how things work under the hood, from hardware to the browser. I always have a side project simmering in the background, and I genuinely enjoy teamwork in agile environments.",
      button: ">_ OPEN RESUME",
      terminalPrompt: "guest@site:~$",
      terminalTitle: "catarina@portfolio: ~",
      commands: [
        {
          cmd: "whoami",
          output: [
            "catarina_matos",
            "full-stack developer // robotics enthusiast // professional bug hunter"
          ]
        },
        {
          cmd: "cat studies.txt",
          output: [
            "Bachelor's in Computer Engineering — IPT (2026)",
            "Postgraduate in SAP (ERP) — IPT",
            "learning Rust in my spare time, just because"
          ]
        },
        {
          cmd: "ls projects/",
          output: ["FormDocs  Matcha-Garden  Digital-Library  Pollution-Detection"]
        },
        {
          cmd: "sudo rm procrastination",
          output: ["rm: cannot remove 'procrastination': device or resource busy (coffee incoming)"]
        }
      ],
      // NOTE: fun/estimated numbers — tweak freely
      stats: [
        { value: '4+', label: 'years of study' },
        { value: '4', label: 'projects shipped' },
        { value: '9999+', label: 'bugs squashed' },
        { value: '∞', label: 'coffees consumed' }
      ]
    }
  };

  return (
    <section id="sobre" className="hero-section">
      <div className="hero-content">
        
        <div className="hero-text">
          <h1>{content[lang].greeting}</h1>
          <h2>
            <span className="craft-stitch-wrapper">
              <span className="craft-stitch" data-text={content[lang].role2}>
                {content[lang].role2}
              </span>
            </span>
          </h2>
          <p style={{ maxWidth: '550px', marginTop: '1.5rem', lineHeight: '1.6' }}>
            {content[lang].description}
          </p>
          <p style={{ maxWidth: '550px', marginTop: '1rem', lineHeight: '1.6' }}>
            {content[lang].description2}
          </p>

          <div className="about-terminal">
            <div className="about-terminal-header">
              <span className="about-dot about-dot-red"></span>
              <span className="about-dot about-dot-yellow"></span>
              <span className="about-dot about-dot-green"></span>
              <span className="about-terminal-title">{content[lang].terminalTitle}</span>
            </div>
            <div className="about-terminal-body">
              {content[lang].commands.map((block, i) => (
                <div key={i} className="about-terminal-block">
                  <p className="about-terminal-line">
                    <span className="about-terminal-prompt">{content[lang].terminalPrompt}</span> {block.cmd}
                  </p>
                  {block.output.map((line, j) => (
                    <p key={j} className="about-terminal-output">{line}</p>
                  ))}
                </div>
              ))}
              <p className="about-terminal-line">
                <span className="about-terminal-prompt">{content[lang].terminalPrompt}</span>
                <span className="about-terminal-cursor">_</span>
              </p>
            </div>
          </div>

          <div className="social-links">
            <button className="btn-neon">{content[lang].button}</button>
            <a href="https://github.com/catmat111" target="_blank" rel="noreferrer" className="social-link">GitHub</a>
            <a href="https://linkedin.com/in/catarina-pereira-0858b713a/" target="_blank" rel="noreferrer" className="social-link">LinkedIn</a>
            <a href="mailto:catarina12112.cm@gmail.com" className="social-link">Email</a>
          </div>
        </div>

        {/* Coluna do Avatar com as formas geométricas no fundo */}
        <div className="hero-image-container">
          <div className="cyber-shapes">
            <div className="shape-circle-green"></div>
            <div className="shape-square-purple"></div>
            <div className="shape-circle-solid"></div>
            <div className="shape-ring-pink"></div>
            <div className="shape-circle-pink-soft"></div>
            <div className="shape-diamond-purple"></div>
          </div>
          <img
            src={avatarImg}
            alt={lang === 'pt' ? 'Avatar da Catarina' : "Catarina's avatar"}
            className="hero-avatar"
          />

          <div className="about-stats">
            {content[lang].stats.map((stat, i) => (
              <div key={i} className={`stat-card ${stat.value === '∞' ? 'stat-card-fun' : ''}`}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;