
import React from "react";
import { useQuiz } from "@/context/QuizContext";
import Timer from "@/components/Timer";
import ProgressBar from "@/components/ProgressBar";
import QuestionCard from "@/components/QuestionCard";

const QuestionView: React.FC = () => {
  const { currentQuiz } = useQuiz();

  if (!currentQuiz) return null;

  return (
    <div className="  max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-6 ">
        <h2 className="text-3xl font-bold mb-2">{currentQuiz.title}</h2>
        <p className="text-gray-400">{currentQuiz.description}</p>
      </div>
      
      <Timer />
      <ProgressBar />
      
      <QuestionCard />
    </div>
  );
};

export default QuestionView;
