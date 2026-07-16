import { useState } from "react";

export default function WrongAnswers({ wrongAnswers }) {

  const [current, setCurrent] = useState(0);

  if (wrongAnswers.length === 0) {
    return (
      <div className="text-center text-3xl text-green-400">
        🎉 No Wrong Answers!
      </div>
    );
  }

  const question = wrongAnswers[current];

  return (
    <div className="max-w-4xl mx-auto">

      <h1 className="text-4xl text-white font-bold mb-8">
        Wrong Answers
      </h1>

      <div className="glass rounded-3xl p-8">

        <h2 className="text-2xl text-white mb-6">
          {question.question}
        </h2>

        <div className="mb-5">

          <h3 className="text-red-400 font-bold">
            Your Answer
          </h3>

          <p className="text-white mt-2">
            {question.userAnswer}
          </p>

        </div>

        <div>

          <h3 className="text-green-400 font-bold">
            Correct Answer
          </h3>

          <p className="text-white mt-2">
            {question.answer}
          </p>

        </div>

        <div className="flex justify-between mt-10">

          <button
            disabled={current === 0}
            onClick={() => setCurrent(current - 1)}
            className="bg-slate-700 px-6 py-3 rounded-xl text-white disabled:opacity-40"
          >
            Previous
          </button>

          <span className="text-indigo-400 text-xl">
            {current + 1} / {wrongAnswers.length}
          </span>

          <button
            disabled={current === wrongAnswers.length - 1}
            onClick={() => setCurrent(current + 1)}
            className="bg-indigo-600 px-6 py-3 rounded-xl text-white disabled:opacity-40"
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
}