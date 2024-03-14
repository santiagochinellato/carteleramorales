import "./App.css";
import data from "./prof.json";

function App() {

  // Desestructuración de los datos del JSON
  const {
    background,
    Logo,
    direccon,
    telefonos,
    mail,
    logoProf,
    logoNom,
    QrCode,
    ...profesiones
  } = data;

  return (
    <div className="container">
      <div className="textContainer">
        <img className="logo" src={Logo} alt="Logo" />
        <div>
          <p>
            {direccon} - {telefonos}
          </p>
          <p>{mail}</p>
        </div>
      </div>
      <div className="containerProfesionales">
        {/* Iterar sobre cada especialidad */}
        {Object.keys(profesiones).map((key) => {
          const profesion = profesiones[key];
          return (
            <div key={key} className="containerCard">
              <div> <h2>{profesion.name}</h2>
              <img src={logoProf} alt="" />
              </div>     
              <ul>
                {/* Iterar sobre cada profesional de la especialidad */}
                {profesion.profesionales.map((profesional, index) => (
                  <li key={index}>
                    {/* Determinar el título de género */}
                    <p>
                      {profesional.genero === "F" ? "Dra." : "Dr."}{" "}
                      {profesional.nombre}
                    </p>
                    <img src={logoNom} alt="" />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;