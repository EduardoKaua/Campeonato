import "./valorant.css";
import { Link } from "react-router-dom";

function valorant(props) {

  console.log(props.location);
  console.log(props.match);
  console.log(props.history);

  return (
    <body>
      <div className="headervava">
        <div className="soonvava">
          <h1>VALORANT</h1>
        </div>
      </div>

      <div className="tablevava">
        <table>
          <thead>
            <tbody>
              <h1 className="holdersvava">Jogadores Titulares</h1>
              <tr>
                <th>Nick</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Turma</th>
              </tr>

              <tr>
                <td>Strend</td>
                <td>Gustavo</td>
                <td>81 anos</td>
                <td>1° turma</td>
              </tr>
              <tr>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
              </tr>
              <tr>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
              </tr>

              <tr>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
              </tr>
              <tr>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
                <td>sem info</td>
              </tr>
            </tbody>
          </thead>
        </table>
      </div>

      <div className="arrow-valorant">
        <Link to="/">
          <h1>↩️</h1>
        </Link>
      </div>
    </body>
  );
}

export default valorant;