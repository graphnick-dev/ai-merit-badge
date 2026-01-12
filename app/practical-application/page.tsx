import StepNav from "../components/StepNav";
import AnimatedListItem from "../components/AnimatedListItem";
import Image from "next/image";
import Link from "next/link";

export default function PracticalApplicationPage() {
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
          <div className="relative z-20 p-8 rounded-lg">
            <h1 className="font-bold mb-4 color-white">Practical Application</h1>
            <h2 className="font-bold mb-4 color-white">Choose One: Project or Teaching</h2>
            
            <p className="mb-8 text-white">Choose one option for Requirement 7 to demonstrate your AI knowledge through hands-on application.</p>
            
            <ul className="mt-32 space-y-12 list-none">
              {/* Option A - Project */}
              <AnimatedListItem className="z-20 p-6 mb-64 rounded-[1em] backdrop-blur-sm bg-white/30" delay={0}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                  Option A: AI Project
                </h3>
                <p className="text-white mb-4">
                  Create an artificial intelligence project based on your personal interest or a community need. 
                  Develop a comprehensive plan and implement it using appropriate AI tools and platforms.
                </p>
                <Link 
                  href="/practical-application/project-ideas"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Explore Project Ideas →
                </Link>
              </AnimatedListItem>

              {/* Option B - Teaching */}
              <AnimatedListItem className="z-20 mt-64 p-6 rounded-[1em] backdrop-blur-sm bg-white/30" delay={0.2}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                  Option B: Teaching Lesson
                </h3>
                <p className="text-white mb-4">
                  Design and teach a short lesson about AI to your patrol or a group of Scouts. 
                  Include AI-generated content, real-world examples, and interactive demonstrations.
                </p>
                <Link 
                  href="/practical-application/lesson-plan"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  Plan Your Lesson →
                </Link>
              </AnimatedListItem>

              {/* Key Requirements */}
              <AnimatedListItem className="z-20 p-6 mt-64 rounded-[1em] backdrop-blur-sm bg-white/30" delay={0.4}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                  Important Reminders
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Before You Start:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Get approval from your counselor</li>
                      <li>Choose based on your interests and skills</li>
                      <li>Consider time and resource constraints</li>
                      <li>Think about ethical implications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">For Your Counselor Discussion:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-800">
                      <li>Document your development process</li>
                      <li>Be ready to explain your decisions</li>
                      <li>Reflect on what you learned</li>
                      <li>Share challenges and successes</li>
                    </ul>
                  </div>
                </div>
              </AnimatedListItem>
            </ul>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}