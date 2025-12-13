import CurriculumNav from "../../_components/CurriculumNav";
import StepNav from "../../_components/StepNav";

export default function KeyConceptsFlashcardsPage() {
  return (
    <main className="p-8">
      <CurriculumNav />
      <h1 className="text-2xl font-bold mb-4">Key Concepts: Flashcards</h1>
      <p>Test your knowledge of key terms with interactive flashcards.</p>
      {/* Add flashcard interactivity here */}
      <StepNav />
    </main>
  );
}