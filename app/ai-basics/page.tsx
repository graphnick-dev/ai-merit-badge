import StepNav from "../components/StepNav";
import AnimatedListItem from "../components/AnimatedListItem";
import Image from "next/image";

export default function AiAutomationPage() {
  return (
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image 
          src="/images/life.jpg" 
          alt="Life" 
          fill
          className="absolute inset-0 object-cover z-0"
        />
        
        {/* Overlay for better text readability */}
        <div className="overflow-y-auto pb-32 absolute inset-0 bg-opacity-50 z-1000 max-w-7xl">

          {/* Content overlay */}
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 color-white">Artificial Intelligence</h1>
            
            {/* What is AI Section */}
            <div className="mt-32 mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">What is Artificial Intelligence?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0}>
                  <strong>Definition:</strong> Artificial Intelligence (AI) is technology that can perform tasks that typically require human intelligence, 
                  such as recognizing speech, making decisions, or solving problems.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.1}>
                  <strong>In Daily Life:</strong> From smartphone assistants to recommendation systems, AI is already part of our daily lives 
                  and will continue to shape our future.
                </AnimatedListItem>
              </ul>
            </div>

            {/* How AI Works Section */}
            <div className="mt-32 mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">How does Artificial Intelligence work?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.2}>
                  <strong>Pattern Recognition:</strong> Think of AI like a really smart pattern-finding machine. It learns by looking at millions of examples, 
                  just like how you learned to recognize a dog by seeing lots of different dogs.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.3}>
                  <strong>Tokens:</strong> AI reads text by breaking it into small pieces called &ldquo;tokens&rdquo; - think of them like puzzle pieces. 
                  Each word or part of a word becomes a token that the AI can understand and work with.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.4}>
                  <strong>Context:</strong> Just like you remember what we were talking about earlier in our conversation, 
                  AI uses &ldquo;context&rdquo; to keep track of the whole conversation, not just the last thing you said.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.5}>
                  <strong>Prediction:</strong> The AI uses math patterns to predict what comes next, similar to how you might finish someone&rsquo;s sentence 
                  because you&rsquo;ve heard similar conversations before. The more examples it learns from, the better it gets!
                </AnimatedListItem>
              </ul>
            </div>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}