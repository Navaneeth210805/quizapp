import React from "react";
import Link from "next/link";
import RippleBackground from "./components/ripplebackground";

function Page() {
  return (
    <>
      <RippleBackground/>
      <div className="flex flex-col justify-center items-center h-screen text-white text-3xl bg-black z-30">
        <div className="mb-16 text-5xl">Quiz App</div>

        <div className="mt-10">Welcome to the awesome quiz experience</div>

        <div className="mt-9">Ready to take the Quiz</div>

        <Link href="/quiz">
          <div className="">
            <button className="bg-orange-500 transition duration-500 linear hover:bg-orange-700 rounded-full h-10 w-10 mt-8 relative z-10">
              <div className="ml-4 h-1 w-5 bg-white transform rotate-45"></div>
              <div className="mx-1 my-0.5 h-1 w-7 bg-white"></div>
              <div className="ml-4 h-1 w-5 bg-white transform -rotate-45"></div>
              <div className="-z-10 absolute inset-0 bg-orange-300 rounded-full h-10 w-10 text-white ripple1"></div>
            </button>
          </div>
        </Link>
        

        

      </div>
    </>
  );
}

export default Page;
