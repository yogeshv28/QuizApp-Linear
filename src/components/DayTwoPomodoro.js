import React, { useState, useEffect } from "react";
import "../App.css";
import Questionaire from "./Questionaire";
import { useHistory } from "react-router-dom";
import Results from "./Results";


function DayTwoPomodoro() {
  
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [showComment, setShowComment] = useState(false);

  const headline = "Day 2 - Pomodoro Quiz";

  const questi = [
    {
      id:0,
      question: "The Eat the Frog is one of simplest yet most effective productivity techniquesaround. What is the frog in Eat the Frog?",
      incorrect_answers: [
        "An or a set of easy tasks on your to do list",
        "Your manager's latest burning ask from you",
        "An actual frog",
      ],
      correct_answer:"Your hardest, most important task for the day",
      comment: "The Frog is also known as your Most Important Task (MIT). This task is often important but not urgent, the type of difficult task that creates a lot of mental resistance and ensuing procrastination if you don't intentionally make time for it. You probably already know the task I’m talking about."
    },
    {
      id:1,
        question: "When do you eat the frog i.e. do the most important task for the day?",
        incorrect_answers: [
          "During an empty slot in the calendar",
          "Immediately after lunch",
          "At night, when there are no distractions",
        ],
        correct_answer:"First thing in the morning",
        comment:"We all know intuitively that not all work hours are created equal. The first hour of the morning when your energy and willpower are high is a helluva lot more productive than the hour after lunch when all you want to do is curl up and take a nap. Eat the Frog ensures that you’re using your best hours to do your most mentally taxing work and leaves less important tasks for times when you’ve already exhausted your brain power for the day."
    },
    {
      id:2,
        question: "What should be size of the task that you choose as your frog?",
        incorrect_answers: [
          "A task you can complete in 30-60 mins",
          "A task you can complete in less that 30 mins",
          "A task you can complete in 4-8 hours",
        ],
        correct_answer:"A task you can complete in 1-4 hours",
        comment: "Your frog should take half a day’s work, tops. A clearly defined, realistic task will make it easier to get started and not procrastinate on. Checking it off your list before lunch will give you a concrete win and accompanying endorphin boost to carry you into the rest of your day."
    },
    {
      id:3,
        question: "Why should you eat the frog first thing in the morning? ",
        incorrect_answers: [
          "So that you can take the rest of the day off",
          "So that you can eat another frog in the afternoon",
          "So that you have the whole day to complete the task",
        ],
        correct_answer:"So that your most important task gets prioritized first",
        comment: "Whatever your frog for the day happens to be, do it first thing when you sit down to work. If at all possible, don’t schedule meetings. Don’t catch up on Twitter. Don’t check your email. Don’t even think about thinking about all the other less important things you’ll have to do later in the day. Focus all of your mental energy on your frog and only your frog."
    },
    {
      id:4,
        question: "How frequently should you eat the frog?",
        incorrect_answers: [
          "Once every week",
          "Once every fortnight",
          "Whenever you need",
        ],
        correct_answer:"Daily",
        comment: "Any day that you eat your frog is a good day. Furthermore, following the method means you’ll be making progress on something meaningful on a daily basis. Studies have shown that that kind of progress is a key motivator and predictor of happiness and engagement at work, and can lead to a virtuous cycle of getting things done. We feel good when we follow through on the things we intended to do which in turn makes it easier to continue doing them. When you experience a win first thing in the morning, you’re more likely to build momentum and good vibes to carry you through the rest of your workday."
    },
    {
      id:5,
        question: "What important habit does eat the frog help you develop?",
        incorrect_answers: [
          "Time management",
          "Multi-tasking",
          "Prioritization",
        ],
        correct_answer:"Deep work",
        comment: "The most valuable work in today’s knowledge economy is almost invariably work that requires all your mental resources to be focused on one thing — think cognitively demanding tasks like coding, designing, writing, strategizing, and problem-solving. Yet the modern workplace isn’t set up to support that kind of distraction-free “deep work” (a phrase coined by computer science professor Cal Newport). We’re distracted by so many emails, meetings, chat messages and requests for input that we don’t have the time or space to focus on our highest impact tasks. Eat The Frog requires us to push back against all of those distractions — both external (others interrupting us) and internal (us interrupting ourselves) — and prioritize the actions that will actually bring us closer to our goals."
    }
];

useEffect(() =>{
        const questions = questi.map((question) => ({
          ...question,
          answers:[question.correct_answer, ...question.incorrect_answers],
          comment:question.comment
        }))
        setQuestions(questions);
  },[])

  const handleAnswer = (answer) => {
    if(!showAnswers){
      if(answer === questions[currentIndex].correct_answer){
        setScore(score+1);
      }
    }
    setShowAnswers(true);
  }

  const handleComment = (comment) => {
    setShowComment(true);
  }

  const handleNextQuestion = () => {
    setCurrentIndex(currentIndex+1);
    setShowAnswers(false);
  }

  const restartQuiz = () => {
    setScore(0);
    setCurrentIndex(0);
    setShowAnswers(false);
  };


  const history = useHistory();
	const endQuiz = () => {
		history.push("/");
	}

  const length = questions.length;

  return ( questions.length > 0 ? (

    <div className="container">
      {currentIndex >= questions.length ? (
        <Results endQuiz={endQuiz} restartQuiz={restartQuiz} score={score} length={length}/>
      ): (<Questionaire currentIndex={currentIndex} headline={headline} handleAnswer={handleAnswer} handleComment={handleComment}
        showAnswers={showAnswers}
        showComment={showComment}
        handleNextQuestion={handleNextQuestion}
        data={questions[currentIndex]}/>)}
      
    </div>

  ) : <div className="container">Loading...</div>
    
  );
}

export default DayTwoPomodoro;
