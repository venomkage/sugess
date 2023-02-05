import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function InitForm(): JSX.Element {
  const router = useRouter();

  const [showAlert, setShowAlert] = useState(false);

  const c1 = useRef<HTMLInputElement>(null!);
  const c2 = useRef<HTMLInputElement>(null!);
  const c3 = useRef<HTMLInputElement>(null!);

  useEffect(() => {
    if (showAlert)
      setTimeout(() => {
        setShowAlert(false);
      }, 1500);
  }, [showAlert]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      c1.current.value == "" ||
      c2.current.value == "" ||
      c3.current.value == ""
    ) {
      // setSugges(false);
      setShowAlert(true);
    } else {
      // setSugges(true);
      router.push({
        pathname: "/results",
        query: {
          fChoice: c1.current.value,
          sChoice: c2.current.value,
          tChoice: c3.current.value,
        },
      });
    }
  };

  return (
    <div className=" h-screen flex flex-col items-center pt-10">
      <h1 className="mb-10 dark:text-white select-none">
        Enter your choices to get 3 suggestions
      </h1>
      <form
        onSubmit={onSubmit}
        className="form flex flex-col  h-1/2 w-2/3 justify-evenly"
      >
        <input
          ref={c1}
          type="text"
          id=""
          placeholder="Choice 1"
          className="border-teal-900 rounded border h-10 px-3 focus:outline-none"
        />
        <input
          ref={c2}
          type="text"
          id=""
          placeholder="Choice 2"
          className="border-teal-900 rounded border h-10 px-3 focus:outline-none"
        />
        <input
          ref={c3}
          type="text"
          id=""
          placeholder="Choice 3"
          className="border-teal-900 rounded border h-10 px-3 focus:outline-none"
        />
        <button className="bg-teal-900 text-white h-10 rounded " type="submit">
          Sugges
        </button>
      </form>

      {showAlert && (
        <div
          className="w-2/3 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold mr-3">Psych!</strong>
          <span className="block sm:inline">
            That&apos;s the wronnggg number - I mean, fill all the fields
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setShowAlert(false)}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}
