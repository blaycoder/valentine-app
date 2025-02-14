import { useState } from 'react'
import './App.css'
import { motion } from "framer-motion";
import { Typography, Container, Box } from "@mui/material";
import Header from "./components/Header";
import LoveLetter from "./components/LoveLetter";
import PhotoGallery from "./components/PhotoGallery";
import FloatingHearts from "./components/FloatingHearts";
import Footer from "./components/Footer";
import AudioPlayer from "./components/AudioPlayer";
function App() {
 const [showLetter, setShowLetter] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100">
        <Header />
        <Container maxWidth="md" className="py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h2" className="text-center !my-5 text-red-600 mb-8">
              Happy Valentine's Day, My Love!
            </Typography>
            <Box className="text-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
                onClick={() => setShowLetter(!showLetter)}
              >
                {showLetter ? "Hide Love Letter" : "Read Love Letter"}
              </motion.button>
            </Box>
            {showLetter && <LoveLetter />}
            <PhotoGallery />
          </motion.div>
        </Container>
        <FloatingHearts />
        <Footer />
        <AudioPlayer />
      </div>
    </>
  );
}

export default App
