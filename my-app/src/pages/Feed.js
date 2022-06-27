import "./Feed.css";
import React from "react";
import csgo from './imagens/csgo.png'
import valorant from './imagens/valorant.png'
import freefire from './imagens/free fire.png'
import lol from './imagens/lol.png'
import { Link } from 'react-router-dom'

export default function Feed() {
  return (
    <body>
      <div className="cabeçalho">
        <div className="Logo">
          <h1>ELITI</h1>
        </div>
      </div>
        
     <div className="login">
        <Link to="./Login.js">
          <button>login</button>
        </Link>
        </div>
<div className="csgo">
<img src={csgo} alt="" />
</div>
<div className="valorant">
<img src={valorant} alt="" />
</div>
<div className="freefire">
<img src={freefire} alt="" />
</div>
<div className="lol" >
<img src={lol} alt="" />
</div>
 </body>
  );
}
