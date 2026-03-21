import { useState } from "react"
import React from 'react'
import "../Topics/UseState.css"

const UseState = () => {

    const [num, setnum] = useState(0)

    function increase() {
        setnum(num +1)
    }

    function decrease() {
        setnum(Math.max(0, num -1)) 
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increase}>Increase</button>
            <button onClick={decrease}>Decrease</button>
        </div>
    )
}

export default UseState