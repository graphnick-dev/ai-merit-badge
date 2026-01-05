import React from 'react';

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  color: string; // Color for the year circle
  gradientFrom: string; // Start color for the timeline line
  gradientTo: string; // End color for the timeline line
}

interface TimelineProps {
  title: string;
  items: TimelineItem[];
}

export default function Timeline({ title, items }: TimelineProps) {
  const generateGradientLine = (index: number, item: TimelineItem) => {
    const isFirst = index === 0;
    const isLast = index === items.length - 1;
    
    if (isFirst) {
      return `bg-gradient-to-r from-transparent via-${item.gradientFrom}-400 to-${item.gradientTo}-400`;
    } else if (isLast) {
      return `bg-gradient-to-r from-${item.gradientFrom}-400 via-${item.gradientTo}-400 to-transparent`;
    } else {
      return `bg-gradient-to-r from-${item.gradientFrom}-400 via-${item.gradientTo}-400 to-${item.gradientTo}-400`;
    }
  };

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-white">{title}</h2>
      
      {/* Horizontal Scrolling Timeline */}
      <div className="overflow-x-auto pb-4">
        <div className="grid grid-cols-5 gap-0 min-w-max px-4 relative">
          
          {items.map((item, index) => (
            <div key={item.year} className="flex flex-col items-center relative">
              {/* Timeline Line Connector */}
              <div className={`w-full h-4 ${generateGradientLine(index, item)} mt-16`}></div>
              
              {/* Year Circle - Positioned over the line */}
              <div className={`w-16 h-16 bg-${item.color}-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-10 z-30`}>
                {item.year}
              </div>
              
              {/* Content Card */}
              <div className="bg-white rounded-none p-6 w-full mx-4 flex flex-col min-w-[300px] h-full">
                <h3 className="mt-8 text-lg font-semibold mb-3 text-center" style={{ color: 'var(--bsa-blue)' }}>
                  {item.title}
                </h3>
                <p className="text-gray-200 max-w-[30ch] text-center text-black" style={{ color: '#333' }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
          
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="text-center mt-4">
        <p className="text-sm">← Scroll horizontally to explore the timeline →</p>
      </div>
    </div>
  );
}