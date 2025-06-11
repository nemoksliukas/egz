
import React, { useEffect, useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import questions from '~/assets/data/AllQuestionsData';
import EndedQuestion from '~/components/EndedQuestion';
import { QuizQuestion } from '~/types';
import HeaderComponent from '~/components/HeaderComponent';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';



export default function GameScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion>(questions[0]);
  const [lives, setLives] = useState(5);

useEffect(() => {
  if (currentQuestionIndex >= questions.length) {
    Alert.alert('Jūs laimėjote!', undefined, [
      { text: 'Pradėti iš naujo', onPress: () => setCurrentQuestionIndex(0) }
    ]);
  } else {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }
}, [currentQuestionIndex]);

  const onCorrectAnswer = () => {
    setCurrentQuestionIndex(prev => prev + 1);
  };

const onWrongAnswer = () => {
  if (lives <= 1) {
    Alert.alert('Jūs pralaimėjote!', 'Bandykite dar kartą!', [
      { text: 'Bandyti dar kartą', onPress: restart }
    ]);
  } else {
    Alert.alert('Neteisingas atsakymas, bandykite dar kartą!');
    setLives(prev => prev - 1);
  }
};

const restart = () => {
  setLives(5); 
  setCurrentQuestionIndex(0);
};

  return (
    <SafeAreaView className="flex flex-1 p-3">
      <StatusBar animated barStyle={'default'} />

      <HeaderComponent
        progress={currentQuestionIndex / questions.length}
        lives={lives}
      />

      {currentQuestion.type === 'MULTIPLE_CHOICE' && (
        <MultipleChoiceQuestion
          question={{
            question: currentQuestion.text,
            options: currentQuestion.options || [],
          }}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}

      {currentQuestion.type === 'OPEN_ENDED' && (
        <EndedQuestion
          question={currentQuestion}
          onCorrectAnswer={onCorrectAnswer}
          onWrongAnswer={onWrongAnswer}
        />
      )}
    </SafeAreaView>
  );
}
