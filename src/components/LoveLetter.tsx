"use client";
import { motion } from "framer-motion";
import { Typography, Paper } from "@mui/material";

const LoveLetter = () => {
  const letter =
    "My dearest, AJISAFE SIMILEOLUWA\n\nOn this special day, I want to express how much you mean to me. Your love fills my heart with joy and warmth. Every moment with you is a treasure, and I'm grateful for your presence in my life. You are my best friend, my soulmate, and my everything. I love you more than words can say.\n\nYour Love,";

  return (
    <Paper elevation={3} className="p-6 mb-8 bg-pink-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography variant="body1" className="love-text whitespace-pre-line">
          {letter.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.03 }}
            >
              {char}
            </motion.span>
          ))}
        </Typography>
      </motion.div>
    </Paper>
  );
};

export default LoveLetter;
