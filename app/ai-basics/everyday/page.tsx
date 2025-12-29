import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function EverydayPage() {
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
            <h1 className="font-bold mb-4 color-white">AI & Automation</h1>
            <h2 className="font-bold mb-4 color-white">In Daily Life</h2>
            <p className="mb-6">What are some examples of AI and automation in everyday life?</p>
            {/* Add brainstorming or quiz components here */}
             <ul className="space-y-4 mt-16">
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0}>
                  <strong>Smart Assistants:</strong> Siri, Alexa, and Google Assistant help answer questions, play music, set timers, and control smart home devices just by talking to them.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.1}>
                  <strong>Video Recommendations:</strong> YouTube, Netflix, and TikTok use AI to suggest videos you might like based on what you&rsquo;ve watched before.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.2}>
                  <strong>Photo Organization:</strong> Your phone&rsquo;s camera can automatically recognize faces, pets, and objects to help organize and search through your pictures.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.3}>
                  <strong>GPS Navigation:</strong> Maps apps use AI to find the fastest route, avoid traffic jams, and even predict how long your trip will take.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.4}>
                  <strong>Gaming:</strong> Video game characters use AI to make smart decisions and provide challenging gameplay that adapts to your skill level.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.5}>
                  <strong>Email Filters:</strong> AI automatically sorts your email, blocking spam and organizing important messages so you don&rsquo;t miss anything.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.6}>
                  <strong>Online Shopping:</strong> Websites like Amazon use AI to recommend products you might want to buy based on your browsing and purchase history.
                </AnimatedListItem>
              </ul>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}