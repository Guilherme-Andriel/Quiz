import { useContext } from "react"
import { QuizContext } from "../context/quiz"
import Category from "../img/category.svg"
import "./PickCategory.css"


const PickCategory = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    const choseCategory = (category) =>{
        dispatch({
            type: "START_GAME",
            payload: category
        })


        dispatch({
            type: "REORDER_QUESTIONS"
        })
    }


  return (
    <div id="category">
        <h2>Escolha uma categoria</h2>

        <p>As perguntas serão referentes a uma das linguagens abaixo:</p>
        <div>
            {quizState.questions.map((question) =>(
                <button onClick={() => (choseCategory(question.category))} key={question.category}>{question.category}</button>
            ))}
        </div>

        <img src={Category} alt="CAtegorias do Quiz" />
    </div>
  )
}

export default PickCategory