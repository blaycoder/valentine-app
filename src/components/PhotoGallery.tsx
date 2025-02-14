"use client";
import { motion } from "framer-motion";
import { ImageList, ImageListItem } from "@mui/material";

const PhotoGallery = () => {
  const images = [
    "../src/assets/images/img1.jpeg",
    "../src/assets/images/img2.jpeg",
    "../src/assets/images/img3.jpeg",
    "../src/assets/images/img4.jpeg",
    "../src/assets/images/img5.jpeg",
    "../src/assets/images/img6.jpeg",
    "../src/assets/images/img7.jpeg",
    "../src/assets/images/img8.jpeg",
    "../src/assets/images/img9.jpeg",
    "../src/assets/images/img10.jpeg",
    "../src/assets/images/img11.jpeg",
    "../src/assets/images/img12.jpeg",
    "../src/assets/images/img13.jpeg",
    "../src/assets/images/img14.jpeg",
    "../src/assets/images/img15.jpeg",
    "../src/assets/images/img16.jpeg",
    "../src/assets/images/img17.jpeg",
    "../src/assets/images/img18.jpeg",
    "../src/assets/images/img19.jpeg",
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
