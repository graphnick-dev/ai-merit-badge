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
            <p className="mb-6">Define and explore the key terms of Artificial Intelligence and Automation.</p>

          <div className="relative z-20 p-8 rounded-[1em] backdrop-blur-sm bg-white/20 max-w-[45ch]" >
            <h3 className="text-xl font-bold mb-3">What is Artificial Intelligence?</h3>
              <p className="mb-2">
                Artificial Intelligence (AI) is technology that can perform tasks that typically require human intelligence, 
                such as recognizing speech, making decisions, or solving problems.
              </p>
              <p>
                From smartphone assistants to recommendation systems, AI is already part of our daily lives 
                and will continue to shape our future.
              </p>
            </div>
          <div className="relative z-20 p-8 rounded-[1em] backdrop-blur-sm bg-white/20 mt-8 max-w-[45ch]" >
            <h3 className="text-xl font-bold mb-3">How does Artificial Intelligence work?</h3>
              <p className="mb-3">
                Think of AI like a really smart pattern-finding machine. It learns by looking at millions of examples, 
                just like how you learned to recognize a dog by seeing lots of different dogs.
              </p>
              <p className="mb-3">
                <strong>Tokens:</strong> AI reads text by breaking it into small pieces called &ldquo;tokens&rdquo; - think of them like puzzle pieces. 
                Each word or part of a word becomes a token that the AI can understand and work with.
              </p>
              <p className="mb-3">
                <strong>Context:</strong> Just like you remember what we were talking about earlier in our conversation, 
                AI uses &ldquo;context&rdquo; to keep track of the whole conversation, not just the last thing you said.
              </p>
              <p>
                The AI uses math patterns to predict what comes next, similar to how you might finish someone&rsquo;s sentence 
                because you&rsquo;ve heard similar conversations before. The more examples it learns from, the better it gets!
              </p>
            </div>
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}