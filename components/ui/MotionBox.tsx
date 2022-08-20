import React from "react";
import { motion } from "framer-motion";

type Props = {
  children?: React.ReactNode;
};
const MotionBox = ({ children }: Props) => {


  return (
    <motion.div
      initial={{ opacity: 0, y:-200}}
      animate={{ opacity: 1 , y:0}}
      transition={{ duration: 2, delay:0.5 }}
      className="z-10 dev_somelement top-60"
    >
      {children}
    </motion.div>
  );
};
export default MotionBox;
