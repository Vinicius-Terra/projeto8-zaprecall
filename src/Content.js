import React from "react";

import "./assets/css/reset.css";
import "./assets/css/Content.css";

import logo from "./assets/imgs/logo.png";
import seta from "./assets/imgs/setinha.png";

export default function Content() {
    return (
    <div className="centralizada content">
        
        <div className="flex content">
            <img className="content" src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </div>
        
        <Cards />    
       
    </div>
    );
  }
  
function Cards () {

    const deck = [
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


    const shuffledDeck = deck.sort((a, b) => 0.5 - Math.random());

    const componentsCard = shuffledDeck.map((obj, index) =>  
    <Card
        key={index} 
        number = {index + 1}
        questions = {obj.question}
        answer = {obj.answer}/> );

    return(
    <div className="Cards">
        {componentsCard}
    </div>)
    

}

function Card ({number, questions, answer}) {

    const [cardState, setCardState] = React.useState("initial");

    if (cardState === "initial"){ 
        return(
        <div className="Card">
            <h2>Pergunta {number}</h2> 
            <ion-icon onClick={()=>setCardState("question")} 
            name="play-outline"></ion-icon>
        </div>
        ) 

    }
    if (cardState === "question") {
        return (
        <div className="question">
            <h2>{questions}</h2> 
            <img className="seta" src={seta} alt="seta" 
            onClick={()=>setCardState("answer")} />
        </div>

        )
    }

    if (cardState === "answer") {
        return (
        <div className="answer">
            <h2>{answer}</h2> 
            <div className="options">
                <div class="naoLembrei">
                    <h3>Não lembrei</h3> 
                </div>
                <div class="quaseNLembrei">
                    <h3>Quase não</h3> 
                    <h3>lembrei</h3> 
                </div>
                <div class="zap">
                    <h3>Zap!</h3>
                </div>    
            </div>
        </div>
            
        )
    }
    
}

function Fotter () {}