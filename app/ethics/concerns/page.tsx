import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function ConcernsPage() {
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
            <h1 className="font-bold mb-4 color-white">Understanding AI Ethics</h1>
            <h2 className="font-bold mb-4 color-white">What Does It Mean to Use AI Responsibly?</h2>
            
            {/* Opening Question */}
            <div className="mb-8 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Think About This Question:
              </h3>
              <p className="text-gray-800 text-lg italic">
                &ldquo;If an AI makes a decision that affects someone&rsquo;s life—like approving or denying a loan, 
                choosing who gets hired for a job, or diagnosing a medical condition—who should be responsible 
                if that decision is wrong or unfair?&rdquo;
              </p>
            </div>

            <p className="mb-6">Let&rsquo;s explore what AI ethics means and why it matters for our future.</p>

            {/* What Are AI Ethics */}
            <div className="mt-132 mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">What Are AI Ethics?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0}>
                  <strong>Fairness:</strong> AI systems should treat all people equally, regardless of their race, gender, age, or background. They shouldn&rsquo;t discriminate or show bias against or toward certain groups.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.1}>
                  <strong>Transparency:</strong> People should be able to understand how AI makes decisions that affect them. It shouldn&rsquo;t be a mysterious &ldquo;black box&rdquo; that no one can explain.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.2}>
                  <strong>Privacy:</strong> AI should protect people&rsquo;s personal information and not use it in ways that could harm them or violate their privacy.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.3}>
                  <strong>Human Control:</strong> Humans should always have the final say in important decisions, especially those affecting people&rsquo;s lives, safety, and well-being.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Problems AI Could Bring */}
            <div className="mt-32 mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">What Problems Could AI Create?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.4}>
                  <strong>Unfair Bias:</strong> AI might learn from biased data and make unfair decisions, like only showing job ads to certain groups of people or giving different loan rates based on zip codes.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.5}>
                  <strong>Job Displacement:</strong> As AI gets better at doing human tasks, some people might lose their jobs without having new opportunities to learn different skills.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.6}>
                  <strong>Privacy Invasion:</strong> AI systems might collect and use personal information in ways people don&rsquo;t expect or want, potentially violating their privacy.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.7}>
                  <strong>Misinformation:</strong> AI can create realistic fake content (deepfakes) that could spread false information and make it hard to tell what&rsquo;s real.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.8}>
                  <strong>Loss of Human Skills:</strong> If we rely too much on AI for thinking and decision-making, we might lose important human abilities like critical thinking and problem-solving.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Why We Should Care */}
            <div className="mt-32 mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">Why Should We Care About AI Ethics?</h3>
              <ul className="space-y-12">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={0.9}>
                  <strong>Protecting People:</strong> Ethical AI helps ensure that technology serves humanity and doesn&rsquo;t harm individuals or communities.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.0}>
                  <strong>Building Trust:</strong> When AI systems are fair and transparent, people are more likely to trust and benefit from these technologies.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.1}>
                  <strong>Creating a Better Future:</strong> By thinking about ethics now, we can help shape AI development to create a more just and equitable world for everyone.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-black/30" delay={1.2}>
                  <strong>Your Role Matters:</strong> As future leaders and citizens, understanding AI ethics helps you make informed decisions about technology in your life and community.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-32 mb-32 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Remember:
              </h3>
              <p className="text-gray-800">
                AI is a powerful tool that can do amazing things, but like any tool, it&rsquo;s how we use it that matters. 
                By understanding and caring about AI ethics, you&rsquo;re helping ensure that artificial intelligence 
                benefits everyone and reflects our best values as a society.
              </p>
            </div>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}