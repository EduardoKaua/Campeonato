import "./lol.css";
import { Link } from "react-router-dom";

function lol(props) {
  console.log(props.location);
  console.log(props.match);
  console.log(props.history); 

return (
  <div className="backgroundlol">
    <div className="headerlol">
      <div className="soonlol">
        <h1>FREE FIRE</h1>
      </div>
    </div>

    <div className="tablelol">
      <table>
        <thead>
          <tbody>
            <h1 className="holderlol">Jogadores Titulares</h1>
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

    <div className="tablelol2">
      <table className="tablelol">
        <thead>
          <tbody>
            <h1 className="reservationlol">Jogadores Reservas</h1>
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

    <div className="arrowlol">
      <Link to="/">
        <h1>↩</h1>
      </Link>
    </div>
  </div>
 );
};

export default lol;
