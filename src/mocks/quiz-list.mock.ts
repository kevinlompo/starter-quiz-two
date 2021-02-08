import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question = {
    label: 'Jean Gabin a joué dans...',
    answers: [
       {
            value: 'Les tuches II',
            isCorrect: false,
         },
         {
             value: 'La grande illusion',
             isCorrect: true,
         }
     ]
 };


export const QUESTION_SPORT: Question = {
  label: 'Le Football se joue....',
  answers: [
    {
      value: 'Avec les pieds',
      isCorrect: true,
    },
    {
      value: 'Avec les mains',
      isCorrect: false,
    }
  ]
};


export const QUIZ_LIST: Quiz[] = [
    {
        name: 'Le Cinéma', // What's happening if I change this value..?
        theme: 'Acteurs',
        questions: [QUESTION_ACTOR],
        creationDate: this,
    },
    {
        name: 'Les Sports',
        theme: 'Football',
        questions: [QUESTION_SPORT],
        creationDate: this,
    }
];
