import { useState, useEffect } from 'react'
import dice from '../images/icon-dice.svg'
function App() {
    const[text, setText] = useState([])

    const fetchAdvice = async () => {
        const answer = await fetch("https://api.adviceslip.com/advice");
        const data = await answer.json();

        console.log(data);

        setText(data.slip);
    }

    useEffect(() => {
        fetchAdvice()
    }, [])

  return (
    <div className="container">
        <h1>Advice #{text.id}</h1>
        <p>{text.advice}</p>

        <div>
            <button onClick={fetchAdvice}>
                <img src={dice} alt="" />
            </button>
        </div>
    </div>
  )
}

export default App