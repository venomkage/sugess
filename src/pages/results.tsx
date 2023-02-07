import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ShowCard from "../Components/ShowCard";
import Link from "next/link";
import { motion } from "framer-motion";

const Data = [
  {
    original_title: "Peaky Blinders",
    plat: "Netflix",
    vote_average: 5,
    poster_path:
      "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQSnpMqmsi5f-eRKRfOZ-0sz3bqayoVJHBBwxR__w96hI3iqrLAlQca17pZx_-lNPTsOv12DpbnN6GywwBDOC06oonx5lisMXULWwNywctuz_Jn4tH4EIbcFHOofQJ0dpx7z7o5ho0HtfDulSquyV_lCF7CQ.jpg?r=d1b",
  },
  {
    original_title: "Breaking Bad",
    plat: "Netflix",
    vote_average: 3,
    poster_path:
      "https://www.themoviedb.org/t/p/w1280/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  },
  {
    original_title: "Money Heist",
    plat: "Netflix",
    vote_average: 5,
    poster_path:
      "https://images.pexels.com/photos/5749881/pexels-photo-5749881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

function getRandomItem(arr: []) {
  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}

const fetching = async (choice: string | string[]) => {
  const data = await fetch(
    `${process.env.BASE_URL}/search/movie?api_key=${process.env.API_KEY}&language=en-US&query=${choice}&page=1&include_adult=false`
  );
  const res = await data.json();

  return getRandomItem(res.results);
};

export default function Results(): JSX.Element {
  const router = useRouter();
  const { fChoice, sChoice, tChoice } = router.query;
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all([fetching(fChoice), fetching(sChoice), fetching(tChoice)]).then(
      (values) => {
        setData([...values]);
        console.log(values);
      }
    );
  }, []);

  return (
    <div className=" flex h-full w-full flex-col ">
      {/* <p>{`${arrayOne[0].original_title} ${arrayTwo[0].original_title} ${arrayThree[0].original_title}`}</p> */}

      <div className=" w-full grid gap-6 grid-cols-fluid justify-items-center py-3 ">
        {data.map((item, index) => {
          return (
            <ShowCard
              key={`${item.vote_average}${item.original_title}`}
              name={item.original_title}
              releaseDate={item.release_date}
              ratings={item.vote_average}
              image={item.poster_path}
              delay={0.1 * index}
            />
          );
        })}
      </div>
      <Link href={"/"} className="w-full flex justify-center">
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
          className="bg-teal-900 text-white h-10 rounded w-2/3 "
        >
          Go Back
        </motion.button>
      </Link>
    </div>
  );
}
