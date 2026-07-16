import { motion } from "framer-motion";

export default function ProgressBar({
  current,
  total,
}) {

  const percentage = (current / total) * 100;

  return (

    <div className="mb-8">

      <div className="flex justify-between mb-2">

        <span className="text-white">

          Progress

        </span>

        <span className="text-indigo-400">

          {current} / {total}

        </span>

      </div>

      <div className="h-3 rounded-full bg-slate-800">

        <motion.div

          initial={{ width: 0 }}

          animate={{
            width: `${percentage}%`,
          }}

          transition={{
            duration: .6,
          }}

          className="h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"

        />

      </div>

    </div>

  );

}