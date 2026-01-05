'use client';

import StepNav from "../../components/StepNav";
import Timeline, { TimelineItem } from "../../components/Timeline";
import Image from "next/image";

export default function AITimelinePage() {

  const aiTimelineData: TimelineItem[] = [
    {
      year: "1950",
      title: "The Turing Test",
      description: "Alan Turing proposed the Turing Test as a way to measure machine intelligence, establishing the foundation for evaluating artificial intelligence.",
      color: "blue",
      gradientFrom: "blue",
      gradientTo: "blue"
    },
    {
      year: "1956", 
      title: "Birth of Artificial Intelligence",
      description: 'The term "Artificial Intelligence" was coined at the Dartmouth Conference, marking the official beginning of AI as a field of study.',
      color: "green",
      gradientFrom: "blue",
      gradientTo: "green"
    },
    {
      year: "1997",
      title: "Deep Blue Defeats Kasparov", 
      description: "IBM's Deep Blue became the first computer to defeat a world chess champion in a match, demonstrating AI's potential for complex problem-solving.",
      color: "purple",
      gradientFrom: "green", 
      gradientTo: "purple"
    },
    {
      year: "2012",
      title: "Deep Learning Revolution",
      description: "AlexNet won the ImageNet challenge, sparking the deep learning revolution and transforming computer vision and AI capabilities.",
      color: "orange",
      gradientFrom: "purple",
      gradientTo: "orange"
    },
    {
      year: "2022",
      title: "Generative AI Goes Mainstream", 
      description: "ChatGPT was released to the public, bringing advanced AI capabilities to millions of users and transforming how people interact with artificial intelligence.",
      color: "red",
      gradientFrom: "orange",
      gradientTo: "red"
    }
  ];

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
            <h1 className="font-bold mb-4 color-white">AI Timeline</h1>
            <p className="mb-6 text-white mb-96">Create a timeline with five key milestones in the development of artificial intelligence.</p>
            
            {/* Timeline Component */}
            <Timeline 
              title="Five Key Milestones in AI History"
              items={aiTimelineData}
            />

            {/* Timeline Summary */}
            <div className="mt-64 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                AI Timeline Reflection:
              </h3>
              <p className="text-gray-800 mb-3">
                From theoretical concepts to practical applications that millions use daily, AI has evolved dramatically over seven decades. 
                Each milestone represents a breakthrough that opened new possibilities for how machines can think and learn.
              </p>
              <p className="text-gray-800">
                <strong>Your Task:</strong> Study these AI milestones and discuss with your counselor how each development 
                changed our understanding of machine intelligence. Consider what the next major AI breakthrough might be and 
                how it could impact society.
              </p>
            </div>
            
            <div className="mt-8">
              <StepNav />
            </div>
          </div>
        </div>
        
      </div>
  );
}