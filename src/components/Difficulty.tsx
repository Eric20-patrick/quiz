
import React from "react";
import { useQuiz } from "@/context/QuizContext";
import { DifficultyLevel } from "@/types/quiz";
import { Button } from "@/components/ui/button";

const Difficulty: React.FC = () => {
  const { difficulty, setDifficulty} = useQuiz();

  const difficulties: { value: DifficultyLevel; label: string }[] = [
    { value: "fácil", label: "Fácil" },
    { value: "médio", label: "Médio" },
    { value: "difícil", label: "Difícil" },
  ];

  return (
    <div className="flex flex-col items-center mb-6">
      <h3 className="text-xl font-semibold mb-4">Nível de Dificuldade</h3>
      <div className="flex space-x-4">
        {difficulties.map((d) => (
          <Button
            key={d.value}
            variant={difficulty === d.value ? "default" : "outline"}
            onClick={() => setDifficulty(d.value)}
            className="transition-all duration-300"
          >
            {d.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Difficulty;
