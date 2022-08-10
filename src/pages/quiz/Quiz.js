import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import "./quiz.css";
import Question from "../../components/questions/Question";

const Quiz = ({ name, score, questions, setScore, setQuestions }) => {

  const [currQues, setCurrQues] = useState(0);
  const [options, setOptions] = useState("");

  useEffect(() => {
    // console.log(questions);
    setOptions(questions && handleShuffle([
      questions[currQues]?.correct_answer,
      ...questions[currQues]?.incorrect_answers,

    ])
    );

  }, [currQues,questions]);
  // console.log(options);

  const handleShuffle=(optionss) => {
    return optionss.sort(()=>Math.random() - 0.5);
  }

  return (
    <div className='quiz'>
        <span className="subtitle">welcome, {name}</span>

        {questions ? (
        <>
           <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>
              {/* {questions[currQues].difficulty} */}
              Score : {score}
            </span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={options}
            correct={questions[currQues]?.correct_answer}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />

        </>
        ):(<CircularProgress
         style={{margin:100}}
        color="inherit"
        size={150}
        thickness={1} 
        />)
        }

    </div>
  )
}

export default Quiz
