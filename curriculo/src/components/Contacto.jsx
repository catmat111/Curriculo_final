import './Contacto.css';

function Contacto({ lang }) {
  const content = {
    pt: {
      tag: "/* Contacto */",
      title: "VAMOS TRABALHAR JUNTOS?",
      text: "Tens um projeto em mente ou queres bater um papo sobre tecnologia e desenvolvimento? Manda uma mensagem, respondo o mais breve possível.",
      name: "Seu nome",
      email: "seu@email.com",
      subject: "Assunto",
      message: "Sua mensagem...",
      btn: "ENVIAR MENSAGEM"
    },
    en: {
      tag: "/* Contact */",
      title: "LET'S WORK TOGETHER?",
      text: "Do you have a project in mind or want to chat about tech and development? Send me a message, I'll reply as soon as possible.",
      name: "Your name",
      email: "your@email.com",
      subject: "Subject",
      message: "Your message...",
      btn: "SEND MESSAGE"
    }
  };

  return (
    <section id="contacto" className="contacto-section">
      <div className="contato-container">
        
        {/* Info da esquerda */}
        <div className="contacto-info">
          <p className="section-tag contacto-tag">{content[lang].tag}</p>
          <h2 className="contacto-title">{content[lang].title}</h2>
          <p className="contacto-desc">{content[lang].text}</p>
          
          <ul className="contacto-links">
            <li><span className="craft-highlight">@</span> catarina12112.cm@gmail.com</li>
            <li><span className="craft-highlight">#</span> +351 911 797 156</li>
            <li>
              <span className="craft-highlight">{'>'}</span> 
              <a href="https://github.com/catmat111" target="_blank" rel="noreferrer">github.com/catmat111</a>
            </li>
            <li>
              <span className="craft-highlight">{'>'}</span> 
              <a href="https://linkedin.com/in/catarina-pereira-0858b713a/" target="_blank" rel="noreferrer">linkedin.com/in/catarina-pereira</a>
            </li>
          </ul>
        </div>

        {/* Formulário da direita */}
        <div className="contacto-form">
          <div className="input-group">
            <label>nome / name</label>
            <input type="text" placeholder={content[lang].name} />
          </div>
          <div className="input-group">
            <label>email</label>
            <input type="email" placeholder={content[lang].email} />
          </div>
          <div className="input-group">
            <label>assunto / subject</label>
            <input type="text" placeholder={content[lang].subject} />
          </div>
          <div className="input-group">
            <label>mensagem / message</label>
            <textarea placeholder={content[lang].message} rows="4"></textarea>
          </div>
          <button className="btn-neon" style={{ width: '100%', marginTop: '1rem' }}>
            {content[lang].btn}
          </button>
        </div>

      </div>
    </section>
  );
}

export default Contacto;