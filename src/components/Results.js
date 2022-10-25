import React from 'react';
import "../App.css";

export default function Results({restartQuiz, endQuiz, score, length}) {
  return (
    <>
        <h1 className='score-results'>Result : Your Score is - {score} out of {length}</h1>
        <button className='button-results' onClick={() => restartQuiz()}>Restart quiz</button>
        <button className='button-results' onClick={() => endQuiz()}>End quiz</button>
    </>
  )
}
