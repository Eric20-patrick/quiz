import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
// import { Quiz } from "@/types/quiz";
import MotionWrapper from "./MotionWrapper";
import { motion } from "framer-motion";
import { QuizCardProps } from "@/types/quizCard";

//export interface QuizCardProps {
  //  quiz: Quiz;
   // index: number;
  // }


const QuizCard: React.FC<QuizCardProps> = ({ quiz, index }) => {
  const { startQuiz, erro } = useQuiz();

  return (
    <MotionWrapper delay={0.1 * index}>
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border-none bg-black/30 backdrop-blur-md card-animation">
        <div className="aspect-video overflow-hidden w-100px">
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            src={quiz.image}
            alt={quiz.title}
            className="w-full h-full object-cover"
          />
        </div>

        <CardHeader>
          <CardTitle className="text-2xl">{quiz.title}</CardTitle>
          <CardDescription className="text-gray-300">{quiz.description}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-gray-400">
            10 perguntas • 3 níveis de dificuldade
          </p>
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          <Button
            onClick={() => startQuiz(quiz.id)}
            className="w-full"
            variant="outline"
          >
            Iniciar Quiz
          </Button>

          {/* Exibe erro, se houver */}
          {erro && (
            <p className="text-red-400 text-sm text-center">
              {erro}
            </p>
          )}
        </CardFooter>
      </Card>
    </MotionWrapper>
  );
};

export default QuizCard;
