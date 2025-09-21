import React, { useState } from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { appContext } from '../context/context';
import Home from './home'
import About from './about';
import Pixa from './Pixa/pixa';
import Atlas from './atlas/atlas';
import Counter2 from './counter2';
import Counter from './counter';
import Vip from './VIP/vip';
function AppRoutes() {
    const [number, setNumber] = useState(33);
    const [coins, setCoins] = useState(6);
    const [counter, setCounter] = useState(0);
    return (
        <BrowserRouter>
            <appContext.Provider value={
                {
                    val: "koko2",
                    number, setNumber, coins, setCoins, counter, setCounter
                }} >
                <header className='p-2 container bg-info'>
                    <div>
                        {coins}
                    </div>
                    <Link to = "/">Home</Link>
                    <Link to = "/About">About</Link>
                    <Link to = "/counter">Counter</Link>
                    <Link to = "/counter2">Counter2</Link>
                    <Link to = "/atlas">Atlas</Link>
                    <Link to = "/pixa/cars">Pixa</Link>
                    <Link to = "/vip">Vip</Link>
                </header>
                <Routes>
                    <Route index element= {<Home/>}/>
                    <Route path='/about' element= {<About/>}/>
                    <Route path='/counter' element= {<Counter/>}/>
                    <Route path='/counter2' element= {<Counter2/>}/>
                    <Route path='/atlas' element= {<Atlas/>}/>
                    <Route path='/pixa/cars' element= {<Pixa/>}/>
                    <Route path='/vip' element= {<Vip/>}/>


                </Routes>
                </appContext.Provider>
                <footer className='p-2 container bg-danger'>footer</footer>
        </BrowserRouter>
    )
}

export default AppRoutes