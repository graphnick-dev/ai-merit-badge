import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function CareerPathsPage() {
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
            <h1 className="font-bold mb-4 color-white">AI Career Paths</h1>
            <h2 className="font-bold mb-4 color-white">Jobs of the Future</h2>
            
            {/* Opening Question */}
            <div className="mb-8 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Think About This:
              </h3>
              <p className="text-gray-800 text-lg italic">
                Did you know that many jobs today didn&rsquo;t exist 20 years ago? Social media managers, 
                app developers, and drone pilots are all careers that came about because of new technology. 
                AI is creating even more exciting career opportunities that we&rsquo;re just beginning to explore!
              </p>
            </div>

            <p className="mb-6">Let&rsquo;s discover the many ways AI is creating new career opportunities and changing existing jobs.</p>

            {/* AI is Everywhere */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">AI is Already in Many Jobs</h3>
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0}>
                  <strong>Office Workers:</strong> People in offices use AI to write emails faster, create presentations, analyze data, and schedule meetings. AI helps them be more productive and focus on creative problem-solving.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.1}>
                  <strong>Teachers:</strong> Teachers use AI to create lesson plans, grade assignments, and help students who need extra practice. AI tutoring programs can give personalized help to students 24/7.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.2}>
                  <strong>Doctors and Nurses:</strong> Medical professionals use AI to help diagnose diseases, read X-rays, and track patient health. AI can spot patterns that human eyes might miss.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.3}>
                  <strong>Farmers:</strong> Modern farmers use AI-powered drones to monitor crops, robots to plant and harvest, and smart systems to know exactly when plants need water or nutrients.
                </AnimatedListItem>
              </ul>
            </div>

            {/* New AI-Specific Careers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">Careers Built Around AI</h3>
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.4}>
                  <strong>AI Engineer/Programmer:</strong> These are the people who actually build AI systems. They write the code that teaches computers how to think and learn. It&rsquo;s like being an architect, but for digital brains!
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.5}>
                  <strong>Data Scientist:</strong> Think of them as detectives who solve mysteries using huge amounts of information. They help AI systems learn by finding patterns in data that humans might never notice.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.6}>
                  <strong>AI Trainer:</strong> Just like you might train a dog to sit or fetch, AI trainers teach AI systems how to recognize pictures, understand speech, or play games. They make sure AI behaves properly and safely.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.7}>
                  <strong>Robot Designer:</strong> These creative engineers design robots that can help in hospitals, explore space, or even clean your house. They combine AI &ldquo;brains&rdquo; with mechanical &ldquo;bodies.&rdquo;
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.8}>
                  <strong>AI Ethics Specialist:</strong> These important professionals make sure AI is used fairly and safely. They&rsquo;re like referees who make sure everyone plays by the rules and that AI helps all people equally.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Creative and Communication Careers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">Creative Careers Using AI</h3>
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.9}>
                  <strong>AI Content Creator:</strong> These creative professionals use AI to help make videos, write stories, design graphics, and create music. They blend human creativity with AI&rsquo;s speed and capabilities.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.0}>
                  <strong>UX Designer for AI:</strong> These designers figure out how to make AI easy and fun to use. They decide where buttons go, what colors to use, and how AI should &ldquo;talk&rdquo; to people.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.1}>
                  <strong>AI Translator:</strong> While AI can translate languages, human experts are still needed to make sure the translations sound natural and capture the real meaning, especially for important documents or creative writing.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Skills for AI Careers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">Skills That Matter for AI Careers</h3>
              <div className="mb-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-gray-800 font-medium">
                  You don&rsquo;t have to be a math genius to work with AI—many different skills are valuable!
                </p>
              </div>
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.2}>
                  <strong>Problem-Solving:</strong> Being able to break big problems into smaller pieces and think of creative solutions is super valuable in AI work.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.3}>
                  <strong>Communication:</strong> You need to explain complex AI concepts to people who aren&rsquo;t tech experts. Being able to teach and communicate clearly is crucial.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.4}>
                  <strong>Curiosity:</strong> AI is always changing and improving. People who love to learn new things and ask &ldquo;what if?&rdquo; do really well in AI careers.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.5}>
                  <strong>Teamwork:</strong> AI projects usually involve lots of different experts working together—programmers, designers, subject matter experts, and more.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Getting Started */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 color-white">How to Prepare for AI Careers</h3>
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.6}>
                  <strong>Stay Curious:</strong> Use AI tools like ChatGPT, experiment with AI art generators, and try programming games like Scratch to understand how technology works.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.7}>
                  <strong>Practice Communication:</strong> Work on explaining complicated ideas in simple ways. This skill is valuable whether you&rsquo;re training AI or helping others understand it.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.8}>
                  <strong>Learn the Basics:</strong> You don&rsquo;t need to be a coding expert right away, but understanding basic computer skills and logical thinking will help in any AI-related career.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.9}>
                  <strong>Think About Ethics:</strong> Practice thinking about fairness, kindness, and doing the right thing. These values are essential as AI becomes more powerful.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Practice Activity */}
            <div className="mb-8 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Career Exploration Activity:
              </h3>
              <p className="text-gray-800 mb-4">
                Think about your current interests and hobbies. How might AI be used in those areas? For example:
              </p>
              <ul className="text-gray-800 ml-4 pl-4 space-y-2 list-disc">
                <li><strong>Love animals?</strong> AI helps veterinarians diagnose pet illnesses and wildlife researchers track endangered species.</li>
                <li><strong>Enjoy sports?</strong> AI analyzes player performance, helps coaches develop strategies, and even helps referees make better calls.</li>
                <li><strong>Like art or music?</strong> AI creates new forms of digital art and helps musicians compose songs in styles they&rsquo;ve never tried.</li>
                <li><strong>Care about the environment?</strong> AI helps scientists track climate change, optimize renewable energy, and find new ways to reduce pollution.</li>
              </ul>
              <p className="text-gray-800 mt-4 font-medium">
                What interests you most? Can you imagine a career that combines your passions with AI technology?
              </p>
            </div>

            {/* Call to Action */}
            <div className="mt-16 mb-12 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                The Future is Bright:
              </h3>
              <p className="text-gray-800">
                AI careers are some of the fastest-growing job opportunities in the world. The best part? 
                We&rsquo;re still discovering new ways AI can help people and solve problems. The career you end up 
                in might not even exist yet! Stay curious, keep learning, and remember that the most important 
                thing is finding ways to use AI to help others and make the world a better place.
              </p>
            </div>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}