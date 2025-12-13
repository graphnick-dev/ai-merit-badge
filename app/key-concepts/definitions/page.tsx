import CurriculumNav from "../../_components/CurriculumNav";
import StepNav from "../../_components/StepNav";

export default function KeyConceptsDefinitionsPage() {
  return (
    <main className="p-8">
      <CurriculumNav />
      <h1 className="text-2xl font-bold mb-4">Key Concepts: Definitions</h1>
      <p>Define and explore the key terms of Artificial Intelligence and Automation.</p>
      {/* Add interactive definitions or flashcards here */}
      <StepNav />
    </main>
  );
}