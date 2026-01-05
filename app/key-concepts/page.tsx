import StepNav from "../components/StepNav";
import Image from "next/image";

export default function KeyConceptsPage() {
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
            <div className="bg-opacity-10 p-6 rounded-lg">
              

            <h1 className="font-bold mb-4 color-white">Key Concepts</h1>
            <p className="mb-6">Define and explore the key terms of Computer Science (CS) and Artificial Intelligence (AI).</p>

            <StepNav />
          </div>
        </div>
        
      </div>
  );
}