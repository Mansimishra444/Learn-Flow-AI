import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Download } from "lucide-react";
import { generatePDF } from "../components/generatePDF";
import Sidebar from "../components/Sidebar";
import ProgressBar from "../components/ProgressBar";
import FlashCard from "../components/Flashcard";
import Quiz from "../components/Quiz";
import QuizResult from "../components/QuizResult";
import WrongAnswers from "../components/WrongAnswers";
export default function Study() {

  const { state } = useLocation();

  const [activeTab, setActiveTab] = useState("Flashcards");
const [score, setScore] = useState(0);

const [wrongAnswers, setWrongAnswers] = useState([]);

const [quizFinished, setQuizFinished] = useState(false);
  if (!state) {

    return (

      <div className="min-h-screen bg-slate-950 flex justify-center items-center text-white">

        No Study Data

      </div>

    );

  }

  const flashcards = state.flashcards || [];
  console.log("Study State:", state);
console.log("Flashcards:", flashcards);
  const quiz = state.quiz || [];

  return (

    <div className="flex bg-slate-950 min-h-screen">

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="flex-1 p-10">

        <h1 className="text-4xl text-white font-bold">

          {activeTab}

        </h1>

        <p className="text-gray-400 mt-2">

          AI Generated Study Material

        </p>

        <div className="mt-8">
 <button
        onClick={() =>
            generatePDF({
                topic: "Java Programming",
                summary: state.summary || "AI Generated Notes",
                flashcards,
                quiz,
            })
        }
        className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 rounded-xl text-white flex items-center gap-3 hover:scale-105 transition"
    >
        <Download size={20} />

        Download PDF

    </button>
          <ProgressBar
            current={0}
            total={
              activeTab === "Flashcards"
                ? flashcards.length
                : quiz.length
            }
          />

        </div>

        <div className="glass rounded-3xl p-8 min-h-[500px]">

          {activeTab === "Flashcards" && (

            <div>

              <h2 className="text-white text-2xl mb-6">

                {flashcards.length} Flashcards Generated

              </h2>

              <FlashCard flashcards={flashcards} />

            </div>

          )}

          {activeTab === "Quiz" && (

  quizFinished ? (

    <QuizResult
      score={score}
      total={quiz.length}
      wrongAnswers={wrongAnswers}
      setActiveTab={setActiveTab}
    />

  ) : (

    <Quiz
      quiz={quiz}
      score={score}
      setScore={setScore}
      wrongAnswers={wrongAnswers}
      setWrongAnswers={setWrongAnswers}
      onFinish={() => setQuizFinished(true)}
    />

  )

)}

          {activeTab === "Wrong Answers" && (
  <WrongAnswers
    wrongAnswers={wrongAnswers}
  />
)}

        </div>

      </div>

    </div>

  );

}