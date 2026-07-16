import { useState } from "react";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import Loader from "./Loader";

export default function GenerateForm() {
  const [notes, setNotes] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
const [difficulty, setDifficulty] = useState("Medium");
  const navigate = useNavigate();
  const [flashcardCount, setFlashcardCount] = useState(10);
const [quizCount, setQuizCount] = useState(10);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!notes.trim() && !topic.trim()) {
      alert("Please enter notes or topic.");
      return;
    }

    try {
      setLoading(true);

      const response =await api.post("/ai/generate", {
  text: notes || topic,
   difficulty,
   flashcardCount,
    quizCount,
});

      navigate("/study", {
        state: response.data,
      });

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Failed to generate study content."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}

      <motion.form
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        onSubmit={handleSubmit}
        className="glass rounded-3xl p-8 mt-14"
      >
        <label className="text-white font-semibold text-lg">
          Paste Notes
        </label>

        <textarea
          rows="7"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Paste your notes here..."
          className="w-full mt-3 rounded-xl bg-slate-900 border border-slate-700 text-white p-4 outline-none focus:border-indigo-500"
        />

        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-slate-600"></div>

          <span className="mx-4 text-gray-400">OR</span>

          <div className="flex-1 border-t border-slate-600"></div>
        </div>

        <label className="text-white font-semibold text-lg">
          Enter Topic
        </label>

        <input
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Example: React Hooks"
          className="w-full mt-3 rounded-xl bg-slate-900 border border-slate-700 text-white p-4 outline-none focus:border-indigo-500"
        />
<div className="mt-8">

  <label className="text-white font-semibold text-lg">
    Difficulty
  </label>

  <div className="flex gap-4 mt-4">

    {["Easy", "Medium", "Hard"].map((level) => (

      <button
        type="button"
        key={level}
        onClick={() => setDifficulty(level)}
        className={`px-6 py-3 rounded-xl transition-all duration-300
          ${
            difficulty === level
              ? "bg-indigo-600 text-white"
              : "bg-slate-800 text-gray-300 hover:bg-slate-700"
          }`}
      >
        {level}
      </button>

    ))}

  </div>

</div>
<div className="mt-8">

  <label className="text-white font-semibold text-lg">
    Number of Flashcards
  </label>

  <div className="flex gap-4 mt-4">

    {[5, 10, 15, 20].map((count) => (

      <button
        key={count}
        type="button"
        onClick={() => setFlashcardCount(count)}
        className={`px-6 py-3 rounded-xl transition-all duration-300
        ${
          flashcardCount === count
            ? "bg-indigo-600 text-white"
            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
        }`}
      >
        {count}
      </button>

    ))}

  </div>

</div>
<div className="mt-8">

  <label className="text-white font-semibold text-lg">
    Number of Quiz Questions
  </label>

  <div className="flex gap-4 mt-4">

    {[5, 10, 15, 20].map((count) => (

      <button
        key={count}
        type="button"
        onClick={() => setQuizCount(count)}
        className={`px-6 py-3 rounded-xl transition-all duration-300
        ${
          quizCount === count
            ? "bg-purple-600 text-white"
            : "bg-slate-800 text-gray-300 hover:bg-slate-700"
        }`}
      >
        {count}
      </button>

    ))}

  </div>

</div>
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
          type="submit"
          className="generate-btn flex justify-center items-center gap-3 mt-8 w-full text-white rounded-xl py-4 font-bold text-lg"
        >
          <Sparkles size={22} />
          Generate Study Set
        </motion.button>
      </motion.form>
    </>
  );
}