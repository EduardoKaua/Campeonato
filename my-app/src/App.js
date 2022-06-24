import "./App.css";
import React from "react";

export default function App() {
  return (
    <body>
      <div className="cabeçalho">
        <div className="Logo">
          <h1>ELITI</h1>
        </div>
      </div>
      <a href="App2.css">
        <div className="login">
          <button>login</button>  
        </div>
      </a>
      <div className="csgo">
        <button>CSGO</button>
      </div>
      <div className="valorant">
        <button>VALORANT </button>
      </div>
      <div className="freefire">
        <button>FREE FIRE </button>
      </div>
      <div className="lol">
        <button>LOL</button>
      </div>
    </body>
  );
}
