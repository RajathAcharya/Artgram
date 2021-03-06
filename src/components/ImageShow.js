import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";

const ImageShow = ({ setSelectedImage }) => {
  const { docs } = useFirestore("images");
  return (
    <div className="image-flex">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="image-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImage(doc.url)}
          >
            <motion.img
              src={doc.url}
              alt="My collection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageShow;
