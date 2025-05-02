
import React, { useEffect, useState } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Timer as TimerIcon } from "lucide-react";

const Timer: React.FC = () => {
  const { timer, nextQuestion } = useQuiz();
  const [timeLeft, setTimeLeft] = useState(timer);
  const [percentage, setPercentage] = useState(100);

  useEffect(() => {
    setTimeLeft(timer);
    setPercentage(100);
  }, [timer]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          nextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [nextQuestion, timer]);

  useEffect(() => {
    setPercentage((timeLeft / timer) * 100);
  }, [timeLeft, timer]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-2">
        <TimerIcon className="h-5 w-5 text-accent" />
        <span className="text-lg font-semibold">{timeLeft}s</span>
      </div>
      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
          className="timer-animation"
          style={{
            width: `${percentage}%`,
            backgroundColor: percentage > 50
              ? "var(--primary)" 
              : percentage > 25 
                ? "var(--accent)" 
                : "var(--destructive)"
          }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
