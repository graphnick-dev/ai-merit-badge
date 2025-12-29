import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function GuidelinesPage() {
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
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 color-white">AI Safety Guidelines</h1>
            <h2 className="font-bold mb-4 color-white">How Can We Use AI Safely and Responsibly?</h2>
            
            {/* Opening Question */}
            <div className="mb-8 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Think About This:
              </h3>
              <p className="text-gray-800 text-lg italic">
                If you were creating rules for your school about how students should use AI tools 
                for homework, research, and projects, what guidelines would you suggest? What would 
                be allowed, what would be prohibited, and why?
              </p>
            </div>

            <p className="mb-6">Let&rsquo;s explore important guidelines that can help everyone use AI technology safely, ethically, and responsibly.</p>

            {/* Personal Safety Guidelines */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">Personal Safety Guidelines</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0}>
                  <strong>Protect Your Personal Information:</strong> Never share your real name, address, phone number, school, or other personal details with AI systems, especially if they might store or share this information.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.1}>
                  <strong>Think Before You Share:</strong> Be careful about uploading photos, documents, or other files to AI services. Once uploaded, you may lose control over how that content is used.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.2}>
                  <strong>Verify Information:</strong> Always double-check facts, dates, and other important information that AI provides. AI can make mistakes or &ldquo;hallucinate&rdquo; false information.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.3}>
                  <strong>Use Trusted Platforms:</strong> Stick to well-known, reputable AI services and avoid suspicious or unknown AI tools that might not protect your data properly.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Academic and Educational Guidelines */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">Academic and Educational Guidelines</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.4}>
                  <strong>Understand Your School&rsquo;s Policy:</strong> Learn what your school allows and prohibits when it comes to AI use for homework, projects, and tests.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.5}>
                  <strong>Use AI as a Learning Tool, Not a Replacement:</strong> Use AI to help you understand concepts, brainstorm ideas, or check your work—but don&rsquo;t let it do your thinking for you.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.6}>
                  <strong>Always Cite AI Assistance:</strong> If you use AI to help with an assignment, be honest about it. Let your teacher know how AI contributed to your work.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.7}>
                  <strong>Don&rsquo;t Skip the Learning:</strong> Avoid using AI for tasks that are meant to help you practice and develop your own skills, like math problems or writing exercises.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Ethical Usage Guidelines */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">Ethical Usage Guidelines</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.8}>
                  <strong>Respect Others&rsquo; Work:</strong> Don&rsquo;t use AI to copy, plagiarize, or steal other people&rsquo;s ideas, writing, or creative work.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.9}>
                  <strong>Avoid Harmful Content:</strong> Don&rsquo;t ask AI to create content that could hurt, embarrass, or harm other people, including fake information or inappropriate images.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.0}>
                  <strong>Consider Bias and Fairness:</strong> Remember that AI can reflect biases. Question AI responses that seem unfair or discriminatory toward certain groups of people.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.1}>
                  <strong>Respect Privacy:</strong> Don&rsquo;t use AI to analyze or process other people&rsquo;s private information, photos, or messages without their permission.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Critical Thinking Guidelines */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">Critical Thinking Guidelines</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.2}>
                  <strong>Question AI Responses:</strong> Don&rsquo;t accept everything AI tells you as fact. Ask yourself: &ldquo;Does this make sense? Could this be wrong?&rdquo;
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.3}>
                  <strong>Cross-Check Important Information:</strong> For important facts, research topics, or decision-making, verify AI information with reliable sources like textbooks, expert websites, or teachers.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.4}>
                  <strong>Understand AI Limitations:</strong> Remember that AI doesn&rsquo;t truly understand topics the way humans do—it&rsquo;s pattern-matching based on training data.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.5}>
                  <strong>Keep Your Own Judgment:</strong> Use AI as a tool to support your thinking, not to replace your own critical thinking and decision-making skills.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Future-Ready Guidelines */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">Future-Ready Guidelines</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.6}>
                  <strong>Stay Informed:</strong> Keep learning about new AI developments and how they might affect your life, education, and future career.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.7}>
                  <strong>Develop Complementary Skills:</strong> Focus on developing uniquely human skills like creativity, empathy, complex problem-solving, and ethical reasoning.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.8}>
                  <strong>Participate in AI Discussions:</strong> Join conversations about AI in your community, school, and society. Your voice matters in shaping how AI is used.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.9}>
                  <strong>Advocate for Responsible AI:</strong> Support the development and use of AI that benefits everyone and reflects good values.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Brainstorming Activity */}
            <div className="mb-8 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Brainstorming Activity:
              </h3>
              <p className="text-gray-800 mb-4">
                With your patrol or troop, discuss these questions and add your own ideas:
              </p>
              <ul className="text-gray-800 ml-4">
                <li className="mb-2">• What other guidelines would you add to this list?</li>
                <li className="mb-2">• What specific rules should schools have about AI use?</li>
                <li className="mb-2">• How can we help others use AI responsibly?</li>
                <li className="mb-2">• What would you do if you saw someone using AI inappropriately?</li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-12 mb-12 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Remember:
              </h3>
              <p className="text-gray-800">
                These guidelines aren&rsquo;t just rules—they&rsquo;re principles that help us use AI in ways 
                that benefit everyone and reflect our best values. As AI technology continues to evolve, 
                we&rsquo;ll need to keep updating and improving these guidelines together.
              </p>
            </div>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}