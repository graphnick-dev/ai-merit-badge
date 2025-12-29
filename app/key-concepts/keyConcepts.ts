export interface KeyConcept {
  term: string;
  definition: string;
}

export const keyConcepts: KeyConcept[] = [
  // Foundation: Basic Computer Concepts
  { term: "Data", definition: "Information and facts that computers can store and work with, like numbers, words, pictures, or videos. Example: Your name, age, favorite color, or the temperature outside — all of these are pieces of data." },
  { term: "Databases", definition: "Like a giant, organized filing cabinet where computers store lots of data so they can find it quickly when needed. Example: Your school's database that keeps track of all students' names, grades, and schedules." },
  { term: "Basic Programming", definition: "Writing step-by-step instructions that tell a computer exactly what to do, like a recipe for the computer to follow. Example: Programming a game character to jump when you press the space bar." },
  { term: "Variables", definition: "Named containers in programming that hold information that can change. Think of them like labeled boxes that store different things. Example: A variable called 'score' in a video game that starts at 0 and goes up when you get points." },
  
  // Automation Concepts
  { term: "Tasks", definition: "Jobs or activities that need to be done, whether by people, computers, or AI systems. Example: Cleaning your room, solving a math problem, or organizing your music playlist." },
  { term: "Automation", definition: "Using machines or computers to do jobs automatically without people having to do them step-by-step. Example: Your dishwasher automatically washing dishes, or a robot vacuum cleaning your room." },
  { term: "Triggers", definition: "Events that automatically start something else happening, like pressing a button or reaching a certain time. Example: Your alarm clock going off at 7 AM triggers you to wake up, or motion triggering a security light to turn on." },
  { term: "Workflows", definition: "A series of pre-planned steps that happen in a specific order to get something done, like following a recipe. Unlike AI agents, workflows follow the same path every time. Example: An automated system that always does: receive order → check inventory → charge payment → send confirmation email." },
  
  // AI Fundamentals
  { term: "Artificial Intelligence (AI)", definition: "When computers can think and solve problems like humans do. AI can learn new things, make decisions, and understand what we say. Example: ChatGPT writing stories or essays, or AI systems that can beat humans at chess by learning millions of games." },
  { term: "Machine Learning (ML)", definition: "When computers get better at tasks by practicing and learning from examples, just like how you get better at riding a bike. Example: Netflix learning what movies you like by watching what you've enjoyed before." },
  { term: "Bots", definition: "Computer programs that automatically do repetitive tasks on the internet, kind of like digital robots. Most bots just follow simple rules, but some can use AI to be smarter. Example: A simple bot that automatically likes posts with certain hashtags, or an AI-powered chatbot that can have real conversations." },
  { term: "Digital Workers", definition: "Computer programs that can do jobs that people used to do, especially boring, repetitive tasks. Example: A program that automatically sorts your photos by date or a system that processes online orders." },
  
  // Advanced AI Concepts
  { term: "Narrow AI", definition: "AI that's really good at one specific job but can't do other things. Most AI today is narrow AI. Example: An AI that's amazing at recognizing dogs in photos but can't play chess or write stories." },
  { term: "Artificial Intelligence Agents", definition: "Smart AI systems that can make their own decisions about what tools to use and how to solve problems, rather than just following pre-written steps. They think through each situation and choose their own path. Example: An AI that needs to plan a trip and decides on its own to check weather, book flights, find hotels, and create an itinerary." },
  { term: "General AI", definition: "A super-smart AI that could learn and do any job a human can do — but this doesn't exist yet! \nExample: An AI that could play chess, write stories, cook dinner, and help with homework all equally well." },
  { term: "Superintelligent AI", definition: "An imaginary AI that would be smarter than any human at everything — thinking, creating, solving problems. This doesn't exist and might never exist. Example: An AI that could cure diseases, write better books than Shakespeare, and solve climate change all at once." },
];