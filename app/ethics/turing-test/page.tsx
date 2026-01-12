import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function TuringTestPage() {
  return (
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image 
          src="/images/ethics.jpg" 
          alt="Ethics" 
          fill
          className="absolute inset-0 object-cover z-0"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-50 z-1000 max-w-7xl content-overlay">

          {/* Content overlay */}
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 color-white">The Turing Test</h1>
            <h2 className="font-bold mb-4 color-white">How Do We Know If a Machine Can Think?</h2>
            
            {/* Opening Question */}
            <div className="mb-8 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Imagine This Scenario:
              </h3>
              <p className="text-gray-800 text-lg italic">
                You&rsquo;re having a conversation through text messages with someone you&rsquo;ve never met. 
                You ask questions, they respond thoughtfully, they seem to understand jokes, and they 
                even share what seem like personal experiences. After 30 minutes of chatting, you find 
                out it wasn&rsquo;t a person at all—it was an AI. Would you say that AI was &ldquo;thinking&rdquo;?
              </p>
            </div>

            <p className="mb-6">This question is at the heart of the famous Turing Test, one of the most important ideas in artificial intelligence.</p>

            {/* What is the Turing Test */}
            <div className="mt-132 mb-12">
              <h3 className="text-xl font-semibold mb-4 color-white">What Is the Turing Test?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0}>
                  <strong>The Creator:</strong> The test was proposed in 1950 by Alan Turing, a brilliant British mathematician and computer scientist who helped crack secret codes during World War II.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.1}>
                  <strong>The Basic Idea:</strong> Instead of asking &ldquo;Can machines think?&rdquo; (which is hard to answer), Turing asked &ldquo;Can machines behave in a way that&rsquo;s indistinguishable from human thinking?&rdquo;
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.2}>
                  <strong>The Original Name:</strong> Turing originally called it the &ldquo;Imitation Game&rdquo; because the machine tries to imitate human conversation so well that people can&rsquo;t tell the difference.
                </AnimatedListItem>
              </ul>
            </div>

            {/* How Does It Work */}
            <div className="mt-32 mb-16">
              <h3 className="text-xl font-semibold mb-4 color-white">How Does the Turing Test Work?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.3}>
                  <strong>The Setup:</strong> A human judge sits at a computer and has conversations through text with two participants—one human and one AI—without knowing which is which.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.4}>
                  <strong>The Conversation:</strong> The judge can ask any questions they want and has natural conversations with both participants for several minutes.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.5}>
                  <strong>The Decision:</strong> After the conversation, the judge must decide which participant was the human and which was the AI.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.6}>
                  <strong>Passing the Test:</strong> If the AI can fool the judge into thinking it&rsquo;s human at least 30% of the time, it&rsquo;s considered to have &ldquo;passed&rdquo; the Turing Test.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Why Is It Important */}
            <div className="mt-32 mb-16">
              <h3 className="text-xl font-semibold mb-4 color-white">Why Is the Turing Test Important?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.7}>
                  <strong>Benchmark for AI:</strong> It gives us a practical way to measure how sophisticated an AI system is at understanding and responding like a human.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.8}>
                  <strong>Philosophical Questions:</strong> It makes us think about what intelligence really means and whether machines can truly &ldquo;understand&rdquo; or just simulate understanding very well.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.9}>
                  <strong>Goal for Developers:</strong> It provides AI researchers with a clear target to aim for when creating more human-like AI systems.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.0}>
                  <strong>Ethical Considerations:</strong> It raises important questions about how we should treat AI systems that can convince us they&rsquo;re human.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Modern Examples */}
            <div className="mt-32 mb-16">
              <h3 className="text-xl font-semibold mb-4 color-white">Has Any AI Passed the Turing Test?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.1}>
                  <strong>Close Calls:</strong> Some chatbots have come close or claimed to pass, but experts often debate whether these were true passes or if the tests weren&rsquo;t rigorous enough.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.2}>
                  <strong>Modern AI:</strong> Today&rsquo;s AI assistants like ChatGPT, Google&rsquo;s Bard, and others can have very human-like conversations, but they still sometimes reveal their artificial nature.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.3}>
                  <strong>The Challenge:</strong> The test is harder than it might seem because humans are incredibly good at detecting subtle signs that something isn&rsquo;t quite human.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Limitations and Criticisms */}
            <div className="mt-16 mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">What Are the Test&rsquo;s Limitations?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.4}>
                  <strong>Surface-Level:</strong> The test only measures conversation ability, not whether the AI truly understands or has consciousness.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.5}>
                  <strong>Deception-Based:</strong> An AI might pass by being good at fooling people rather than by being genuinely intelligent.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.6}>
                  <strong>Human-Centered:</strong> It assumes that human-like conversation is the best measure of intelligence, but AI might be intelligent in completely different ways.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-32 mb-32 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Try It Yourself:
              </h3>
              <p className="text-gray-800">
                The next time you interact with an AI chatbot, pay attention to how human-like it seems. 
                Can you tell it&rsquo;s artificial? What gives it away? This kind of thinking helps you 
                understand both the capabilities and limitations of current AI technology.
              </p>
            </div>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}