import StepNav from "../components/StepNav";
import Image from "next/image";

export default function WrapUpPage() {
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
            <h1 className="font-bold mb-4 color-white">Wrap-up & Next Steps</h1>
            <p className="mb-6">Review, next steps, and Q&A for scouts and counselors.</p>
            {/* Add summary and sign-off info here */}
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}