import { useState } from 'react';
import './Contacto.css';

// Chave de acesso do Web3Forms (web3forms.com) — associada ao email da Catarina.
// Para trocar de conta/email, basta gerar uma nova chave no site e substituir aqui.
const WEB3FORMS_ACCESS_KEY = 'dc499292-db0e-4963-b1de-f166b3ea6eac';

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
      btn: "ENVIAR MENSAGEM",
      sending: "A ENVIAR...",
      success: "Mensagem enviada! Respondo em breve.",
      error: "Não foi possível enviar. Tenta outra vez ou usa o email diretamente."
    },
    en: {
      tag: "/* Contact */",
      title: "LET'S WORK TOGETHER?",
      text: "Do you have a project in mind or want to chat about tech and development? Send me a message, I'll reply as soon as possible.",
      name: "Your name",
      email: "your@email.com",
      subject: "Subject",
      message: "Your message...",
      btn: "SEND MESSAGE",
      sending: "SENDING...",
      success: "Message sent! I'll get back to you soon.",
      error: "Couldn't send it. Please try again or email me directly."
    }
  };

  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
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
        <form className="contacto-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>nome / name</label>
            <input
              type="text"
              name="name"
              placeholder={content[lang].name}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>email</label>
            <input
              type="email"
              name="email"
              placeholder={content[lang].email}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>assunto / subject</label>
            <input
              type="text"
              name="subject"
              placeholder={content[lang].subject}
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label>mensagem / message</label>
            <textarea
              name="message"
              placeholder={content[lang].message}
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn-neon"
            style={{ width: '100%', marginTop: '1rem' }}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? content[lang].sending : content[lang].btn}
          </button>

          {status === 'success' && <p className="form-status form-status-success">{content[lang].success}</p>}
          {status === 'error' && <p className="form-status form-status-error">{content[lang].error}</p>}
        </form>

      </div>
    </section>
  );
}

export default Contacto;