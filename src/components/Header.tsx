"use client";
import { motion } from "framer-motion";
import { AppBar, Toolbar, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Header = () => {
  return (
    <AppBar position="static" className="bg-red-500">
      <Toolbar className="justify-between bg-red-700">
        <Typography variant="h6" className="text-white">
          My Valentine
        </Typography>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          <FavoriteIcon className="text-white" />
        </motion.div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
