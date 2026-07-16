import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center pt-36"
    >
      <div className="inline-block px-5 py-2 rounded-full glass text-white text-sm mb-8">
        🚀 AI Powered Learning
      </div>

      <h1 className="text-5xl md:text-7xl font-black leading-tight">

        <span className="text-white">

          Turn Notes into

        </span>

        <br />

        <span className="gradient-text">

          Flashcards & Quizzes

        </span>

      </h1>

      <p className="text-gray-300 mt-8 text-lg md:text-xl max-w-3xl mx-auto leading-8">

        Paste your notes or enter a topic and let AI create
        interactive flashcards and quizzes in seconds.

      </p>

    </motion.section>
  );
}