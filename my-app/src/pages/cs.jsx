import "./cs.css";
import React from "react";
import { Link } from "react-router-dom";

function cs() {
  document.querySelector("body").style.backgroundImage="linear-gradient(to right, rgb(35, 33, 41), rgb(8, 5, 48)"
  return (
    <body>
      <div className="cabeçalho">
        <div className="Logo">
          <h1>COUNTER STRIKE</h1>
        </div>
      </div>

      <div className="tabela">
        <table>
          <thead>
            <tbody>
              <h1 className="titular">Jogadores Titulares</h1>
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

      <div className="tabela2">
        <table className="table2">
          <thead>
            <tbody>
              <h1 className="reserva">Jogadores Reservas</h1>
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

      <div className="setacs">
        <Link to="/">
          <h1>↩</h1>
        </Link>
      </div>
    </body>
  );
}

export default cs;