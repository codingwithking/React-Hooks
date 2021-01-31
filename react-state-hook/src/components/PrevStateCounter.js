import React, { useState } from 'react'

function PrevStateCounter() {
    const initialCount = 0;
    const [count, setCount] =useState(initialCount)

    const increamentFive =()=>{
        for (let index = 0; index < 5; index++) {
            setCount( prevState => prevState + 1)
        }
    }
    return (
        <div>
            <p>count:{count}</p>
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(count +1)}>Increament</button>
            <button onClick={()=>setCount(count-1)}>Decreament</button>
            <button onClick={increamentFive}>Increament 5</button>
        </div>
    )
}

export default PrevStateCounter
