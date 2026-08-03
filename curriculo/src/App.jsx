import { useState, useEffect } from 'react';
import './App.css';
import AnimacaoInicial from './components/AnimacaoInicial';
import Hero from './components/Hero';
import Projetos from './components/Projetos';
import Percurso from './components/Percurso';
import Stack from './components/Stack';
import Contacto from './components/Contacto';
import ParticulasFundo from './components/ParticulasFundo'; // AS BOLAS NO FUNDO

function App() {
  const [loading, setLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [lang, setLang] = useState('pt');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Controla o tempo da animação inicial de terminal
    const timerExit = setTimeout(() => setIsExiting(true), 6500);
    const timerRemove = setTimeout(() => setLoading(false), 7000);

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll * 100);
    };
    
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timerExit);
      clearTimeout(timerRemove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // As secções só existem no DOM depois da animação inicial terminar
    if (loading) return;

    const sections = document.querySelectorAll('main > section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  // Se ainda estiver a carregar, mostra a animação inicial do terminal (com as bolas no fundo também!)
  if (loading) {
    return (
      <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor: 'var(--bg-color)' }}>
        <ParticulasFundo />
        <AnimacaoInicial isExiting={isExiting} lang={lang} />
      </div>
    );
  }

  // Site principal após a animação
  return (
    <div className="app-container" style={{ position: 'relative' }}>
      
      {/* As bolinhas verdes a passar no fundo do site */}
      <ParticulasFundo />

      <nav className="navbar">
        <div className="navbar-logo">CATARINA_MATOS.exe</div>
        
        <ul className="navbar-links">
          <li><a href="#sobre">{lang === 'pt' ? 'Sobre' : 'About'}</a></li>
          <li><a href="#projetos">{lang === 'pt' ? 'Projetos' : 'Projects'}</a></li>
          <li><a href="#percurso">{lang === 'pt' ? 'Percurso' : 'Journey'}</a></li>
          <li><a href="#stack">Stack</a></li>
          <li><a href="#contacto">{lang === 'pt' ? 'Contacto' : 'Contact'}</a></li>
        </ul>

        <div className="navbar-actions">
          <button onClick={toggleLang} className="btn-circle" title={lang === 'pt' ? 'Mudar idioma' : 'Change language'}>
            {lang === 'pt' ? 'EN' : 'PT'}
          </button>
          <div className="btn-pill">
            <span className="status-dot"></span> OPEN TO WORK
          </div>
        </div>

        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      </nav>

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero lang={lang} />
        <Projetos lang={lang} />
        <Percurso lang={lang} />
        <Stack lang={lang} />
        <Contacto lang={lang} />
      </main>
    </div>
  );
}

export default App;