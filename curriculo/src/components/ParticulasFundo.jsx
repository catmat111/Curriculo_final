import './ParticulasFundo.css';

function ParticulasFundo() {
  // Aumentámos de 15 para 30 bolinhas
  const bolinhas = Array.from({ length: 30 });

  return (
    <div className="background-particles">
      {bolinhas.map((_, index) => (
        <div key={index} className={`particle p-${index % 10}`}></div>
      ))}
    </div>
  );
}

export default ParticulasFundo;