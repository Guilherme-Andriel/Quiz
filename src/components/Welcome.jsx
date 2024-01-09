import React from 'react'
import { useContext  } from 'react'

// consumir o contexto
import { QuizContext } from '../context/quiz'

import Quiz from "../img/quiz.svg"
import "../components/Welcome.css"

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext)



  return (
    <div id='welcome'>
        <h2>Seja bem-vindo</h2>
        <p>Clique no botão abaixo para começar:</p>
        <button onClick={() => dispatch({type: "CHANGE_STATE"})}>Iniciar</button>
        <img src={Quiz} alt="Início do Quiz App" />
    </div>
  )
}

export default Welcome