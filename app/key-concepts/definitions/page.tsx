
import StepNav from "../../components/StepNav";
import Image from "next/image";
import { keyConcepts } from "../keyConcepts";

export default function KeyConceptsDefinitionsPage() {
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
          <div className="relative z-20 p-8 bg-filter backdrop-blur-sm rounded-lg" >
            <h1 className="font-bold mb-4 color-white">Key Concepts: Definitions</h1>
            <p className="mb-6">Below are the key terms you need to know for the AI Merit Badge. Review each definition and ask your counselor if you have questions.</p>
            <ul className="space-y-12 mb-8">
              {keyConcepts.map((item) => (
                <li key={item.term} className="bg-white rounded shadow p-4 bsa-section-white">
                  <span className="block font-bold text-lg mb-1">{item.term}</span>
                  <span className="block text-base">{item.definition}</span>
                </li>
              ))}
            </ul>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}