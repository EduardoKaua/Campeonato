import "./cs.css";
import { Link } from "react-router-dom";

function cs(props) {
  console.log(props.location);
  console.log(props.match);
  console.log(props.history);

  return (
    <div className="backgroundcs">
      <div className="headercs">
        <div className="sooncs">
          <h1>COUNTER STRIKE</h1>
        </div>
      </div>

      <div className="table">
        <table>
          <thead>
            <tbody>
              <h1 className="holders">Jogadores Titulares</h1>
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

      <div className="tablecs">
        <table className="table2">
          <thead>
            <tbody>
              <h1 className="reservation">Jogadores Reservas</h1>
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

      <div className="arrowcs">
        <Link to="/">
          <h1>↩</h1>
        </Link>
      </div>
    </div>
  );
}

export default cs;
