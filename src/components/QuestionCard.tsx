
import React, { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";

const QuestionCard: React.FC = () => {
  const { 
    currentQuiz, 
    currentQuestion, 
    answerQuestion, 
    nextQuestion, 
    selectedAnswers 
  } = useQuiz();
  
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setAnswered(false);
  }, [currentQuestion]);

  if (!currentQuiz) return null;

  const question = currentQuiz.questions[currentQuestion];
  const userSelectedAnswer = selectedAnswers[currentQuestion];

  const handleOptionSelect = (index: number) => {
    if (answered) return;
    setSelectedOption(index);
    answerQuestion(index);
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    nextQuestion();
  };

  const optionVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.02 },
    selected: { scale: 1.02, borderColor: "hsl(var(--primary))" }
  };

  return (
    <MotionWrapper>
      <Card className="shadow-xl border-none bg-black/50 backdrop-blur-md  ">
        <CardContent className="p-6 " >
          <motion.div 
            className="aspect-video mb-6 overflow-hidden rounded-lg "
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.7 }}
              src={question.image} 
              alt={`Imagem para ${question.text}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.h3 
            className="text-xl md:text-2xl font-bold mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {question.text}
          </motion.h3>
          
          <div className="space-y-4">
            {question.options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleOptionSelect(index)}
                className={`w-full p-4 rounded-lg text-left transition-all duration-200 border ${
                  selectedOption === index
                    ? "bg-primary/20 border-primary"
                    : "bg-secondary hover:bg-secondary/80 border-transparent"
                }`}
                disabled={answered}
                initial="normal"
                whileHover="hover"
                animate={selectedOption === index ? "selected" : "normal"}
                variants={optionVariants}
                transition={{ duration: 0.2 }}
              >
                <span className="font-medium">{option}</span>
              </motion.button>
            ))}
          </div>
          
          {answered && (
            <motion.div 
              className="mt-6 flex justify-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button 
                onClick={handleNextQuestion}
              >
                {currentQuestion < currentQuiz.questions.length - 1 ? (
                  <>
                    Próxima <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  "Ver Resultado"
                )}
              </Button>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </MotionWrapper>
  );
};

export default QuestionCard;
