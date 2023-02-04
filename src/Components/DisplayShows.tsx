import React, { MutableRefObject } from "react";
import ShowCard from "./ShowCard";

type DisplayShowProps = {
  setSuggess: React.Dispatch<React.SetStateAction<Boolean>>;
  c1: MutableRefObject<HTMLInputElement>;
  c2: MutableRefObject<HTMLInputElement>;
  c3: MutableRefObject<HTMLInputElement>;
};

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

export default function DisplayShows({
  setSuggess,
  c1,
  c2,
  c3,
}: DisplayShowProps) {
  return (
    <div className=" flex flex-col items-center justify-center w-screen text-center py-6  ">
      {/* <p>{`${c1.current.value} ${c2.current.value} ${c3.current.value}`}</p> */}

      <div className="container grid justify-center xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-2 mx-auto my-3 py-3">
        {Data.map((item) => {
          return (
            <ShowCard
              name={item.name}
              platform={item.plat}
              ratings={item.ratings}
              image={item.image}
            />
          );
        })}
      </div>

      <button
        className="bg-teal-900 text-white h-10 rounded w-1/2"
        onClick={() => setSuggess(false)}
      >
        Go Back
      </button>
    </div>
  );
}
