import { useRouter } from "next/router";
import React from "react";
import ShowCard from "../Components/ShowCard";
import Link from "next/link";
import { motion } from "framer-motion";

const Data = [
  {
    name: "Peaky Blinders",
    plat: "Netflix",
    ratings: 5,
    image:
      "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQSnpMqmsi5f-eRKRfOZ-0sz3bqayoVJHBBwxR__w96hI3iqrLAlQca17pZx_-lNPTsOv12DpbnN6GywwBDOC06oonx5lisMXULWwNywctuz_Jn4tH4EIbcFHOofQJ0dpx7z7o5ho0HtfDulSquyV_lCF7CQ.jpg?r=d1b",
  },
  {
    name: "Breaking Bad",
    plat: "Netflix",
    ratings: 3,
    image: "https://www.themoviedb.org/t/p/w1280/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    name: "Money Heist",
    plat: "Netflix",
    ratings: 5,
    image:
      "https://images.pexels.com/photos/5749881/pexels-photo-5749881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Results(): JSX.Element {
  const router = useRouter();
  const { fChoice, sChoice, tChoice } = router.query;

  return (
    <div className=" flex flex-col items-center  w-screen text-center   ">
      {/* <p>{`${fChoice} ${sChoice} ${tChoice}`}</p> */}

      <div className=" pt-3 container grid justify-center xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto py-0 overflow-hidden">
        {Data.map((item, index) => {
          return (
            <ShowCard
              key={`${item.ratings}${item.name}`}
              name={item.name}
              platform={item.plat}
              ratings={item.ratings}
              image={item.image}
              delay={0.1 * index}
            />
          );
        })}
        <Link
          href={"/"}
          className="w-1/2 absolute bottom-1 justify-self-center "
        >
          <motion.button
            initial="down"
            animate="up"
            variants={{
              down: {
                translateY: "100%",
                opacity: 0,
              },
              up: {
                translateY: "0%",
                opacity: 1,
                transition: {
                  delay: 0.3,
                },
              },
            }}
            className="bg-teal-900 text-white h-10 rounded w-full"
          >
            Go Back
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
