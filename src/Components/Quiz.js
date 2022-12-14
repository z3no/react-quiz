import './Quiz.css';
import React, {useCallback, useEffect, useState} from "react";

function Quiz() {

    //Our url that will give us ten multiple-choice questions about Japanese Anime & Manga
    const apiUrl = 'https://opentdb.com/api.php?amount=10&category=31&type=multiple';

    //Define stateful variables with useState
    //The questions constant is going to be an array of question objects we get from the API
    const [questions, setQuestions] = useState([])

    //The loaded constant is going to let us know if the questions have been loaded, so we don't access them too early
    const [loaded, setLoaded] = useState(false)

    //QuestionIndex is going to track the current question we are on in our array
    const [questionIndex, setQuestionIndex] = useState(0)

    //Score variable will store the user's score. The lastAnswer variable is going to sore the color we want to display the score in
    //by default it will be black, green if the last answer was correct and red if it was incorrect.
    const [score, setScore] =  useState(0)
    const [lastAnswer, setLastAnswer] = useState('last-answer')

    const classes = `score ${lastAnswer}`
    //Our async function is going to get our questions from the API
    //Because we are fetching our data outside useEffect we have to wrap the function with a 'useCallback'.
    //Since the function is declared outside of 'useEffect', we will have to put it in the dependency array of the hook.
    //But if the function isn't wrapped in 'useCallback', it will update on every re-render, and thus trigger the 'useEffect' on every re-render.
    const fetchQuestions = useCallback(async () => {
        //get the questions from our api
        let response = await fetch(apiUrl);
        //convert question data to json
        let questions = await response.json();
        //set state with the result
        setQuestions(questions.results);
        setLoaded(true);
        insertCorrectAnswer(questions.results[0].incorrect_answers, questions.results[0].correct_answer)
        console.log(questions.results);
    },[])

    function insertCorrectAnswer(array, correct){
        const randomIndex = Math.floor(Math.random()*4)
        array.splice(randomIndex, 0, correct)
        console.log(array)
    }

    const handleParsed = (event, answer) => {
        event.preventDefault()

        if(answer === questions[questionIndex].correct_answer) {
            setScore(score + 10)
            setLastAnswer('green')
        } else {
            setScore(score - 10)
            setLastAnswer('red')
        }

        if(questionIndex + 1 < questions.length){
            insertCorrectAnswer(questions[questionIndex + 1].incorrect_answers, questions[questionIndex + 1].correct_answer)
            setQuestionIndex(questionIndex + 1)
        } else {
            fetchQuestions()
            setQuestionIndex(0)
        }
    }

    //useEffect hook
    useEffect(() => {
        //call the function and make sure to catch any error
        fetchQuestions().catch(console.error);
    }, [fetchQuestions]);

    return (
        <div>
            {loaded &&
                <div className="quiz">
                    <p className={classes}>Score: {score}</p>
                    <p className="question">{questions[questionIndex].question}</p>
                    {questions[questionIndex].incorrect_answers.map( (answer) => {
                        return <button className="question-button" key={answer} onClick={(event) => handleParsed(event, answer)}>{answer}</button>
                    })}
                </div>
            }
        </div>
    );

}

export default Quiz;