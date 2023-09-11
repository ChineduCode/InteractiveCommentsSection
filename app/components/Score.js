'use client'

import { useState } from "react"

export default function Score({score}){
    const [countScore, setCountScore] = useState(score)

    function handleIncrease(){ setCountScore(countScore + 1) }

    function handleDecrease(){
        if(countScore === 0){
            return
        }else{ setCountScore(countScore - 1) }
    }
    
    return(
        <div className="score">
           <img src="images/icon-minus.svg" alt="" onClick={handleDecrease}/>
           <span> {countScore} </span>
           <img src="images/icon-plus.svg" alt="" onClick={handleIncrease}/>
        </div>
    )
}