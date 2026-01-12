import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function SchoolPage() {
  return (
      <div className="relative min-h-screen">
        {/* Background Image */}
        <Image 
          src="/images/automation.jpg" 
          alt="Automation" 
          fill
          className="absolute inset-0 object-cover z-0"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-50 z-1000 max-w-7xl content-overlay ">

          {/* Content overlay */}
          <div className="relative z-20 p-8 rounded-lg" >
            <h1 className="font-bold mb-4 color-white">Automation</h1>
            <h2 className="font-bold mb-4 color-white">At School</h2>
            <p className="mb-64">What are some examples of automation at school?</p>

              <ul className="space-y-12 mt-216">
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0}>
                  <strong>School Bell Systems:</strong> Automated bells that ring at scheduled times throughout the day to signal class changes, lunch, and dismissal without manual operation.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.1}>
                  <strong>Cafeteria Payment Systems:</strong> Automated lunch card scanners that deduct meal costs from student accounts and track cafeteria purchases automatically.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.2}>
                  <strong>Multiple-Choice Grading Machines:</strong> Optical scanners that automatically grade bubble-sheet tests by detecting pencil marks and calculating scores instantly.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.3}>
                  <strong>Library Book Check-Out Systems:</strong> Automated barcode scanners that track which books are borrowed and returned, and send automated overdue notices.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-black/30" delay={0.4}>
                  <strong>Attendance Management Systems:</strong> Automated daily attendance tracking that marks students absent or present and sends automated notifications to parents.
                </AnimatedListItem>
              </ul>

            <StepNav />
          </div>
        </div>
        
      </div>
  );
}