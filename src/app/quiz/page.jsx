"use client"
import { useEffect, useState } from 'react';
import React from 'react';
import data from '../components/data.json'
import Link from 'next/link';
import RippleBackground from '../components/ripplebackground';

function QuizPage() {
    const [questions, setQuestions] = useState([]);
    const [currentQuestionNumber, setQuestionNumber] = useState(1);
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [question, setQuestion] = useState('');
    const [currentAnswer, setCurrentAnswer] = useState('');

    useEffect(() => {
        initializeQuiz();
    }, []);

    useEffect(() => {
        if (questions.length > 0) {
            const currentQuestion = questions[currentQuestionNumber - 1];
            setAnswer(currentQuestion.answer);
            setOption1(currentQuestion.options[0]);
            setOption2(currentQuestion.options[1]);
            setOption3(currentQuestion.options[2]);
            setOption4(currentQuestion.options[3]);
            setQuestion(currentQuestion.question);
        }
    }, [questions, currentQuestionNumber]);

    function initializeQuiz() {
        const selectedQuestions = selectRandomQuestions(10);
        setQuestions(selectedQuestions);
        console.log(selectedQuestions);
    }

    function selectRandomQuestions(numQuestions) {
        const quiz = data.quiz;
        const selectedQuestions = [];
        const quizLength = quiz.length;
        const usedIndexes = new Set();

        while (selectedQuestions.length < numQuestions) {
            const randomIndex = Math.floor(Math.random() * quizLength);
            if (!usedIndexes.has(randomIndex)) {
                selectedQuestions.push(quiz[randomIndex]);
                usedIndexes.add(randomIndex);
            }
        }

        return selectedQuestions;
    }

    function handleNext() {
        if (answer === currentAnswer) {
            setScore(score + 1);
            console.log(score);
        }
        
        console.log(score);

        if (currentQuestionNumber < 10) {
            setQuestionNumber(currentQuestionNumber + 1);
        } else {
            const href = `/result?score=${score}`;
            window.location.href = href;
        }
    }

    function handleAnswer(option) {
        console.log(option);
        setCurrentAnswer(option);
    }

    return (
        <Page
            question={question}
            option1={option1}
            option2={option2}
            option3={option3}
            option4={option4}
            handleAnswer={handleAnswer}
            handleNext={handleNext}
            currentAnswer = {currentAnswer}
        />
    );
}

function Page({ question, option1, option2, option3, option4, handleAnswer, handleNext ,currentAnswer}) {
    return (
        <>
            <RippleBackground/>
            <div className='flex flex-col justify-center items-center h-screen'>
                <div className='h-28 text-white w-full mb-16 text-center py-11 text-3xl lg:text-5xl'>{question}</div>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col lg:flex-row justify-center items-center'>
                        <div className='mb-4 w-11/12 lg:w-auto'>
                            {
                                currentAnswer === option1 ?(
                                    <button className='mb-10 w-11/12  flex justify-center items-center border-2 rounded-3xl border-gray-600 lg:h-20 lg:w-96 lg:mr-10 lg:ml-auto text-3xl bg-white text-black'>{option1}</button>
                                ):(
                                    <button className='mb-10 w-11/12  flex justify-center items-center border-2 rounded-3xl border-gray-600 text-white lg:h-20 lg:w-96 lg:mr-10 lg:ml-auto text-3xl hover:bg-white hover:text-black transition duration-300 ' onClick={() => handleAnswer(option1)}>{option1}</button>
                                )
                            }
                        </div>
                        <div className='mb-4 w-11/12 lg:w-auto'>
                            {
                                currentAnswer === option2 ?(
                                    <button className='mb-10 w-11/12  flex justify-center items-center border-2 rounded-3xl border-gray-600 lg:h-20 lg:w-96 lg:mr-10 lg:ml-auto text-3xl bg-white text-black '>{option2}</button>
                                ):(
                                    <button className='mb-10 w-11/12  flex justify-center items-center border-2 rounded-3xl border-gray-600 text-white lg:h-20 lg:w-96 lg:mr-10 lg:ml-auto text-3xl hover:bg-white hover:text-black transition duration-300 ' onClick={() => handleAnswer(option2)}>{option2}</button>
                                )
                            }
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center items-center'>
                        <div className='mb-4 w-11/12 lg:w-auto'>
                        {
                            currentAnswer === option3 ?(
                                <button className='mb-10 w-11/12  border-2 rounded-3xl border-gray-600 lg:h-20 lg:w-96 lg:mr-10 lg:ml-auto text-3xl bg-white text-black '>{option3}</button>
                            ):(
                                <button className='mb-10 w-11/12  border-2 rounded-3xl border-gray-600 text-white lg:h-20 lg:w-96 lg:mr-10 lg:ml-auto text-3xl hover:bg-white hover:text-black transition duration-300 ' onClick={() => handleAnswer(option3)}>{option3}</button>
                            )
                        }
                        </div>
                        <div className='w-11/12 lg:w-auto'>
                        {
                            currentAnswer === option4 ?(
                                <button className='mb-10 w-11/12 border-2 rounded-3xl border-gray-600 lg:h-20 lg:w-96 lg:mr-10 text-3xl bg-white text-black '>{option4}</button>
                            ):(
                                <button className='mb-10 w-11/12 border-2 rounded-3xl border-gray-600 text-white lg:h-20 lg:w-96 lg:mr-10 text-3xl hover:bg-white hover:text-black transition duration-300' onClick={() => handleAnswer(option4)}>{option4}</button>
                            )
                        }   
                        </div>
                    </div>
                </div>
                <div className="mt-7">
                    <button className="bg-orange-500 transition duration-500 linear hover:bg-orange-700 rounded-full h-10 w-10 mt-8 relative z-10" onClick={handleNext}>
                        <div className="ml-4 h-1 w-5 bg-white transform rotate-45"></div>
                        <div className="mx-1 my-0.5 h-1 w-7 bg-white"></div>
                        <div className="ml-4 h-1 w-5 bg-white transform -rotate-45"></div>
                        <div className="-z-10 absolute inset-0 bg-orange-300 rounded-full h-10 w-10 text-white ripple2"></div>
                    </button>
                </div>
            </div>
        </>
    );
}

export default QuizPage;
