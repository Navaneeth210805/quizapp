"use client";
import React from 'react';
import { useSearchParams } from 'next/navigation';  
import Link from 'next/link';
import RippleBackground from '../components/ripplebackground';

function Page() {
  const searchParams = useSearchParams();
  const score = searchParams.get("score");
  
  return (
    <>
      <RippleBackground />
      <div className='flex flex-col text-4xl justify-center items-center text-center text-white h-screen relative z-10'>
        <div className='mb-20'>
          Quiz Results
        </div>
        <div>
          Number of correct answers = {score} / 10
        </div>
        <div className="mt-10 mb-10">
          <Link href="/quiz">
            <button className="bg-orange-500 transition duration-500 linear hover:bg-orange-700 rounded-full h-24 w-64 mt-8">
              Retry Quiz
            </button>
          </Link>
        </div>
        <a href="https://github.com/Navaneeth210805/quizapp" target='_blank' className='underline-none w-auto flex items-center justify-center gap-4 hover:text-yellow-600'>
        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.213 9.787a3.391 3.391 0 0 0-4.795 0l-3.425 3.426a3.39 3.39 0 0 0 4.795 4.794l.321-.304m-.321-4.49a3.39 3.39 0 0 0 4.795 0l3.424-3.426a3.39 3.39 0 0 0-4.794-4.795l-1.028.961" />
        </svg>
        Link to Github Repository
        </a>
      </div>
    </>
  );
}

export default Page;
