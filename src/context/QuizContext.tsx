import React, { createContext, useContext, useState } from 'react';
import { Quiz, QuizResult, DifficultyLevel } from '@/types/quiz';
import { quizzes } from '@/data/quizData';

interface QuizContextType {
  currentQuiz: Quiz | null;
  currentQuestion: number;
  selectedAnswers: number[];
  results: QuizResult | null;
  timer: number;
  difficulty: DifficultyLevel;
  isQuizActive: boolean;
  isResult: boolean;
  startQuiz: (quizId: string) => void;
  setDifficulty: (level: DifficultyLevel) => void;
  answerQuestion: (answerIndex: number) => void;
  nextQuestion: () => void;
  finishQuiz: () => void;
  resetQuiz: () => void;
  erro: string | null;
  setErro: (msg: string | null) => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error();
  }
  return context;
};

export const QuizProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [results, setResults] = useState<QuizResult | null>(null);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>();
  const [timer, setTimer] = useState(60);
  const [totalTime, setTotalTime] = useState(0);
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const getFilteredQuestions = (quiz: Quiz) => {
    return {
      ...quiz,
      questions: quiz.questions.filter((q) => q.difficulty === difficulty),
    };
  };

  const startQuiz = (quizId: string) => {
    if (!difficulty) {
      setErro('Por favor, selecione uma dificuldade antes de iniciar o quiz.');
      return;
    }
    const quiz = quizzes.find((q) => q.id === quizId);
    if (quiz) {
      const filteredQuiz = getFilteredQuestions(quiz);
      setCurrentQuiz(filteredQuiz);
      setCurrentQuestion(0);
      setSelectedAnswers([]);
      setResults(null);
      setTimer(60);
      setTotalTime(0);
      setIsQuizActive(true);
      setIsResult(false);
    }
  };

  const answerQuestion = (answerIndex: number) => {
    setSelectedAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentQuestion] = answerIndex;
      return newAnswers;
    });
  };

  const nextQuestion = () => {
    if (currentQuiz && currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setTimer(60);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    if (currentQuiz) {
      let correctCount = 0;
      selectedAnswers.forEach((answer, index) => {
        if (currentQuiz.questions[index].correctAnswer === answer) {
          correctCount++;
        }
      });

      setResults({
        quizId: currentQuiz.id,
        correctAnswers: correctCount,
        totalQuestions: currentQuiz.questions.length,
        difficulty: difficulty,
        timeSpent: totalTime,
      });

      setIsQuizActive(false);
      setIsResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuiz(null);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setResults(null);
    setTimer(30);
    setTotalTime(0);
    setIsQuizActive(false);
    setIsResult(false);
  };

  const value = {
    currentQuiz,
    currentQuestion,
    selectedAnswers,
    results,
    timer,
    difficulty,
    isQuizActive,
    isResult,
    erro,
    setErro,

    startQuiz,
    setDifficulty: (level: DifficultyLevel) => {
      setDifficulty(level);
      setErro(null);
    },
    answerQuestion,
    nextQuestion,
    finishQuiz,
    resetQuiz,
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
