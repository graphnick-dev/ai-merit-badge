'use client';

import { useState } from 'react';

interface AIOrNotCardProps {
  title: string;
  description: string;
  isAI: boolean;
  onAnswer?: (correct: boolean) => void;
}

export default function AIOrNotCard({ title, description, isAI, onAnswer }: AIOrNotCardProps) {
  const [answered, setAnswered] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleAnswer = (userChoice: boolean) => {
    const correct = userChoice === isAI;
    setIsCorrect(correct);
    setShowSnackbar(true);
    
    // If this is the first answer or if they got it right, mark as answered
    if (!answered || correct) {
      setAnswered(correct);
      if (onAnswer && !answered) {
        onAnswer(correct);
      }
    }
    
    // Hide snackbar after 3 seconds
    setTimeout(() => setShowSnackbar(false), 3000);
  };

  return (
    <div className={`relative bg-white bg-opacity-90 rounded-lg p-6 shadow-lg transition-all duration-300 flex flex-col h-full ${
      answered 
        ? isCorrect 
          ? 'border-4 border-green-500' 
          : 'border-4 border-bsa-red'
        : 'border border-gray-300'
    }`}>
      <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      
      <div className="flex gap-3 mt-auto">
        <button
          onClick={() => handleAnswer(true)}
          disabled={answered && isCorrect}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
            answered && isCorrect
              ? 'opacity-60 cursor-not-allowed' 
              : 'hover:scale-105 active:scale-95'
          } bg-green-500 hover:bg-green-600 text-white`}
        >
          AI
        </button>
        <button
          onClick={() => handleAnswer(false)}
          disabled={answered && isCorrect}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-200 cursor-pointer ${
            answered && isCorrect
              ? 'opacity-60 cursor-not-allowed' 
              : 'hover:scale-105 active:scale-95'
          } bg-bsa-red text-white`}
        >
          Not AI
        </button>
      </div>

      {/* Snackbar */}
      {showSnackbar && (
        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg text-white font-medium shadow-lg transition-all duration-300 ${
          isCorrect ? 'bg-green-500' : 'bg-orange-500'
        }`}>
          {isCorrect ? 'Correct!' : 'Try again'}
        </div>
      )}
    </div>
  );
}