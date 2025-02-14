"use client";

import { useState, useEffect, useRef } from "react";
import { IconButton, Tooltip } from "@mui/material";
import { VolumeUp, VolumeOff } from "@mui/icons-material";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio("../src/assets/DOTTi_The_Deity_-_Forever_Sweet.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.play();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Tooltip title={isPlaying ? "Pause Music" : "Play Music"}>
        <IconButton
          onClick={togglePlay}
          className="bg-white bg-opacity-50 hover:bg-opacity-75 transition-all duration-300"
        >
          {isPlaying ? (
            <VolumeUp className="text-red-500" />
          ) : (
            <VolumeOff className="text-red-500" />
          )}
        </IconButton>
      </Tooltip>
    </div>
  );
};

export default AudioPlayer;
