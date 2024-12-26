import { useState } from 'react'
import { NavLink } from "react-router";

const Home = () => {

    const [count, setCount] = useState(0)

    return <>
        <h2>Home page</h2>
        <h2>Счетчик {count}</h2>
        <button id='Btn1' onClick={() => { setCount((previous) => previous + 1) }}>+</button>
        <button id='Btn2' onClick={() => { setCount((previous) => previous - 1) }}>-</button>





        <p id='Gl'><NavLink to="/" end > На главную </NavLink></p>
    </>
}



export default Home;