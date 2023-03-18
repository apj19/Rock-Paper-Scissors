import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetScore } from "../features/gameSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetScore());
  }, []);

  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            Let's Play!!!!
          </h1>

          <p className="mt-4 sm:text-xl sm:leading-relaxed">
            Please choose between following games.....
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4">
            <Link
              to="/rps"
              className="block w-full rounded bg-gradient-to-r from-[#00467F] to-[#A5CC82] px-12 py-3 text-sm font-medium text-white shadow  focus:outline-none focus:ring  sm:w-auto"
              href="/get-started"
            >
              Rock-Paper-Scissors
            </Link>

            <Link
              to="/rpsls"
              className="block w-full rounded px-12 py-3 text-sm font-medium bg-gradient-to-r from-[#00467F] to-[#A5CC82] shadow focus:outline-none focus:ring sm:w-auto"
              href="/about"
            >
              Rock-Paper-Scissors-Lizard-Spock
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
