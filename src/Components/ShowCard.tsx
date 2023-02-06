import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type ShowCardProps = {
  name: string;
  platform: string;
  ratings: number;
  image: string;
  delay: number;
};

export default function ShowCard({
  name,
  platform,
  ratings,
  image,
  delay,
}: ShowCardProps): JSX.Element {
  return (
    <motion.div
      initial="down"
      animate="up"
      variants={{
        down: {
          translateY: "15%",
          opacity: 0,
        },
        up: {
          translateY: "0%",
          opacity: 1,
          transition: {
            delay: delay,
          },
        },
      }}
      className="h-3/4 bg-teal-900 xl:w-11/12 lg:w-2/3 md:w-2/3 w-10/12 rounded overflow-hidden shadow-lg justify-self-center"
    >
      <div className=" w-full h-4/5 overflow-hidden">
        <img
          src={image}
          className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
          alt={name}
        />
      </div>
      <div className=" h-1/5 px-6 py-0 text-white">
        <div className="font-bold text-xl mb-2">{name}</div>
        <div className="font-bold text-xl mb-2">{platform}</div>
        <div className="font-bold text-xl mb-2">Ratings: {ratings}</div>
      </div>
    </motion.div>
  );
}
