import React, { MutableRefObject, useRef } from "react";

type InitFormProps = {
  c1: MutableRefObject<HTMLInputElement>;
  c2: MutableRefObject<HTMLInputElement>;
  c3: MutableRefObject<HTMLInputElement>;
  onSuggessClick: () => void;
  setSuggess: React.Dispatch<React.SetStateAction<Boolean>>;
};

export default function InitForm({
  c1,
  c2,
  c3,
  onSuggessClick,
  setSuggess,
}: InitFormProps): JSX.Element {
  return (
    <div className=" h-screen flex flex-col items-center pt-10">
      <h1 className="mb-10 dark:text-white select-none">
        Enter your choices to get a suggestion
      </h1>
      <div className="form flex flex-col  h-1/2 w-2/3 justify-evenly">
        <input
          ref={c1}
          type="text"
          id=""
          placeholder="Choice 1"
          className="border-teal-900 rounded border h-10 px-3"
        />
        <input
          ref={c2}
          type="text"
          id=""
          placeholder="Choice 2"
          className="border-teal-900 rounded border h-10 px-3"
        />
        <input
          ref={c3}
          type="text"
          id=""
          placeholder="Choice 3"
          className="border-teal-900 rounded border h-10 px-3"
        />
        <button
          className="bg-teal-900 text-white h-10 rounded "
          onClick={onSuggessClick}
        >
          Sugges
        </button>
      </div>
    </div>
  );
}
