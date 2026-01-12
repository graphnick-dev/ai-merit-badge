import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function ProjectIdeasPage() {
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
          <h1 className="font-bold mb-4 color-white">AI Project Ideas</h1>
          <h2 className="font-bold mb-4 color-white">Requirement 7A: Create Your Own AI Project</h2>
          
          <p className="mb-8 text-white">
            Choose an artificial intelligence project based on your personal interest or a community need. 
            Develop a plan outlining the project&apos;s objectives, data requirements, and potential ethical considerations.
          </p>

          <ul className="space-y-12 list-none">
            {/* Project Planning Section */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                Planning Your AI Project
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Key Steps:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>Define clear project objectives</li>
                    <li>Identify data requirements</li>
                    <li>Consider ethical implications</li>
                    <li>Choose appropriate AI tools/platforms</li>
                    <li>Create an implementation timeline</li>
                    <li>Plan for testing and evaluation</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Ethical Considerations:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>Data privacy and consent</li>
                    <li>Potential bias in your AI system</li>
                    <li>Impact on individuals/community</li>
                    <li>Transparency in AI decision-making</li>
                    <li>Responsible use of technology</li>
                  </ul>
                </div>
              </div>
            </AnimatedListItem>

            {/* Beginner Projects */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.2}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                🌱 Beginner Level Projects
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">Smart Study Buddy</h4>
                  <p className="text-gray-200">Create an AI chatbot to help with homework questions using existing AI APIs</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Image Classifier</h4>
                  <p className="text-gray-200">Build a tool to identify plants/animals using pre-trained models</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Text Sentiment Analyzer</h4>
                  <p className="text-gray-200">Analyze emotions in social media posts or reviews</p>
                </div>
              </div>
            </AnimatedListItem>

            {/* Intermediate Projects */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.4}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                🚀 Intermediate Level Projects
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">Smart Home Assistant</h4>
                  <p className="text-gray-200">Create voice commands for home automation tasks</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Recommendation System</h4>
                  <p className="text-gray-200">Build a system to recommend books, movies, or activities</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Language Translator</h4>
                  <p className="text-gray-200">Create a tool for translating text or speech between languages</p>
                </div>
              </div>
            </AnimatedListItem>

            {/* Community Projects */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.6}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                🤝 Community Impact Projects
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white">Local Wildlife Tracker</h4>
                  <p className="text-gray-200">Help conservation efforts by identifying local species</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Accessibility Helper</h4>
                  <p className="text-gray-200">Create tools to help people with disabilities navigate spaces</p>
                </div>
                <div>
                  <h4 className="font-medium text-white">Emergency Response Bot</h4>
                  <p className="text-gray-200">Build a chatbot to provide emergency preparedness information</p>
                </div>
              </div>
            </AnimatedListItem>

            {/* Tools and Platforms */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.8}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                Recommended Tools & Platforms
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">No-Code/Low-Code</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                    <li>Scratch for Machine Learning</li>
                    <li>MIT App Inventor AI</li>
                    <li>Teachable Machine (Google)</li>
                    <li>ChatGPT API</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Programming Platforms</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                    <li>Python with TensorFlow</li>
                    <li>Jupyter Notebooks</li>
                    <li>Google Colab</li>
                    <li>GitHub Copilot</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Data Sources</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-200">
                    <li>Kaggle Datasets</li>
                    <li>Government Open Data</li>
                    <li>Your own collected data</li>
                    <li>Public APIs</li>
                  </ul>
                </div>
              </div>
            </AnimatedListItem>

            {/* Implementation Tips */}
            <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.0}>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                Implementation Tips
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Getting Started</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>Start simple and build complexity gradually</li>
                    <li>Use existing AI models and APIs when possible</li>
                    <li>Focus on solving a real problem</li>
                    <li>Document your process and learnings</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-medium mb-3 text-white">Success Factors</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-200">
                    <li>Get approval from your counselor before starting</li>
                    <li>Set realistic goals and timelines</li>
                    <li>Test your project with real users</li>
                    <li>Be prepared to explain your design choices</li>
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
              The goal is to learn about AI while creating something meaningful. 
              Focus on the process, document your journey, and be ready to discuss your experience with your counselor!
            </p>
          </div>
          
          <StepNav />
        </div>
      </div>
    </div>
  );
}