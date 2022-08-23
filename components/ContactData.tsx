import React from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import { it } from "node:test";

interface IContactData {
  id: number;
  text: string;
  type: string;
  data: string;
  icon: string;
}

interface IInfo {
  props: IContactData[];
}

const itemVariants = {
  visible: (i: number) => {
    return {
      opacity: 1,    
      transition: {
        delay: i * 0.5,
        duration:0.5,


      },
    };
  },
  hidden: {
   
    opacity: 0,
  },
};

const ContactData: React.FC<IInfo> = ({ props }: IInfo) => {
  return (
    <div className=" grid">
      {props.map((item, index) => {
        
        return (
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            custom={item.id}
            key={index}
            className="card"
          >
            <div className="bg-sky-500 text-center pt-10 pb-2 ">
              <Image src={item.icon} alt={item.type} width={32} height={32} />
            </div>

            <div className="bg-sky-500 text-white text-center pt-2 pb-10">
              <h4 className="text-2xl">{item.text}</h4>
            </div>

            <div className="bg-white text-center py-6 ">
              {item.type==="telephone"&&<p><a href={`tel:+${item.data}`}>{item.data}</a></p>}
              {item.type==="adress"&&<div>{item.data}</div>}
              {item.type==="email"&&<div>{item.data}</div>}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ContactData;
