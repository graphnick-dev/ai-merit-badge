'use client';

import StepNav from "../../components/StepNav";
import Timeline, { TimelineItem } from "../../components/Timeline";
import Image from "next/image";

export default function TimelinePage() {

  const automationTimelineData: TimelineItem[] = [
    {
      year: "1784",
      title: "First Automated Loom",
      description: "Edmund Cartwright invented the power loom, automating the weaving process and marking the beginning of industrial automation.",
      color: "blue",
      gradientFrom: "blue",
      gradientTo: "blue"
    },
    {
      year: "1913", 
      title: "Assembly Line Revolution",
      description: "Henry Ford's moving assembly line reduced Model T production time from 12 hours to 2.5 hours, revolutionizing mass production.",
      color: "green",
      gradientFrom: "blue",
      gradientTo: "green"
    },
    {
      year: "1961",
      title: "First Industrial Robot", 
      description: 'General Motors installed "Unimate," the first industrial robot, marking the beginning of robotic automation in manufacturing.',
      color: "purple",
      gradientFrom: "green", 
      gradientTo: "purple"
    },
    {
      year: "1975",
      title: "Programmable Logic Controllers",
      description: "PLCs became widely adopted, allowing flexible, programmable automation systems that could be easily reprogrammed for different tasks.",
      color: "orange",
      gradientFrom: "purple",
      gradientTo: "orange"
    },
    {
      year: "2004",
      title: "Industry 4.0 & Smart Manufacturing", 
      description: '"Industry 4.0" combined automation with AI and data analytics, creating smart factories with interconnected decision-making systems.',
      color: "red",
      gradientFrom: "orange",
      gradientTo: "red"
    }
  ];

  return (
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image 
          src="/images/automation.jpg" 
          alt="Automation" 
          fill
          className="absolute inset-0 object-cover z-0"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-50 z-1000 max-w-7xl content-overlay">

          {/* Content overlay */}
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 color-white">Automation Timeline</h1>
            <p className="mb-6 text-white mb-216">Create a timeline with five key milestones in the development of automation.</p>
            
            {/* Timeline Component */}
            <Timeline 
              title="Five Key Milestones in Automation History"
              items={automationTimelineData}
            />

            {/* Timeline Summary */}
            <div className="mt-96 mb-32 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Timeline Reflection:
              </h3>
              <p className="text-gray-800 mb-3">
                These five milestones show how automation has evolved from simple mechanical processes to intelligent, 
                interconnected systems. Each advancement built upon previous innovations, leading to today&apos;s smart automation.
              </p>
              <p className="text-gray-800">
                <strong>Your Task:</strong> Create your own timeline with these or other automation milestones. 
                Consider how each development changed the way people work and live, and discuss with your counselor 
                how automation continues to evolve today.
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