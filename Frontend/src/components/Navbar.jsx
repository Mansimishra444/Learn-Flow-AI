import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: .7 }}
      className="w-full flex justify-between items-center px-12 py-6 absolute top-0 z-50"
    >
      <div className="flex items-center gap-3">

        <div className="w-12 h-12 rounded-full bg-indigo-600 flex justify-center items-center">

          <GraduationCap color="white" size={28} />

        </div>

        <h2 className="text-white text-2xl font-bold">

            LearnFlow AI

        </h2>

      </div>

      <div className="hidden md:flex gap-8 text-white">

 

</div>

    </motion.nav>
  );
}