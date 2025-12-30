'use client';

import StepNav from "../../components/StepNav";
import Image from "next/image";

export default function TimelinePage() {

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
        <div className="absolute inset-0 bg-opacity-50 z-1000 max-w-7xl content-overlay">

          {/* Content overlay */}
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 color-white">Automation Timeline</h1>
            <p className="mb-6 text-white mb-96">Create a timeline with five key milestones in the development of automation.</p>
            
            {/* Timeline Container */}
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 color-white">Five Key Milestones in Automation History</h2>
              
              {/* Horizontal Scrolling Timeline */}
              <div className="overflow-x-auto pb-4">
                <div className="grid grid-cols-5 gap-0 min-w-max px-4 relative">
                  
                  {/* Timeline Item 1 - 1784 */}
                  <div className="flex flex-col items-center relative">
                    {/* Timeline Line Connector */}
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-blue-400 mb-4 mt-16"></div>
                    {/* Year Circle - Positioned over the line */}
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-8 z-30">
                      1784
                    </div>
                    {/* Content Card */}
                    <div className="bg-white/20 backdrop-blur-sm rounded-none p-6 w-full mx-4 flex flex-col min-w-[300px] h-full">
                      <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: 'var(--bsa-red)' }}>
                        First Automated Loom
                      </h3>
                      <p className="text-gray-200 max-w-[30ch] text-center">
                        Edmund Cartwright invented the power loom, automating the weaving process and marking the beginning of industrial automation.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 2 - 1913 */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-full h-1 bg-gradient-to-r from-blue-400 via-green-400 to-green-400 mb-4 mt-16"></div>
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-8 z-30">
                      1913
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-none p-6 w-full mx-4 flex flex-col min-w-[300px] h-full">
                      <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: 'var(--bsa-red)' }}>
                        Assembly Line Revolution
                      </h3>
                      <p className="text-gray-200 max-w-[30ch] text-center">
                        Henry Ford&apos;s moving assembly line reduced Model T production time from 12 hours to 2.5 hours, revolutionizing mass production.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 3 - 1961 */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-full h-1 bg-gradient-to-r from-green-400 via-purple-400 to-purple-400 mb-4 mt-16"></div>
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-8 z-30">
                      1961
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-none p-6 w-full mx-4 flex flex-col min-w-[300px] h-full">
                      <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: 'var(--bsa-red)' }}>
                        First Industrial Robot
                      </h3>
                      <p className="text-gray-200 max-w-[30ch] text-center">
                        General Motors installed &quot;Unimate,&quot; the first industrial robot, marking the beginning of robotic automation in manufacturing.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 4 - 1975 */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-full h-1 bg-gradient-to-r from-purple-400 via-orange-400 to-orange-400 mb-4 mt-16"></div>
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-8 z-30">
                      1975
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-none p-6 w-full mx-4 flex flex-col min-w-[300px] h-full">
                      <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: 'var(--bsa-red)' }}>
                        Programmable Logic Controllers
                      </h3>
                      <p className="text-gray-200 max-w-[30ch] text-center">
                        PLCs became widely adopted, allowing flexible, programmable automation systems that could be easily reprogrammed for different tasks.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Item 5 - 2004 */}
                  <div className="flex flex-col items-center relative">
                    <div className="w-full h-1 bg-gradient-to-r from-orange-400 via-red-400 to-transparent mb-4 mt-16"></div>
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-8 z-30">
                      2004
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-none p-6 w-full mx-4 flex flex-col min-w-[300px] h-full">
                      <h3 className="text-lg font-semibold mb-3 text-center" style={{ color: 'var(--bsa-red)' }}>
                        Industry 4.0 & Smart Manufacturing
                      </h3>
                      <p className="text-gray-200 max-w-[30ch] text-center">
                        &quot;Industry 4.0&quot; combined automation with AI and data analytics, creating smart factories with interconnected decision-making systems.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              {/* Scroll Indicator */}
              <div className="text-center mt-4 mb-6">
                <p className="text-gray-300 text-sm">← Scroll horizontally to explore the timeline →</p>
              </div>

              {/* Timeline Summary */}
              <div className="mt-8 p-6 bg-white bg-opacity-90 rounded-lg">
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
            </div>
            
            <div className="mt-8">
              <StepNav />
            </div>
          </div>
        </div>
        
      </div>
  );
}