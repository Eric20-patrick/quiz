
import React from "react";
import { useQuiz } from "@/context/QuizContext";

const ProgressBar: React.FC = () => {
  const { currentQuiz, currentQuestion } = useQuiz();

  if (!currentQuiz) return null;

  const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;

  return (
    <div className="w-full my-4">
      <div className="flex justify-between mb-1 text-sm">
        <span>
          Pergunta {currentQuestion + 1} de {currentQuiz.questions.length}
        </span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div 
          className="progress-bar animate-progress" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
