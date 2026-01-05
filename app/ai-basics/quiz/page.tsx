'use client';

import { useState } from 'react';
import StepNav from "../../components/StepNav";
import AIOrNotCard from "../../components/AIOrNotCard";
import Image from "next/image";

const quizItems = [
  {
    title: "Netflix Movie Recommendations",
    description: "The system that suggests movies and TV shows based on your viewing history and preferences.",
    isAI: true
  },
  {
    title: "Simple Calculator App",
    description: "A basic calculator that performs arithmetic operations like addition, subtraction, multiplication, and division.",
    isAI: false
  },
  {
    title: "Spotify's Discover Weekly Playlist",
    description: "A personalized playlist created weekly based on your listening habits and music preferences.",
    isAI: true
  },
  {
    title: "Digital Alarm Clock",
    description: "A clock application that displays time and can be set to ring at specific times.",
    isAI: false
  },
  {
    title: "Google Translate",
    description: "A service that automatically translates text from one language to another in real-time.",
    isAI: true
  },
  {
    title: "Basic Web Form",
    description: "A contact form on a website that collects name, email, and message information.",
    isAI: false
  },
  {
    title: "Tesla Autopilot",
    description: "A system that can automatically steer, accelerate, and brake within driving lanes.",
    isAI: true
  },
  {
    title: "Password Generator",
    description: "A tool that creates random combinations of letters, numbers, and symbols for secure passwords.",
    isAI: false
  },
  {
    title: "Siri Voice Assistant",
    description: "A virtual assistant that responds to voice commands and can answer questions or perform tasks.",
    isAI: true
  },
  {
    title: "Static Website",
    description: "A website with fixed content that displays the same information to every visitor.",
    isAI: false
  }
];

export default function AIOrNotQuizPage() {
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);

  const handleAnswer = (correct: boolean) => {
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }
    setTotalAnswered(prev => prev + 1);
  };

  return (
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image 
          src="/images/life.jpg" 
          alt="Life" 
          fill
          className="absolute inset-0 object-cover z-0"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-50 z-1000 max-w-7xl content-overlay">

          {/* Content overlay */}
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 color-white">AI or Not?</h1>
            <p className="mb-64">Determine which of the following technologies use AI or not. Click on your answer for each item!</p>
            

            {/* Quiz Grid */}
            <div className="grid gap-42 mt-6">
              {quizItems.map((item, index) => (
                <AIOrNotCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  isAI={item.isAI}
                  onAnswer={handleAnswer}
                />
              ))}
            </div>
            
            <div className="mt-8">
              <StepNav />
            </div>
          </div>
        </div>
        
      </div>
  );
}