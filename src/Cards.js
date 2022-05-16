import React from 'react';
import './assets/css/Content.css';

import Card from './Card';

export default function Cards({deck, 
 setNumRespostas, numRespostas, 
 setFinalMensage, icones, setIcones, isWin, setWin}) {  



    console.log(numRespostas)

    const componentsCard = deck.map((obj, index) =>  
    <Card
        key={index} 
        number = {index + 1}
        questions = {obj.question}
        answer = {obj.answer}
        setNumRespostas = {setNumRespostas}
        numRespostas = {numRespostas}
        setIcones = {setIcones}
        icones = {icones}
        isWin = {isWin} setWin={setWin}
        deck = {deck}
        setFinalMensage = {setFinalMensage}/> 
        );


    return (
        <div className='Cards'>
            {componentsCard}
        </div>
    )
}