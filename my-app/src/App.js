import "./App.css";
import React from "react";
import csgo from './imagens/csgo.png'
import valorant from './imagens/valorant.png'
import freefire from './imagens/free fire.png'
import lol from './imagens/lol.png'

export default function App() {

  return (
    <body>
      <div className="cabeçalho">
        <div className="Logo">
          <h1>ELITI</h1>
        </div>
      </div>
        
        <div className="login">
          <button a href="./paginas/Login.js">login</button>
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