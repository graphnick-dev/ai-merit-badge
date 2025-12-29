import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
        <div className="relative z-20 p-8 bg-filter backdrop-blur-sm rounded-lg" >
          <h1 className="text-5xl font-bold mb-6 color-white"><span>AI Merit Badge</span> <Image src='/images/ai-badge.webp' alt="AI Merit Badge" className='inline' width={150} height={150} /></h1>
          <h2 className="text-2xl font-bold mb-4 color-white">Introduction & Overview</h2>
          
          <div className="mb-8 space-y-12">
            <p className="text-lg">Welcome to the Artificial Intelligence Merit Badge curriculum!</p>
            
            <div className="bg-opacity-10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Session Goals:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Learn what AI is and why it matters in today&apos;s world</li>
                <li>Understand key concepts and terminology</li>
                <li>Explore AI and automation in daily life</li>
                <li>Discuss ethics and responsible AI use</li>
                <li>Practice communicating with AI systems</li>
                <li>Discover career opportunities in AI</li>
              </ul>
            </div>
          </div>
          
          <div className="flex gap-4">
            <Link 
              href="/key-concepts" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Start Learning →
            </Link>
          </div>
        </div>
      </div>
      
    </div>
  );
}
