import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function PromptEngineeringPage() {
  return (
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image 
          src="/images/communicating.jpg" 
          alt="Communication with AI" 
          fill
          className="absolute inset-0 object-cover z-0"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-50 z-1000 max-w-7xl content-overlay">

          {/* Content overlay */}
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 text-white">Prompt Engineering</h1>
            <h2 className="font-bold mb-4 text-white">How to Talk to AI Effectively</h2>
            
            {/* Opening Question */}
            <div className="mb-8 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Think About This:
              </h3>
              <p className="text-gray-800 text-lg italic">
                If you asked someone to &ldquo;write something,&rdquo; you might get a grocery list, a poem, 
                or a math equation. But if you asked them to &ldquo;write a friendly email to my teacher 
                explaining why I was absent yesterday,&rdquo; you&rsquo;d get exactly what you need. 
                The same principle applies to AI—the more specific and clear your instructions, 
                the better results you&rsquo;ll get!
              </p>
            </div>

            <p className="mb-132">Let&rsquo;s learn how to communicate with AI systems effectively through prompt engineering.</p>

            {/* What is Prompt Engineering */}
            <div className="mb-8">
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 mb-64rounded-[1em] bg-red-100 rounded-lg text-black" delay={0}>
                    <h3 className="text-xl font-semibold mb-4">What is Prompt Engineering?</h3>
                  Prompt engineering is the skill of writing clear, specific instructions to get the best possible responses from AI systems like ChatGPT, Bard, or other language models.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.1}>
                  <strong>Why It Matters:</strong> AI systems are very literal and work best when given detailed instructions. A well-crafted prompt can mean the difference between getting a helpful response or something completely off-topic.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.2}>
                  <strong>Real-World Skill:</strong> Learning to communicate clearly with AI is becoming as important as learning to use a search engine or write an email—it&rsquo;s a valuable skill for school, work, and daily life.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Zero-Shot Prompts */}
            <div className="mt-64 mb-8">
              <div className="mb-6 p-4 bg-blue-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">Zero-Shot Prompts</h3>
                <p className="text-gray-800 font-medium">
                  Zero-shot prompts give the AI a task without any examples—you just describe what you want.
                </p>
              </div>
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.3}>
                  <strong>When to Use:</strong> For simple, straightforward tasks where the instruction is clear and you don&rsquo;t need to show a specific format or style.
                  <div className="mt-3 p-3 bg-gray-800 rounded text-green-300 font-mono text-sm">
                    Example: &ldquo;Explain photosynthesis in simple terms that a 5th grader could understand.&rdquo;
                  </div>
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.4}>
                  <strong>Best Practices:</strong> Be specific about what you want, who the audience is, and what format you prefer. Include context that helps the AI understand your needs.
                  <div className="mt-3 p-3 bg-gray-800 rounded text-green-300 font-mono text-sm">
                    <p className="mb-4">Poor: &ldquo;Tell me about the Civil War.&rdquo;</p>
                    <p>Good: &ldquo;Write a 3-paragraph summary of the American Civil War for a middle school history report.&rdquo;</p>
                  </div>
                </AnimatedListItem>
              </ul>
            </div>

            {/* One-Shot Prompts */}
            <div className="mt-64 mb-8">
              <div className="mb-6 p-4 bg-green-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">One-Shot Prompts</h3>
                <p className="text-gray-800 font-medium">
                  One-shot prompts include a single example to show the AI exactly what format or style you want.
                </p>
              </div>
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.5}>
                  <strong>When to Use:</strong> When you need a specific format, style, or structure that might not be obvious from instructions alone.
                  <div className="mt-3 p-3 bg-gray-800 rounded text-green-300 font-mono text-sm">
                    Example: <br /> &ldquo;Help me create cards for a website that will show six different examples. Format like this example:<br/>
                    <pre className="mt-2 text-xs overflow-x-auto">
{`<div class="card">
  <h3>Title Here</h3>
  <p>Description goes here</p>
  <button>Learn More</button>
</div>`}
                    </pre>
                    Now create HTML cards for: Science Fair Projects, Book Reviews, Recipe Collection&rdquo;
                  </div>
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.6}>
                  <strong>Benefits:</strong> Helps ensure consistency in output format and reduces the need for follow-up corrections. The AI can pattern-match from your example.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Multi-Shot Prompts */}
            <div className="mt-64 mb-8">
              <div className="mb-6 p-4 bg-purple-100 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-white">Multi-Shot Prompts</h3>
                <p className="text-gray-800 font-medium">
                  Multi-shot prompts provide multiple examples to teach the AI a pattern or demonstrate complex reasoning.
                </p>
              </div>
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.7}>
                  <strong>When to Use:</strong> For complex tasks, creative writing with a specific style, or when you need the AI to learn a particular pattern of thinking or formatting.
                  <div className="mt-3 p-3 bg-gray-800 rounded text-green-300 font-mono text-sm">
                    Example: &ldquo;I&rsquo;ll show you how to turn facts into interesting story openings:<br/><br/>
                    <strong>Fact:</strong> The Eiffel Tower was built in 1889.<br/>
                    <strong>Story Opening:</strong> Marie squinted up at the iron giant that had appeared in her city, wondering if this strange tower would ever feel like home.<br/><br/>
                    <strong>Fact:</strong> Honeybees communicate through dancing.<br/>
                    <strong>Story Opening:</strong> In the golden hive, Buzz performed the most important dance of her life—one that could save her entire colony.<br/><br/>
                    Now you try with: Dolphins use echolocation to navigate.&rdquo;
                  </div>
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.8}>
                  <strong>Benefits:</strong> Enables more sophisticated and nuanced responses. Great for teaching the AI complex patterns or creative styles that would be hard to explain with words alone.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Practical Tips */}
            <div className="mt-64 mb-8">
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] bg-orange-100 rounded-lg text-black" delay={0.9}>
              <h3 className="text-xl font-semibold mb-4 text-white">Practical Tips for Better Prompts</h3>
                  <strong>Be Specific About Your Audience:</strong> Mention who will read or use the output—&ldquo;for middle schoolers,&rdquo; &ldquo;for my science teacher,&rdquo; or &ldquo;for beginners.&rdquo;
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.0}>
                  <strong>Specify Length and Format:</strong> Ask for &ldquo;3 bullet points,&rdquo; &ldquo;a 2-paragraph explanation,&rdquo; or &ldquo;a numbered list of 5 items.&rdquo;
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.1}>
                  <strong>Give Context:</strong> Explain why you need the information—&ldquo;for a school presentation,&rdquo; &ldquo;to help with homework,&rdquo; or &ldquo;to understand a concept better.&rdquo;
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.2}>
                  <strong>Iterate and Refine:</strong> If the first response isn&rsquo;t quite right, ask follow-up questions or provide more specific guidance to improve the output.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.3}>
                  <strong>Use Role-Playing:</strong> Ask the AI to take on a role—&ldquo;Act as a friendly tutor and explain this math concept&rdquo; or &ldquo;Respond as if you&rsquo;re a museum guide.&rdquo;
                </AnimatedListItem>
              </ul>
            </div>

            {/* Common Prompt Patterns */}
            <div className="mt-64 mb-8">
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] bg-green-100 text-black rounded-lg" delay={1.4}>
              <h3 className="text-xl font-semibold mb-4 text-white">Common Prompt Patterns That Work Well</h3>
                  <strong>The &ldquo;Explain Like I&rsquo;m&rdquo; Pattern:</strong> &ldquo;Explain quantum physics like I&rsquo;m a 10-year-old who loves magic tricks.&rdquo;
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.5}>
                  <strong>The Comparison Pattern:</strong> &ldquo;Compare and contrast democracy and monarchy, focusing on how decisions are made in each system.&rdquo;
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.6}>
                  <strong>The Step-by-Step Pattern:</strong> &ldquo;Provide a step-by-step guide for solving algebraic equations, with an example for each step.&rdquo;
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.7}>
                  <strong>The Creative Constraint Pattern:</strong> &ldquo;Write a short story about friendship that takes place entirely in a library and includes a mysterious book.&rdquo;
                </AnimatedListItem>
              </ul>
            </div>

            {/* Practice Activity */}
            <div className="mt-64 mb-8 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Try This Exercise:
              </h3>
              <p className="text-gray-800 mb-4">
                Practice improving these weak prompts by making them more specific:
              </p>
              <ul className="text-gray-800 ml-4 space-y-2">
                <li><strong>Weak:</strong> &ldquo;Tell me about space&rdquo;</li>
                <li><strong>Better:</strong> &ldquo;Explain how rockets overcome Earth&rsquo;s gravity to reach space, using simple terms a middle schooler could understand&rdquo;</li>
                
              </ul>
            <p className="text-gray-800 mt-8 mb-4"><strong>Your Turn:</strong> Improve these prompts:</p>
              <ul className="text-gray-800 ml-4 pl-8 space-y-2 mt-4 list-disc">
                <li >&ldquo;Help me with math&rdquo;   </li>
                <li className="mt-6">&ldquo;Write a poem&rdquo; <span className="text-sm">(Hint: This would benefit from a one-shot prompt showing the specific poetry format you want)</span></li>
                <li className="mt-4">&ldquo;Make up some jokes&rdquo; <span className="text-sm">(Hint: This would work better as a multi-shot prompt showing 2-3 examples)</span></li>
                <li className="mt-4"> <span>&ldquo;Explain photosynthesis&rdquo;</span> <span className="text-sm">(Hint: Add context about who needs this explanation and why)</span></li>
                </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-16 mb-12 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Remember:
              </h3>
              <p className="text-gray-800">
                Good prompt engineering is like being a good communicator—it takes practice! Start with 
                simple, clear instructions and gradually experiment with more sophisticated techniques as 
                you become more comfortable. The key is to think about what the AI needs to know to give 
                you exactly what you&rsquo;re looking for.
              </p>
            </div>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}