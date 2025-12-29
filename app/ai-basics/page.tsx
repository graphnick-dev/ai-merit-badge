import StepNav from "../components/StepNav";
import Image from "next/image";

export default function AiAutomationPage() {
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
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 color-white">AI & Automation</h1>
            <p className="mb-6">What are some examples of AI and automation in everyday life, workplace, and school?</p>
            {/* Add brainstorming or quiz components here */}
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}