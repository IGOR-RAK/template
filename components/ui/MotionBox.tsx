import React from "react";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
};
const MotionBox = ({ children }: Props) => {
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y:-100}}
      animate={{ opacity: 1 , y:0}}
      transition={{ duration: 2 }}
      className="z-10 absolute left-80 top-80 text-sky-400 text-6xl"
    >
      {children}
    </motion.div>
  );
};
export default MotionBox;
