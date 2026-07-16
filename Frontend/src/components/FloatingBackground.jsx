import { motion } from "framer-motion";

const circles = [
  {
    size: 250,
    left: "5%",
    delay: 0
  },
  {
    size: 170,
    left: "30%",
    delay: 2
  },
  {
    size: 320,
    left: "60%",
    delay: 4
  },
  {
    size: 150,
    left: "82%",
    delay: 1
  }
];

export default function FloatingBackground() {

  return (

    <div className="absolute inset-0 overflow-hidden">

      {circles.map((circle,index)=>(

        <motion.div

        key={index}

        className="absolute rounded-full blur-3xl"

        style={{

          width:circle.size,

          height:circle.size,

          left:circle.left,

          bottom:-150,

          background:

          "linear-gradient(135deg,#4f46e5,#8b5cf6)"

        }}

        animate={{

          y:[0,-900],

          x:[0,50,-40,20]

        }}

        transition={{

          repeat:Infinity,

          duration:18,

          delay:circle.delay

        }}

        />

      ))}

    </div>

  );

}