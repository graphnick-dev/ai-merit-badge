'use client';

import StepNav from "../../components/StepNav";
import Image from "next/image";

export default function TasksPage() {

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
            <h1 className="font-bold mb-4 color-white">Automation Tasks</h1>
            <ul className="ml-8 list-disc mb-6">
              <li className="mb-6">Automation is not AI</li>
              <li className="mb-6">Performs repetitive tasks without human intervention</li>
              <li className="mb-6">Increases efficiency and accuracy</li>
              <li className="mb-6">Reduces human error</li>
              <li className="mb-6">Optimizes resources</li>
            </ul>
            
            
           
            
            <div className="mt-8">
              <StepNav />
            </div>
          </div>
        </div>
        
      </div>
  );
}