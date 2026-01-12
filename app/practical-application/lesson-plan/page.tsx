import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function LessonPlanPage() {
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
          <h1 className="font-bold mb-4 color-white">AI Lesson Plan Guide</h1>
          
          <div className="mb-12 p-6 bg-white bg-opacity-90 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 color-red" style={{ color: 'var(--bsa-red)' }}>Requirement 7B: Teach Others About AI</h3>
            <p className="text-gray-800 text-lg">
                Design a short lesson plan on AI and teach it to your patrol or a group of Scouts. 
                Include an AI-generated explanation, real-world examples, and an interactive demonstration of how AI can help with school, Scouting, or rank advancement.
            </p>
          </div>

          <ul className="space-y-12 list-none">
            {/* Lesson Requirements */}
            <AnimatedListItem className="z-20 rounded-[1em]" delay={0}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                Your Lesson Must Include
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2 text-[.7em]">📚 AI-Generated Explanation</h4>
                  <p className="text-[.7em] text-gray-200">Use AI to create an age-appropriate explanation of what AI is and how it works</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2 text-[.7em]">🌍 Real-World Examples</h4>
                  <p className="text-[.7em] text-gray-200">Show examples of AI in everyday life and the workplace</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold text-white mb-2 text-[.7em]">🎯 Interactive Demo</h4>
                  <p className="text-[.7em] text-gray-200">Demonstrate how AI can help with school, Scouting activities, or rank advancement</p>
                </div>
              </div>
            </AnimatedListItem>

            {/* Lesson Plan Template */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.2}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                Sample 30-Minute Lesson Plan
              </h3>
              
              <div className="space-y-6">
                {/* Opening */}
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="text-lg font-semibold text-green-300 mb-2">Opening (5 minutes)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-200">
                    <li>Ask: &quot;What do you think AI is?&quot; - Get initial thoughts</li>
                    <li>Share the lesson objectives</li>
                    <li>Quick icebreaker: &quot;Raise your hand if you&apos;ve used Siri, Alexa, or Google Assistant&quot;</li>
                  </ul>
                </div>

                {/* Main Content */}
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-lg font-semibold text-blue-300 mb-2">What is AI? (8 minutes)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-200">
                    <li>Share AI-generated explanation (use ChatGPT, Claude, or similar to create age-appropriate content)</li>
                    <li>Use simple analogies: &quot;AI is like teaching a computer to think and learn&quot;</li>
                    <li>Show visual examples or simple diagrams</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-lg font-semibold text-purple-300 mb-2">AI in Real Life (7 minutes)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-200">
                    <li><strong>Everyday:</strong> Netflix recommendations, smartphone cameras, maps/navigation</li>
                    <li><strong>Workplace:</strong> Email spam filters, medical diagnosis assistance, customer service chatbots</li>
                    <li>Interactive game: Show pictures/scenarios and have Scouts guess if AI is involved</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="text-lg font-semibold text-orange-300 mb-2">Hands-On Demo (8 minutes)</h4>
                  <p className="text-gray-200 mb-2">Choose one demonstration from these ideas:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-200">
                    <li><strong>Study Helper:</strong> Show how to use AI for homework explanations</li>
                    <li><strong>Merit Badge Assistant:</strong> Use AI to create study guides or practice questions</li>
                    <li><strong>Trip Planning:</strong> Plan a Scout outing using AI for research and logistics</li>
                    <li><strong>Creative Projects:</strong> Use AI for writing Scout skits or designing flyers</li>
                  </ul>
                </div>

                {/* Closing */}
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="text-lg font-semibold text-red-300 mb-2">Wrap-Up & Questions (2 minutes)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-200">
                    <li>Quick recap of key points</li>
                    <li>Answer any questions</li>
                    <li>Challenge: &quot;This week, notice one example of AI you encounter&quot;</li>
                  </ul>
                </div>
              </div>
            </AnimatedListItem>

            {/* Interactive Demo Ideas */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.4}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                Interactive Demonstration Ideas
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">School Applications</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li><strong>Homework Help:</strong> Show how to ask AI for math explanations or essay feedback</li>
                    <li><strong>Research Assistant:</strong> Demonstrate using AI to find and summarize information</li>
                    <li><strong>Study Tools:</strong> Create flashcards or practice quizzes with AI</li>
                    <li><strong>Language Learning:</strong> Practice conversations or get pronunciation help</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Scouting Applications</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li><strong>Merit Badge Support:</strong> Get explanations of requirements or project ideas</li>
                    <li><strong>Activity Planning:</strong> Use AI to plan games, service projects, or outings</li>
                    <li><strong>Skills Practice:</strong> Get tips for knot tying, cooking, or outdoor skills</li>
                    <li><strong>Leadership Ideas:</strong> AI assistance for leading meetings or organizing events</li>
                  </ul>
                </div>
              </div>
            </AnimatedListItem>

            {/* Preparation Tips */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.6}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                Lesson Preparation Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Before Your Lesson</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>Get counselor approval for your lesson plan</li>
                    <li>Test all technology and AI tools beforehand</li>
                    <li>Prepare backup activities in case of tech issues</li>
                    <li>Create simple handouts or visual aids</li>
                    <li>Practice your demonstration multiple times</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">During Your Lesson</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>Keep energy high and encourage participation</li>
                    <li>Be ready to explain technical terms simply</li>
                    <li>Allow time for questions throughout</li>
                    <li>Have Scouts try the AI tools themselves if possible</li>
                    <li>Connect examples to their daily lives</li>
                  </ul>
                </div>
              </div>
            </AnimatedListItem>

            {/* Age-Appropriate Content */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.8}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                Making Content Age-Appropriate
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-semibold text-white mb-2">Younger Scouts (11-14)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                    <li>Use simple analogies and comparisons</li>
                    <li>Focus on familiar examples (games, apps)</li>
                    <li>More hands-on activities</li>
                    <li>Shorter explanations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Middle Age (14-16)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                    <li>Include some technical details</li>
                    <li>Discuss real-world implications</li>
                    <li>Encourage critical thinking</li>
                    <li>Connect to career interests</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Older Scouts (16+)</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                    <li>Dive into ethical considerations</li>
                    <li>Discuss future implications</li>
                    <li>Encourage debate and discussion</li>
                    <li>Link to college/career planning</li>
                  </ul>
                </div>
              </div>
            </AnimatedListItem>

            {/* Assessment */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.0}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                How You&apos;ll Be Evaluated
              </h3>
              <p className="mb-4 text-gray-200">Your counselor will want to discuss:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Development Process</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>How you used AI to create content</li>
                    <li>Your lesson planning process</li>
                    <li>Challenges you faced and overcame</li>
                    <li>How you made content age-appropriate</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Teaching Experience</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>How well your audience engaged</li>
                    <li>Questions they asked</li>
                    <li>What worked well vs. what you&apos;d change</li>
                    <li>Your overall learning from the experience</li>
                  </ul>
                </div>
              </div>
            </AnimatedListItem>
          </ul>

          {/* Call to Action */}
          <div className="mt-16 mb-12 p-6 bg-white bg-opacity-90 rounded-lg">
            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
              Remember:
            </h3>
            <p className="text-gray-800">
              Teaching others is one of the best ways to learn! Focus on making AI accessible and fun for your audience.
              Document your lesson development process and be prepared to share your teaching experience with your counselor.
            </p>
          </div>
          
          <StepNav />
        </div>
      </div>
    </div>
  );
}