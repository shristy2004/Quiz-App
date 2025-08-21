import React, { useState } from 'react'
import QuestionList from './QuestionList'
import QuizCSS from './Quiz.css'

export default function Quiz() {
    const questions = [
        {
            question: " A What is React?",
            options: ['1 A back-end framework', '2 A front-end JavaScript library', '3 A database', '4 A compiler'],
            answer: "A front-end JavaScript library"
        },
        {
            question: "What is state in React?",
            options: ['A built-in database', 'A way to store component data dynamically', 'A CSS style', 'A function'],
            answer: "A way to store component data dynamically"
        },
        {
            question: "What is the Virtual DOM in React?",
            options: ['A real DOM', 'A copy of the DOM for efficient updates', 'A server-side DOM', 'A JSON file'],
            answer: "A copy of the DOM for efficient updates"
        },
        {
            question: "What is the purpose of key in React lists?",
            options: ['To style the list', 'To uniquely identify elements for rendering efficiency', ' To set state', 'To create routing'],
            answer: "To uniquely identify elements for rendering efficiency",

        },
        {
            question:"What are props in React?",
             options:['Functions to manage state','Arguments passed to components',' Hooks in React','CSS styling'],
            answer:"Arguments passed to components",
 }

 ]
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const handleClick = (option) => {
        setCurrentAnswer(option)
        if (option === questions[currentQuestionIndex].answer) {
            setScore(score + 1)
        }
    }
    const handleNextQuestion = () => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setCurrentAnswer(null);
    }
    return (
        <div>
            {currentQuestionIndex < questions.length ? <div>
                <QuestionList question={questions[currentQuestionIndex].question}
                    options={questions[currentQuestionIndex].options} handleClick={handleClick} currentAnswer={currentAnswer} />
                <button disabled={currentAnswer === null} className={currentAnswer === null ? 'button-disable' : 'button'} onClick={handleNextQuestion}>Next Question</button>
            </div> : <div>Your Score is {score}</div>}

        </div>
    )
}
