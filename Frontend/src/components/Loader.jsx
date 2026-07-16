import { motion } from "framer-motion";
import { Brain } from "lucide-react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-sm flex flex-col justify-center items-center z-50">

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      >
        <Brain size={70} className="text-indigo-400" />
      </motion.div>

      <motion.h2
        className="text-white text-3xl font-bold mt-6"
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
      >
        AI is studying your notes...
      </motion.h2>

      <p className="text-gray-400 mt-3">
        Generating Flashcards & Quiz
      </p>
    </div>
  );
}