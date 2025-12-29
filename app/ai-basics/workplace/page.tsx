import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function WorkplacePage() {
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
          <div className="relative z-20 p-8 rounded-lg " >
            <h1 className="font-bold mb-4 color-white">AI & Automation</h1>
            <h2 className="font-bold mb-4 color-white">In the Workplace</h2>
            <p className="mb-6">What are some examples of AI and automation in the workplace?</p>
            {/* Add brainstorming or quiz components here */}
            <ul className="space-y-12 mt-16">
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0}>
                  <strong>Code Writing:</strong> AI tools like GitHub Copilot help programmers write code faster by suggesting complete functions and fixing bugs automatically.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.1}>
                  <strong>Customer Service Chatbots:</strong> AI chatbots can answer customer questions 24/7, helping solve problems and directing people to the right information.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.2}>
                  <strong>Data Analysis:</strong> AI can quickly analyze huge amounts of business data to find patterns and help companies make better decisions.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.3}>
                  <strong>Manufacturing Robots:</strong> Automated robots in factories can build cars, package products, and work continuously without breaks.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.4}>
                  <strong>Medical Diagnosis:</strong> AI helps doctors analyze X-rays and medical scans to spot diseases and health problems more accurately.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.5}>
                  <strong>Document Processing:</strong> AI can automatically read and organize paperwork, invoices, and forms, saving office workers hours of typing.
                </AnimatedListItem>
              </ul>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}