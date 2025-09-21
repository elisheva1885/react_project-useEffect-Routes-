import React, { useContext } from 'react'
import { appContext } from '../context/context';

const Counter2 = () => {
    const {counter, setCounter} = useContext(appContext);
    return (
        <div className='container'>
            <h2>counter: {counter}
            </h2>
            <button onClick={() => { setCounter(counter + 1) }}>+</button>
        </div>
    )

}

export default Counter2