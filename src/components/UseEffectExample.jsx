import React, { useState, useEffect } from 'react'

export function UseEffectExample() {
    const [count, setcount] = useState(0)
    useEffect(() => {
        console.log("effect");

    }, [count])
    return (
        <div>
            {console.log('render')}
            you clicked : {count} times
            <button onClick={() => setcount(count + 1)}>Click</button>
        </div>
    )
}


