import { QuizQuestion } from '~/types';

const questions: QuizQuestion[] = [
  
  {
    id: 'q5',
    type: 'OPEN_ENDED',
    text: 'Kiek yra 15*10?',
    answer: '150',
  },
  {
    id: 'q2',
    type: 'MULTIPLE_CHOICE', 
    text: "Kur yra 'kava'?",
    options: [
      {
        id: 'option4',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673610/coffee_kdtc06.png',
        text: 'the coffee',
        correct: true,
      },
      {
        id: 'option1',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673513/cup_fedcyj.png',
        text: 'the cup',
      },
      {
        id: 'option3',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673659/Milk_l8xhiv.png',
        text: 'the milk',
      },
      {
        id: 'option2',
        image: 'https://res.cloudinary.com/dis6tbci7/image/upload/v1738673564/Glass_yt1vqc.png',
        text: 'the glass',
      },
    ],
  },
  {
    id: 'q6',
    type: 'OPEN_ENDED',
    text: 'Ar 100/10 yra lygu 10? taip ar ne?',
    answer: 'taip',
  },
  {
    id: 'q7',
    type: 'OPEN_ENDED',
    text: 'Ar 5*10/2 yra 20? Taip ar ne?',
    answer: 'ne',
  },
];

export default questions;
