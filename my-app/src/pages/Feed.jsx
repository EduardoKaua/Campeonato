import "./Feed.css";
import React from "react";
import csgo from "./imagens/csgo.png";
import valorant from "./imagens/valorant.png";
import freefire from "./imagens/free fire.png";
import lol from "./imagens/lol.png";
import { Link } from "react-router-dom";

export default function Feed() {
  return (
    <body>
      <div className="cabeçalho">
        <div className="Logo">
          <h1>PRIMEIRO CAMPEONATO DE GAMES</h1>
        </div>
      </div>

      <div className="login">
        <Link to="/login">
          <button>login</button>
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
          <img src={freefire} alt="" />
        </Link>
      </div>

      <div className="lol">
        <Link to="/lol">
          <img src={lol} alt="" />
        </Link>
      </div>
      <br></br>
    </body>
  );
}