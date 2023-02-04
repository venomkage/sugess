import React from "react";

type ShowCardProps = {
  name: string;
  platform: string;
  ratings: number;
  image: string;
};

export default function ShowCard({
  name,
  platform,
  ratings,
  image,
}: ShowCardProps): JSX.Element {
  return (
    <div className="bg-teal-900 xl:w-11/12 lg:w-2/3 md:w-2/3 w-10/12 rounded overflow-hidden shadow-lg justify-self-center">
      <div className="w-full h-4/5 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-500 cursor-pointer"
          src={image}
          alt={name}
        />
      </div>
      <div className=" h-1/5 px-6 py-4 text-white">
        <div className="font-bold text-xl mb-2">{name}</div>
      </div>
    </div>
  );
}
