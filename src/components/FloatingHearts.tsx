"use client";
import { motion } from "framer-motion";
import FavoriteIcon from "@mui/icons-material/Favorite";

const FloatingHearts = () => {
  const hearts = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-red-500"
          initial={{
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
          }}
          animate={{
            y: -100,
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
            },
          }}
        >
          <FavoriteIcon />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
