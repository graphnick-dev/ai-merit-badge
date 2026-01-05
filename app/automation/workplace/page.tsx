import StepNav from "../../components/StepNav";
import AnimatedListItem from "../../components/AnimatedListItem";
import Image from "next/image";

export default function WorkplacePage() {
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
        <div className="absolute inset-0 bg-opacity-50 z-1000 max-w-7xl content-overlay">

          {/* Content overlay */}
          <div className="relative z-20 p-8 rounded-lg " >
            <h1 className="font-bold mb-4 color-white">Automation</h1>
            <h2 className="font-bold mb-4 color-white">In the Workplace</h2>
            <p className="mb-64">What are some examples of automation in the workplace?</p>
            {/* Add brainstorming or quiz components here */}
            <ul className="space-y-12 mt-216">
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0}>
                  <strong>Assembly Line Conveyor Belts:</strong> Automated moving belts in factories that transport products through different stages of manufacturing without human operation.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.1}>
                  <strong>Email Auto-Reply Systems:</strong> Pre-programmed messages that automatically respond to emails when employees are out of office or unavailable.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.2}>
                  <strong>Time Clock Systems:</strong> Automated employee punch-in machines that track work hours and automatically calculate payroll without manual timekeeping.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.3}>
                  <strong>Inventory Barcode Scanners:</strong> Automated systems that track products in warehouses by scanning barcodes to update stock levels without manual counting.
                </AnimatedListItem>
                <AnimatedListItem className="z-20 p-8 rounded-[1em] backdrop-blur-sm mt-8 max-w-[45ch] bg-white/20" delay={0.4}>
                  <strong>Building HVAC Systems:</strong> Automated heating, ventilation, and air conditioning that maintains office temperature based on preset schedules and thermostat settings.
                </AnimatedListItem>
              </ul>
            
            <StepNav />
          </div>
        </div>
        
      </div>
  );
}