

"use client";

import { useState } from "react";
import StepNav from "../../components/StepNav";

const keyConcepts = [
  { term: "Artificial Intelligence (AI)", definition: "The ability of a computer or machine to perform tasks that typically require human intelligence, such as learning, reasoning, problem-solving, perception, and language understanding." },
  { term: "Artificial Intelligence Agents", definition: "Entities that perceive their environment and take actions to achieve specific goals using AI techniques." },
  { term: "Automation", definition: "The use of technology to perform tasks with minimal human intervention, often to increase efficiency and reduce errors." },
  { term: "Basic Programming", definition: "Writing simple instructions in a programming language to make a computer perform specific tasks." },
  { term: "Bots", definition: "Software applications that run automated tasks (scripts) over the internet, often simulating human activity." },
  { term: "Data", definition: "Facts, statistics, or information collected for reference or analysis, which can be processed by computers." },
  { term: "Databases", definition: "Organized collections of data that can be easily accessed, managed, and updated." },
  { term: "Digital Workers", definition: "Software-based workers (often powered by AI or automation) that perform repetitive or rule-based tasks in business processes." },
  { term: "General AI", definition: "A type of AI that can understand, learn, and apply intelligence across a wide range of tasks, similar to human intelligence (not yet achieved)." },
  { term: "Machine Learning (ML)", definition: "A subset of AI that enables computers to learn from data and improve their performance over time without being explicitly programmed." },
  { term: "Narrow AI", definition: "AI systems designed to perform a specific task or a limited range of tasks (e.g., voice assistants, image recognition)." },
  { term: "Superintelligent AI", definition: "A hypothetical AI that surpasses human intelligence in all aspects, including creativity, problem-solving, and social intelligence." },
  { term: "Tasks", definition: "Specific activities or jobs to be completed, often by an AI or automated system." },
  { term: "Triggers", definition: "Events or conditions that start an automated process or workflow." },
  { term: "Workflows", definition: "Sequences of tasks or processes that are automated to achieve a specific goal." },
  { term: "Variables", definition: "Storage locations in programming that hold data values which can change during program execution." },
];

export default function FlashcardsPage() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">Key Concepts: Flashcards</h1>
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
    </main>
  );
}