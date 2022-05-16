import React from 'react';

import "./assets/css/reset.css";
import "./assets/css/Content.css";

import logo from "./assets/imgs/logo.png";

import Cards from './Cards'
import Footer from './Footer';


function criaIcones(icone, index) {
    if (icone === "close-circle") {
        return (
            <ion-icon key={index} name={icone} className="red"></ion-icon>
        )
    } else if (icone === "help-circle") {
        return (
            <ion-icon key={index} name={icone} className="orange"></ion-icon>
        )
    } else {
        return (
            <ion-icon key={index} name={icone} className="green"></ion-icon>
        )
    }
}

export default function Content() {

    const cards = [
        {question: "O que é JSX?", 
        answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é __ ", 
        answer: "uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", 
        answer: "letra maiúscula"},
        {question: "Podemos colocar __ dentro do JSX", 
        answer: "expressões"},
        {question: "O ReactDOM nos ajuda __ ", 
        answer: "interagindo com a DOM para colocar componentes React na mesma"},
        {question: "Usamos o npm para __ ", 
        answer: "gerenciar os pacotes necessários e suas dependências"},
        {question: " Usamos props para __", 
        answer: "passar diferentes informações para componentes"},
        {question: "Usamos estado (state) para __", 
        answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}]

    const shuffledCards = cards.sort((a, b) => 0.5 - Math.random());

    const [deck, setDeck] = React.useState(shuffledCards);
    const [numRespostas, setNumRespostas] = React.useState(0);
    const [icones, setIcones] = React.useState([]);
    const [finalMensage, setFinalMensage] = React.useState({classe: "Invisible"});
    const [isWin, setWin] = React.useState(true);

    console.log(numRespostas)

    return (
        <div className="centralizada content">
        
            <div className="flex content">
                <img className="content" src={logo} alt="logo" />
                <h1>ZapRecall</h1>
            </div>

            {console.log(numRespostas)}
            <Cards deck={deck} setDeck={setDeck} 
            numRespostas={numRespostas} setNumRespostas={setNumRespostas} 
            finalMensage={finalMensage} 
            setFinalMensage={setFinalMensage} 
            icones={icones} setIcones={setIcones} 
            isWin = {isWin} setWin={setWin}/>


            <Footer>
                <div className={`finalMensage ${finalMensage.classe}`}>
                    <div className="simple-Flex">
                    <span >{finalMensage.emoji}</span>
                        <h5>{finalMensage.titulo}</h5>
                    </div>
                    <p>
                        {finalMensage.texto}
                    </p>
                </div>
                <h4>{numRespostas}/{deck.length} CONCLUÍDOS</h4>
                <div className="icones">
                    {icones.map(criaIcones)}
                </div>
            </Footer>
        </div>
    )
}