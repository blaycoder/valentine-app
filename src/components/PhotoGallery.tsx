"use client";
import { motion } from "framer-motion";
import { ImageList, ImageListItem } from "@mui/material";

const PhotoGallery = () => {
  const images = [
    "/images/img1.jpeg",
    "/images/img2.jpeg",
    "/images/img3.jpeg",
    "/images/img4.jpeg",
    "/images/img5.jpeg",
    "/images/img6.jpeg",
    "/images/img7.jpeg",
    "/images/img8.jpeg",
    "/images/img9.jpeg",
    "/images/img10.jpeg",
    "/images/img11.jpeg",
    "/images/img12.jpeg",
    "/images/img13.jpeg",
    "/images/img14.jpeg",
    "/images/img15.jpeg",
    "/images/img16.jpeg",
    "/images/img17.jpeg",
    "/images/img18.jpeg",
    "/images/img19.jpeg",
  ];

  return (
    <ImageList variant="masonry" cols={3} gap={8}>
      {images.map((img, index) => (
        <ImageListItem key={index}>
          <motion.img
            src={img || "/placeholder.svg"}
            alt={`Couple photo ${index + 1}`}
            loading="lazy"
            className="rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default PhotoGallery;
