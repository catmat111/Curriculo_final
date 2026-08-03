import './AnimacaoInicial.css';

function AnimacaoInicial({ isExiting, lang }) {
  const text = {
    pt: {
      line1: "inicializando sistema...",
      line2: "carregando módulos: curriculo [ok] personalidade [ok]",
      line3: "injetando matriz de cores (verde, rosa, roxo)",
      line4: "costurando código...",
      line5: "acesso concedido."
    },
    en: {
      line1: "initializing system...",
      line2: "loading modules: resume [ok] personality [ok]",
      line3: "injecting color matrix (green, pink, purple)",
      line4: "stitching code...",
      line5: "access granted."
    }
  };

  return (
    <div className={`loader ${isExiting ? 'fade-out' : ''}`}>
      <div className="mac-window">
        <div className="mac-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="mac-body">
          <div className="terminal-container">
            <p className="terminal-line line1"><span className="prompt">{'>'}</span> {text[lang].line1}</p>
            <p className="terminal-line line2"><span className="prompt">{'>'}</span> {text[lang].line2}</p>
            <p className="terminal-line line3"><span className="prompt">{'>'}</span> {text[lang].line3}</p>
            <p className="terminal-line line4"><span className="prompt">{'>'}</span> {text[lang].line4}</p>
            <p className="terminal-line line5"><span className="prompt">{'>'}</span> {text[lang].line5}<span className="cursor">_</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimacaoInicial;