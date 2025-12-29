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
            <h1 className="font-bold mb-4 color-white">Automation</h1>
            <h2 className="font-bold mb-4 color-white">In Daily Life</h2>
            <p className="mb-6">What are some examples of automation in everyday life?</p>
            {/* Add brainstorming or quiz components here */}
             <ul className="space-y-4 mt-16">
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0}>
                  <strong>Automatic Car Doors:</strong> Sliding doors at grocery stores and elevators that open when they detect motion or pressure, without any manual operation.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.1}>
                  <strong>Coffee Makers with Timers:</strong> Programmable coffee machines that automatically start brewing at a set time each morning without human intervention.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.2}>
                  <strong>Washing Machines:</strong> Appliances that automatically run through wash, rinse, and spin cycles based on pre-programmed settings and timers.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.3}>
                  <strong>Street Lights:</strong> Traffic lights that operate on fixed timers or simple sensors, changing colors automatically without human control.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.4}>
                  <strong>Automatic Sprinkler Systems:</strong> Garden and lawn sprinklers that turn on and off based on programmed schedules or basic soil moisture sensors.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.5}>
                  <strong>Garage Door Openers:</strong> Remote-controlled systems that automatically open and close garage doors with the push of a button or sensor activation.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.6}>
                  <strong>Automatic Toilets:</strong> Public restroom toilets that flush automatically when motion sensors detect someone has finished using them.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.7}>
                  <strong>Dishwashers:</strong> Kitchen appliances that automatically run through wash and dry cycles once loaded and started, following preset programs.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.8}>
                  <strong>Security System Alarms:</strong> Home and building alarms that automatically activate when doors or windows are opened during armed periods.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.9}>
                  <strong>Vending Machines:</strong> Automated systems that dispense products after receiving payment, using mechanical processes to select and deliver items.
                </AnimatedListItem>
              </ul>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}