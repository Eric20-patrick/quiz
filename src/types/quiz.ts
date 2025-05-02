
export type DifficultyLevel = 'fácil' | 'médio' | 'difícil';

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;
  difficulty: DifficultyLevel;
  image: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  image: string;
  questions: Question[];
}

export interface QuizResult {
  quizId: string;
  correctAnswers: number;
  totalQuestions: number;
  difficulty: DifficultyLevel;
  timeSpent: number;
}


