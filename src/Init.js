
import "./assets/css/reset.css";
import "./assets/css/Init.css";

import logo from "./assets/imgs/logo.png";

export default function Init({setStart}) {

    function Start () {

        setStart(false)
    }

    return (
    <div className="centraliza">
        <img src={logo} alt="logo" />
        <h1>ZapRecall</h1>
        <button onClick={Start}>Iniciar Recall!</button>
    </div>
    );
  }
 

 