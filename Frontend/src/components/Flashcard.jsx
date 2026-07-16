import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

export default function Flashcard({ flashcards }) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (!flashcards || flashcards.length === 0) {
    return (
      <div className="text-center text-gray-400 text-xl">
        No Flashcards Found
      </div>
    );
  }

  const card = flashcards[index];

  const nextCard = () => {
    if (index < flashcards.length - 1) {
      setIndex(index + 1);
      setFlipped(false);
    }
  };

  const prevCard = () => {
    if (index > 0) {
      setIndex(index - 1);
      setFlipped(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">

      <div className="flex justify-between w-full mb-6">

        <h2 className="text-3xl text-white font-bold">
          Flashcards
        </h2>

        <span className="text-indigo-400 text-xl">
          {index + 1} / {flashcards.length}
        </span>

      </div>

      {/* Progress */}

      <div className="w-full bg-slate-800 rounded-full h-3 mb-8">

        <motion.div
          initial={{ width: 0 }}
          animate={{
            width: `${((index + 1) / flashcards.length) * 100}%`,
          }}
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full"
        />

      </div>

      {/* Card */}

      <div
        className="perspective cursor-pointer"
        onClick={() => setFlipped(!flipped)}
      >

        <motion.div
          animate={{
            rotateY: flipped ? 180 : 0,
          }}
          transition={{
            duration: .6,
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
          className="relative w-[700px] h-[380px]"
        >

          {/* Front */}

          <div
            className="absolute w-full h-full rounded-3xl glass border border-indigo-500 p-10 flex flex-col justify-center items-center"
            style={{
              backfaceVisibility: "hidden",
            }}
          >

            <h3 className="text-indigo-400 mb-6 text-xl">
              Question
            </h3>

            <p className="text-white text-3xl text-center leading-relaxed">
              {card.question}
            </p>

            <div className="mt-10 flex items-center gap-3 text-gray-400">

              <RotateCcw />

              Click to Flip

            </div>

          </div>

          {/* Back */}

          <div
            className="absolute w-full h-full rounded-3xl bg-gradient-to-br from-indigo-700 to-purple-700 p-10 flex justify-center items-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >

            <div>

              <h3 className="text-white text-xl mb-6 text-center">
                Answer
              </h3>

              <p className="text-white text-3xl text-center leading-relaxed">
                {card.answer}
              </p>

            </div>

          </div>

        </motion.div>

      </div>

      {/* Buttons */}

      <div className="flex gap-6 mt-10">

        <button
          disabled={index === 0}
          onClick={prevCard}
          className="px-8 py-3 rounded-xl bg-slate-800 text-white disabled:opacity-40 hover:bg-slate-700 transition"
        >
          <ChevronLeft className="inline mr-2" />
          Previous
        </button>

        <button
          disabled={index === flashcards.length - 1}
          onClick={nextCard}
          className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white disabled:opacity-40 transition"
        >
          Next
          <ChevronRight className="inline ml-2" />
        </button>

      </div>

    </div>
  );
}