import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type ShowCardProps = {
  name: string;
  releaseDate?: string;
  ratings: number;
  image: string;
  delay: number;
};

export default function ShowCard({
  name,
  releaseDate,
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
      className="bg-teal-900 rounded overflow-hidden w-3/4"
    >
      <div className=" w-full h-4/5 overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original${image}`}
          className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
          width={100}
          height={100}
          alt={name}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center h-1/5 py-3 text-white">
        <div className="bg-[#00000073] w-full font-semibold text-xl mb-2">
          {name}
        </div>
        <div className="font-medium text-sm mb-2">Ratings: {ratings}</div>
        <div className="font-medium text-sm mb-2">
          Year released: {releaseDate}
        </div>
      </div>
    </motion.div>
  );
}
