import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function SchoolPage() {
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
        <div className="absolute inset-0 bg-opacity-50 z-1000 max-w-7xl content-overlay ">

          {/* Content overlay */}
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 color-white">AI & Automation</h1>
            <h2 className="font-bold mb-4 color-white">At School</h2>
            <p className="mb-64">What are some examples of AI and automation at school?</p>

              <ul className="space-y-12 mt-16">
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0}>
                  <strong>Personalized Learning:</strong> AI can create customized learning plans based on a student&rsquo;s strengths and weaknesses, helping them learn at their own pace.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.1}>
                  <strong>Smart Grading:</strong> AI can automatically grade multiple-choice tests, essays, and even math problems, giving teachers more time to focus on teaching.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.2}>
                  <strong>Language Translation:</strong> AI tools help students who speak different languages understand lessons and communicate with classmates and teachers.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.3}>
                  <strong>Reading Assistants:</strong> AI can help students with reading difficulties by reading text aloud or suggesting simpler words for complex concepts.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.4}>
                  <strong>Virtual Tutors:</strong> AI chatbots can answer student questions 24/7, helping with homework and explaining difficult topics when teachers aren&rsquo;t available.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.5}>
                  <strong>Attendance Tracking:</strong> Some schools use AI-powered cameras or apps to automatically track who&rsquo;s present in class.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.6}>
                  <strong>Library Systems:</strong> AI helps students find the right books and resources by understanding what they&rsquo;re looking for, even if they don&rsquo;t know the exact title.
                </AnimatedListItem>
              </ul>

            <StepNav />
          </div>
        </div>
        
      </div>
  );
}