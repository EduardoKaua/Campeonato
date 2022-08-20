import "./lol.css";
import { Link } from "react-router-dom";

function lol(props) {
  console.log(props.location);
  console.log(props.match);
  console.log(props.history);

  return (
    <body>
      <div className="headerlol">
        <div className="soonlol">
          <h1>LEAGUE OF LEGENDS</h1>
        </div>
      </div>

      <div className="tablelol">
        <table>
          <thead>
            <tbody>
              <h1 className="holderslol">Jogadores Titulares</h1>
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

      <div className="arrow-lol">
        <Link to="/">
          <h1>↩️</h1>
        </Link>
      </div>
    </body>
  );
}

export default lol;