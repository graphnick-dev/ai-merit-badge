

"use client";

import { useState } from "react";
import StepNav from "../../components/StepNav";
import Image from "next/image";
import { keyConcepts } from "../keyConcepts";

export default function FlashcardsPage() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image 
          src="/images/ai-workers.jpg" 
          alt="AI Workers" 
          fill
          className="absolute inset-0 object-cover z-0"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-50 z-1000 max-w-7xl">

          {/* Content overlay */}
          <div className="relative z-20 p-8 bg-filter backdrop-blur-sm rounded-lg" >
            <h1 className="font-bold mb-4 color-white">Key Concepts: Flashcards</h1>
            <p className="mb-6">Test your knowledge of key terms. Click a card to see its definition.</p>
            <div className="flashcard-grid mb-8">
              {keyConcepts.map((item, idx) => (
                <div
                  key={item.term}
                  className="flashcard"
                  onClick={() => setSelected(idx)}
                >
                  <span className="flashcard-title">{item.term}</span>
                </div>
              ))}
            </div>
            {selected !== null && (
              <div className="modal-overlay" onClick={() => setSelected(null)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                  <h2 className="text-xl font-bold mb-2">{keyConcepts[selected].term}</h2>
                  <p>{keyConcepts[selected].definition}</p>
                  <button className="modal-close" onClick={() => setSelected(null)}>Close</button>
                </div>
              </div>
            )}
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}