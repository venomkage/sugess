import { useState } from "react";
import "../styles/globals.css";
import { BsFillMoonStarsFill, BsQuestionCircleFill } from "react-icons/bs";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-white flex flex-col dark:bg-gray-900">
        <section>
          <nav className="py-10 px-10 flex justify-between bg-teal-900">
            <h1 className="text-xl font-bold font-sans text-white cursor-pointer">
              <Link href={"/"}>Sugges</Link>
            </h1>
            <ul className="flex items-center">
              <li className="cursor-pointer text-2xl">
                <BsFillMoonStarsFill
                  color="white"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li className="cursor-pointer text-2xl ml-9">
                <BsQuestionCircleFill color="white" />
              </li>
            </ul>
          </nav>
        </section>
        <Component {...pageProps} />
      </main>
    </div>
  );
}
