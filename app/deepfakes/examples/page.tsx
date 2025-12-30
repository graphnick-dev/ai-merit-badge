import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

// YouTube embed component
function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="relative w-full h-0 pb-[56.25%] mb-4"> {/* 16:9 aspect ratio */}
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-lg"
        src={`https://www.youtube.com/embed/${videoId}?rel=0`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

export default function DeepfakeExamplesPage() {
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
            <h1 className="font-bold mb-4 color-white">Deepfake Examples</h1>
            <h2 className="font-bold mb-4 color-white">Real Examples to Help You Understand</h2>
            
            {/* Warning Notice */}
            <div className="mb-8 p-6 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                ⚠️ Important Notice:
              </h3>
              <p className="text-gray-800">
                These examples are shown for educational purposes to help you recognize deepfake technology. 
                Always be critical of videos you see online and verify information from multiple trusted sources.
              </p>
            </div>

            <p className="mb-8">Here are some examples of deepfake technology to help you understand how realistic and convincing these videos can be.</p>

            {/* Deepfake Examples */}
            <ul className="space-y-12 list-none">
              
              {/* Example 1 */}
              <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                  1. Celebrity Face Swap Example
                </h3>
                <YouTubeEmbed 
                  videoId="oxXpB9pSETo" 
                  title="Deepfake Technology Demonstration"
                />
                <p className="text-sm text-gray-300 italic">
                 It is becoming harder to distinguish deepfakes from real videos.
                </p>
              </AnimatedListItem>

              {/* Example 2 */}
              <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.2}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                  2. Political Figure Recreation
                </h3>
                <p className="text-white mb-4">
                  Some deepfakes attempt to trick people into believing false information by impersonating political or other influential figures.
                </p>
                <YouTubeEmbed 
                  videoId="B4jNttRvbpU" 
                  title="Political Figure Deepfake Example"
                />

              </AnimatedListItem>

              <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.6}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                  3. AI Actors
                </h3>
                <p className="text-white mb-4">
                    Is it ok even if people know it is AI? Some say it isn't about technology, it is about fairness.
                </p>
                <YouTubeEmbed 
                  videoId="qdYBwCwCtis" 
                  title="Tilly Norwood"
                />
              </AnimatedListItem>
              
              <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.6}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--bsa-red)' }}>
                  4. Deepfake or Real?
                </h3>
                <p className="text-white mb-4">
                    Sometimes AI can be funny or entertaining, especially when it is obviously AI. But people still eath this up as real.
                </p>
                <YouTubeEmbed 
                  videoId="cHgxEjlgnow" 
                  title="Tilly Norwood"
                />
              </AnimatedListItem>
            </ul>

            <div className="mt-12 mb-8">
              <h3 className="text-xl font-semibold mb-6 color-white">How hard is it to spot deepfakes?</h3>
              <ul className="space-y-12 list-none">
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={0.8}>
                  AI is getting too good anymore to easily spot.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.0}>
                  If it is something someone wouldn't normally do, like a politician saying/doing something outrageous, be skeptical.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.2}>
                  <strong>Background and Context:</strong> Check if the background, clothing, or setting seems consistent with when and where the person would have been.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.2}>
                  Some will play on your emotions so that you overlook tell tales of AI.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-6 rounded-[1em] backdrop-blur-sm bg-white/20" delay={1.4}>
                  <strong>Source Verification:</strong> Always check who posted the video, when it was created, and whether reputable news sources have verified its authenticity.
                </AnimatedListItem>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-16 mb-12 p-6 bg-white bg-opacity-90 rounded-lg">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--bsa-red)' }}>
                Remember:
              </h3>
              <p className="text-gray-800">
                As deepfake technology becomes more sophisticated, it&rsquo;s increasingly important to be 
                skeptical of videos you see online, especially if they seem unusual or are used to support 
                controversial claims. When in doubt, check multiple trusted sources and ask adults or 
                teachers to help you verify information.
              </p>
            </div>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}