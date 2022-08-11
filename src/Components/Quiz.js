import React, {useEffect, useState} from "react";

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

    //Our async function is going to get our questions from the API
    const fetchQuestions = async () => {
        try{
            let response = await fetch(apiUrl);
            let questions = await response.json();
            insertCorrectAnswer(questions.results[0].incorrect_answers, questions.results[0].correct_answer)
            setQuestions(questions.results);
            setLoaded(true);
            console.log(questions);
        } catch (error) {
            console.log(error)
        }
    }

    function insertCorrectAnswer(arr, corr){
        const randomIndex = Math.floor(Math.random()*4)
        arr.splice(randomIndex, 0, corr)
    }

    const handleParsed = (e, ans) => {
        e.preventDefault()
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
        fetchQuestions();
    }, []);

    return (
        <div>
            {loaded &&
                <div>
                    <p className="question">{questions[questionIndex].question}</p>
                    {questions[questionIndex].incorrect_answers.map( (a) => {
                        return <button key={a} onClick={(e) => handleParsed(e, a)}>{a}</button>
                    })}
                </div>
            }
        </div>
    );

}

export default Quiz;