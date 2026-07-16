import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function Quiz({
  quiz,
  score,
  setScore,
  wrongAnswers,
  setWrongAnswers,
  onFinish,
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [correct, setCorrect] = useState(false);

  if (!quiz || quiz.length === 0) {
    return (
      <div className="text-center text-white text-2xl">
        No Quiz Found
      </div>
    );
  }

  const question = quiz[current];

  const handleSubmit = () => {
    if (!selected) return;

    const isCorrect = selected === question.answer;

    setCorrect(isCorrect);
    setSubmitted(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
    } else {
      setWrongAnswers((prev) => [
        ...prev,
        {
          ...question,
          userAnswer: selected,
        },
      ]);
    }
  };

  const nextQuestion = () => {
    if (current + 1 === quiz.length) {
      onFinish();
      return;
    }

    setCurrent(current + 1);
    setSelected("");
    setSubmitted(false);
    setCorrect(false);
  };

  return (
    <div className="max-w-3xl mx-auto">

      <div className="flex justify-between mb-6">
        <h2 className="text-3xl text-white font-bold">
          Quiz
        </h2>

        <span className="text-indigo-400 text-xl">
          Question {current + 1} / {quiz.length}
        </span>
      </div>

      {/* Progress */}

      <div className="w-full bg-slate-800 rounded-full h-3 mb-8">
        <div
          className="bg-indigo-500 h-3 rounded-full"
          style={{
            width: `${((current + 1) / quiz.length) * 100}%`,
          }}
        />
      </div>

      {/* Question */}

      <div className="glass rounded-3xl p-8">

        <h3 className="text-white text-2xl mb-8">
          {question.question}
        </h3>

        <div className="space-y-4">

          {question.options.map((option) => (

            <label
              key={option}
              className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer border transition

              ${
                selected === option
                  ? "border-indigo-500 bg-indigo-500/20"
                  : "border-slate-700 bg-slate-900"
              }
              `}
            >
              <input
                type="radio"
                name="option"
                value={option}
                disabled={submitted}
                checked={selected === option}
                onChange={(e) => setSelected(e.target.value)}
              />

              <span className="text-white">
                {option}
              </span>

            </label>

          ))}

        </div>

        {!submitted ? (

          <button
            onClick={handleSubmit}
            className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-xl"
          >
            Submit
          </button>

        ) : (

          <div className="mt-8">

            {correct ? (

              <div className="text-green-400 flex items-center gap-3 text-xl">

                <CheckCircle />

                Correct!

              </div>

            ) : (

              <div>

                <div className="text-red-400 flex items-center gap-3 text-xl">

                  <XCircle />

                  Wrong

                </div>

                <div className="text-green-400 mt-3">
                  Correct Answer:
                  <strong> {question.answer}</strong>
                </div>

              </div>

            )}

            <button
              onClick={nextQuestion}
              className="mt-8 bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl"
            >
              {current + 1 === quiz.length
                ? "Finish Quiz"
                : "Next Question"}
            </button>

          </div>

        )}

      </div>

    </div>
  );
}