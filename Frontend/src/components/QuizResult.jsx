import { Trophy, RotateCcw, CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function QuizResult({
  score,
  total,
  wrongAnswers,
  setActiveTab,
}) {
  const percentage = Math.round((score / total) * 100);

  const getStars = () => {
    if (percentage >= 90) return "⭐⭐⭐⭐⭐";
    if (percentage >= 80) return "⭐⭐⭐⭐☆";
    if (percentage >= 60) return "⭐⭐⭐☆☆";
    if (percentage >= 40) return "⭐⭐☆☆☆";
    return "⭐☆☆☆☆";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-3xl mx-auto"
    >
      <div className="glass rounded-3xl p-10 text-center">

        <Trophy
          size={90}
          className="mx-auto text-yellow-400 mb-6"
        />

        <h1 className="text-5xl font-bold text-white">
          Quiz Completed!
        </h1>

        <p className="text-gray-400 mt-3">
          Here's your performance
        </p>

        <div className="text-7xl font-bold text-indigo-400 mt-8">
          {score}
          <span className="text-white text-4xl">
            {" "}
            / {total}
          </span>
        </div>

        <div className="text-4xl mt-5">
          {getStars()}
        </div>

        <div className="text-2xl text-green-400 mt-4">
          {percentage}% Accuracy
        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 gap-6 mt-10">

          <div className="bg-slate-900 rounded-2xl p-6">

            <CheckCircle
              className="mx-auto text-green-400"
              size={40}
            />

            <h3 className="text-white text-3xl mt-4">
              {score}
            </h3>

            <p className="text-gray-400">
              Correct
            </p>

          </div>

          <div className="bg-slate-900 rounded-2xl p-6">

            <XCircle
              className="mx-auto text-red-400"
              size={40}
            />

            <h3 className="text-white text-3xl mt-4">
              {wrongAnswers.length}
            </h3>

            <p className="text-gray-400">
              Wrong
            </p>

          </div>

        </div>

        <button
          onClick={() => setActiveTab("Wrong Answers")}
          className="mt-10 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-xl text-white flex items-center gap-3 mx-auto"
        >
          <RotateCcw />
          Retest Wrong Answers
        </button>

      </div>
    </motion.div>
  );
}