import React from 'react';
import { useQuiz } from '@/context/QuizContext';
import QuizCard from '@/components/QuizCard';
import Difficulty from '@/components/Difficulty';
import QuestionView from '@/components/QuestionView';
import Result from '@/components/Result';
import { quizzes } from '@/data/quizData';
import MotionWrapper from '@/components/MotionWrapper';
import { motion } from 'framer-motion';
import { ArrowLeft, Link } from 'lucide-react';

const Home = () => {
  const { isQuizActive, isResult } = useQuiz();

  if (isQuizActive) {
    return <QuestionView />;
  }

  if (isResult) {
    return <Result />;
  }

  return (
    <>
      <div className="m-4 mt-6 border-r-4 border-indigo-500  rounded-t-lg w-32">
        <a href="https://www.ericdesenvolvedor.com/">
          <button className="inline-flex items-center justify-center px-6 py-3 ">
            <ArrowLeft />
            <p>Portfólio</p>
          </button>
        </a>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="w-full max-w-6xl">
          <MotionWrapper>
            <div className="text-center mb-10">
              <motion.h1
                className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Quiz Interativo de Séries
              </motion.h1>
              <motion.p
                className="text-xl text-gray-300 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Teste seus conhecimentos sobre as minhas séries favoritas!
              </motion.p>
            </div>
          </MotionWrapper>
          <MotionWrapper delay={0.3}>
            <Difficulty />
          </MotionWrapper>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            {quizzes.map((quiz, index) => (
              <QuizCard key={quiz.id} quiz={quiz} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
