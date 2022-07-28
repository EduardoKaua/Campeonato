import "./index.css";
import csgo from "./imagens/csgo.png";
import valorant from "./imagens/valorant.png";
import freefire from "./imagens/free fire.png";
import lol from "./imagens/lol.png";
import { Link } from "react-router-dom";

function index(props) {
  console.log(props.location);
  console.log(props.match);
  console.log(props.history);

  return (
    <body>
      <div className="cabecalho1">
        <div className="Logo">
          <h1 className="game">PRIMEIRO CAMPEONATO DE GAMES ELITI</h1>
          <h1 className="cadastro">Se cadastre agora</h1>
        </div>
      </div>

      <div className="login">
        <Link to="/register">
          <button>Cadastro</button>
        </Link>
      </div>

      <div className="login1">
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>

      <div className="csgo">
        <Link to="/cs">
          <img src={csgo} alt="" />
        </Link>
      </div>

      <div className="valorant">
        <Link to="/valorant">
          <img src={valorant} alt="" />
        </Link>
      </div>

      <div className="freefire">
        <Link to="/freefire">
          <img src={lol} alt="" />
        </Link>
      </div>

      <div className="lol">
        <Link to="/lol">
          <img src={freefire} alt="" />
        </Link>
      </div>
    </body>
  );
}

export default index;
