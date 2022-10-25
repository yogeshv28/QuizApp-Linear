import React from 'react';
import "../App.css";

function Questionaire({currentIndex ,headline, handleAnswer,handleComment,showComment,showAnswers,handleNextQuestion, data:{question, correct_answer, answers, comment}}) {
    
    return (
        <div className='questionaire'>
            <div className="headlineClass">
                <h3 dangerouslySetInnerHTML={{__html:headline}} />
            </div>

            <div className="questionClass">
                <h4>{currentIndex+1}. {question}</h4>
                
            </div>
            <div className="button-overall">
                {answers.map((answer,idx) => {
                    // key=answer.idx,
                    const specialClassName = showAnswers ? (
                        answer === correct_answer ? "green-button": "red-button"
                    ) : "";
                    return(
                        <>
                        <button className={`normal-button ${specialClassName}`} 
                        onClick = {() => handleAnswer(answer)}
                        dangerouslySetInnerHTML={{__html:answer}}/>
                        </>
                    )
                })}
            </div>
            {showAnswers && (
                <div className="commentClass">
                    <h4>correct answer is</h4>
                    <h5 dangerouslySetInnerHTML={{__html:correct_answer}} />
                    <h5 dangerouslySetInnerHTML={{__html:comment}} />
                </div>
            )}
            {showAnswers && (
                <button onClick = {handleNextQuestion} className="next-question">Next Question</button>
            )}
        </div>
    )
}

export default Questionaire;
