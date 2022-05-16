import React from 'react';

import seta from "./assets/imgs/setinha.png";


function red ( setSomir, setNumRespostas, numRespostas, setIcones, icones, isWin, setWin, deck, setFinalMensage) {

    setSomir(1)
    console.log(numRespostas)
    setNumRespostas(numRespostas +1)

    const newIcones = [...icones];
    newIcones.push("close-circle")
    setIcones(newIcones);

    setWin(false);

    CreatFinalMensage ( numRespostas, deck, setFinalMensage, isWin, deck, setFinalMensage);

}

function orange ( setSomir, setNumRespostas, numRespostas, setIcones, icones, isWin, deck, setFinalMensage) {

    setSomir(1)
    console.log(numRespostas)
    setNumRespostas(numRespostas +1)

    const newIcones = [...icones];
    newIcones.push("help-circle")
    setIcones(newIcones);

    CreatFinalMensage ( numRespostas, deck, setFinalMensage, isWin, deck, setFinalMensage);

}

function green ( setSomir, setNumRespostas, numRespostas, setIcones, icones, isWin, deck, setFinalMensage) {

    setSomir(1)
    console.log(numRespostas)
    setNumRespostas(numRespostas +1)

    const newIcones = [...icones];
    newIcones.push("checkmark-circle")
    setIcones(newIcones);

    CreatFinalMensage ( numRespostas, deck, setFinalMensage, isWin, deck, setFinalMensage);
}

function CreatFinalMensage( numRespostas, deck, setFinalMensage, isWin){



    if (numRespostas === (deck.length - 1) && isWin === true) {
        const newMensagem = {classe: "visivel", emoji: "🥳", titulo: "Parabéns!", texto: "Você não esqueceu de nenhum flashcard!"}
        setFinalMensage(newMensagem);
    } else if (numRespostas === (deck.length - 1)) {
        const newMensagem = {classe: "visivel", emoji: "😢", titulo: "Putz...", texto: "Ainda faltam alguns... Mas não desanime!"}
        setFinalMensage(newMensagem);
    }
}



export default function Card({number, questions ,answer,setNumRespostas, numRespostas, setIcones, icones, isWin, setWin, deck, setFinalMensage  }) {

    const [cardState, setCardState] = React.useState("initial");
    const [somir, setSomir] = React.useState(0);

    console.log(numRespostas)

    if (cardState === "initial") {
        return (
        <div className="Card">
            <h2>Pergunta {number}</h2> 
            <ion-icon onClick={()=>setCardState("question")} 
            name="play-outline"></ion-icon>
        </div>
            
        )
    } else if (cardState === "question") {
        return (
        <div className="question">
            <h2>{questions}</h2> 
            <img className="seta" src={seta} alt="seta" 
            onClick={()=>setCardState("answer")} />
        </div>
        )
    } else if (cardState === "answer") {
        return (
        <div className={somir ? "Invisible" : "answer"}>
           <h2>{answer}</h2> 
            <div className={somir ? "Invisible" : "options"}>
                <div className={somir ? "Invisible" : "naoLembrei"} 
                onClick={()=>red ( setSomir, setNumRespostas, numRespostas, setIcones, icones, isWin, setWin, deck, setFinalMensage)}>
                    <h3>Não lembrei</h3> 
                </div>
            <div className={somir ? "Invisible" : "quaseNLembrei"}
                onClick={()=>orange ( setSomir, setNumRespostas, numRespostas, setIcones, icones, isWin, deck, setFinalMensage)}>
                    <h3>Quase não</h3> 
                    <h3>lembrei</h3> 
                </div>
                <div className={somir ? "Invisible" : "zap"}
                onClick={()=>green ( setSomir, setNumRespostas, numRespostas, setIcones, icones, isWin, deck, setFinalMensage)}>
                    <h3>Zap!</h3>
                </div>    
            </div>
        </div>
        )
    }
}