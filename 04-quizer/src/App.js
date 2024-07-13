import { useState } from "react";

const quizData = [
  {
    id: 1,
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    question: "Who wrote 'To Kill a Mockingbird'?",
    choices: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: "Harper Lee",
  },
  {
    id: 3,
    question: "What is the largest planet in our solar system?",
    choices: ["Earth", "Jupiter", "Mars", "Saturn"],
    correctAnswer: "Jupiter",
  },
  {
    id: 4,
    question: "Which element has the chemical symbol 'O'?",
    choices: ["Gold", "Oxygen", "Osmium", "Oxide"],
    correctAnswer: "Oxygen",
  },
  {
    id: 5,
    question: "What is the boiling point of water?",
    choices: ["90°C", "100°C", "110°C", "120°C"],
    correctAnswer: "100°C",
  },
  {
    id: 6,
    question: "Who painted the Mona Lisa?",
    choices: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet",
    ],
    correctAnswer: "Leonardo da Vinci",
  },
  {
    id: 7,
    question: "What is the hardest natural substance on Earth?",
    choices: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    id: 8,
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Venus", "Jupiter"],
    correctAnswer: "Mars",
  },
  {
    id: 9,
    question: "What is the smallest prime number?",
    choices: ["0", "1", "2", "3"],
    correctAnswer: "2",
  },
  {
    id: 10,
    question: "Which country hosted the 2016 Summer Olympics?",
    choices: ["China", "Brazil", "USA", "UK"],
    correctAnswer: "Brazil",
  },
  {
    id: 11,
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    correctAnswer: "Blue Whale",
  },
  {
    id: 12,
    question: "What is the square root of 64?",
    choices: ["6", "7", "8", "9"],
    correctAnswer: "8",
  },
  {
    id: 13,
    question: "Who is the author of the Harry Potter series?",
    choices: [
      "J.K. Rowling",
      "J.R.R. Tolkien",
      "George R.R. Martin",
      "Stephen King",
    ],
    correctAnswer: "J.K. Rowling",
  },
  {
    id: 14,
    question: "What is the capital city of Japan?",
    choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    correctAnswer: "Tokyo",
  },
  {
    id: 15,
    question: "What is the chemical formula for water?",
    choices: ["H2O", "CO2", "O2", "N2"],
    correctAnswer: "H2O",
  },
  {
    id: 16,
    question: "Which planet is closest to the sun?",
    choices: ["Earth", "Venus", "Mercury", "Mars"],
    correctAnswer: "Mercury",
  },
  {
    id: 17,
    question: "Who was the first president of the United States?",
    choices: [
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
    ],
    correctAnswer: "George Washington",
  },
  {
    id: 18,
    question: "What is the longest river in the world?",
    choices: ["Nile", "Amazon", "Yangtze", "Mississippi"],
    correctAnswer: "Nile",
  },
  {
    id: 19,
    question: "Which ocean is the largest?",
    choices: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correctAnswer: "Pacific",
  },
  {
    id: 20,
    question: "Who discovered penicillin?",
    choices: [
      "Marie Curie",
      "Albert Einstein",
      "Alexander Fleming",
      "Isaac Newton",
    ],
    correctAnswer: "Alexander Fleming",
  },
];

export default function App() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = quizData[currentQuestionId];

  function setNextQuestion() {
    if (currentQuestionId === quizData.length - 1) return;
    setCurrentQuestionId((current) => ++current);
    setUserAnswer(null);
  }

  function checkUserAnswer(answer) {
    if (userAnswer) return;

    setUserAnswer(answer);

    const isCorrect = currentQuestion.correctAnswer === answer;

    // Update Score
    if (isCorrect) setScore((score) => score + 10);
  }

  return (
    <div className="container">
      <div className="wrapper">
        <div>
          <h1>Score: {score}</h1>
        </div>
        <div className="question-wrapper">
          <Question question={currentQuestion.question} />
          <Choices
            choices={currentQuestion.choices}
            correctAnswer={currentQuestion.correctAnswer}
            userAnswer={userAnswer}
            handleCheckUserAnswer={checkUserAnswer}
          />
        </div>

        {userAnswer && (
          <button className="btn" onClick={setNextQuestion}>
            Next Question
          </button>
        )}
      </div>
    </div>
  );
}

// Components

function Question({ question }) {
  return <h2 className="quesstion">{question}</h2>;
}

function Choices({
  choices,
  correctAnswer,
  userAnswer,
  handleCheckUserAnswer,
}) {
  function isThatTheCorrectChoice(choice) {
    if (!userAnswer) return "";

    if (userAnswer === choice) {
      return userAnswer === correctAnswer ? true : false;
    }

    return false;
  }

  function choiceClass(choice, isCorrectChoice) {
    if (isCorrectChoice === "") return "";
    if (isCorrectChoice) return "correct";
    return choice === correctAnswer ? "correct" : "wrong";
  }

  return (
    <ul
      className={`choices-wrapper ${
        userAnswer ? (userAnswer === correctAnswer ? "welldone" : "nope") : ""
      }`}
    >
      {choices.map((choice, i) => (
        <li
          className={`choice ${choiceClass(
            choice,
            isThatTheCorrectChoice(choice)
          )}`}
          key={i}
          onClick={(e) => handleCheckUserAnswer(e.target.textContent)}
        >
          {choice}
        </li>
      ))}
    </ul>
  );
}
