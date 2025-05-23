import { motion } from "framer-motion";

const Confetti = () => {
  const confettiNum = 100;
  const colors = ["#FF5E7E", "#00D2FF", "#FFC371", "#9C27B0", "#4CAF50"];

  return (
    <div className="fixed inset-0 pointer-events-none">
      {Array.from({ length: confettiNum }).map((x , i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          initial={{
            top: "-10%",
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
          }}
          animate={{
            top: "100%",
            left: `${Math.random() * 100}%`,
            rotate: Math.random() * 360,
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            ease: "easeOut",
            delay: Math.random() * 0.5,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
