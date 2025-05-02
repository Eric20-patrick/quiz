
import React from "react";
import { useQuiz } from "@/context/QuizContext";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, BarChart } from "lucide-react";

const Result: React.FC = () => {      
  const { results, currentQuiz, resetQuiz, selectedAnswers } = useQuiz();

  if (!results || !currentQuiz) return null;

  const percentage = Math.round((results.correctAnswers / results.totalQuestions) * 100);
  const isHighScore = percentage >= 70;
  const isMediumScore = percentage >= 40 && percentage < 70;

  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      <Card className="shadow-xl border-none bg-black/50 backdrop-blur-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            {isHighScore ? (
              <Award className="h-16 w-16 text-yellow-500" />
            ) : isMediumScore ? (
              <Award className="h-16 w-16 text-slate-400" />
            ) : (
              <BarChart className="h-16 w-16 text-accent" />
            )}
          </div>
          <CardTitle className="text-3xl">
            {isHighScore
              ? "Excelente!"
              : isMediumScore
              ? "Bom trabalho!"
              : "Continue tentando!"}
          </CardTitle>
          <CardDescription className="text-xl mt-2">
            Você acertou {results.correctAnswers} de {results.totalQuestions} perguntas!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center mb-6">
            <div className="text-5xl font-bold mb-2">{percentage}%</div>
            <p className="text-gray-400">Nível de dificuldade: {results.difficulty}</p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Respostas corretas:</h3>
            <div className="space-y-3">
              {currentQuiz.questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                
                return (
                  <div 
                    key={index}
                    className={`p-3 rounded-lg ${
                      isCorrect ? "bg-green-900/20 border border-green-700" : "bg-red-900/20 border border-red-700"
                    }`}
                  >
                    <p className="font-medium mb-1">{question.text}</p>
                    <p className="text-sm">
                      <span className="font-semibold">Sua resposta:</span>{" "}
                      {question.options[userAnswer]}
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-400">
                        <span className="font-semibold">Resposta correta:</span>{" "}
                        {question.options[question.correctAnswer]}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center pt-4">
          <Button onClick={resetQuiz} size="lg">
            Voltar para o Início
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Result;
