"use client";
import { useRouter, usePathname } from "next/navigation";
import { curriculum } from "../_curriculum";

export default function StepNav() {
  const router = useRouter();
  const pathname = usePathname();

  // Find current section and step
  let sectionIdx = -1, stepIdx = -1;
  curriculum.forEach((section, sIdx) => {
    if (pathname.startsWith(section.path)) {
      sectionIdx = sIdx;
      if (section.steps) {
        section.steps.forEach((step, stIdx) => {
          if (pathname === step.path) stepIdx = stIdx;
        });
      }
    }
  });

  function goToStep(sIdx: number, stIdx: number) {
    const path = curriculum[sIdx].steps[stIdx].path;
    router.push(path);
  }

  function handleBack() {
    if (sectionIdx === -1) return;
    
    // If we're on a subsection (stepIdx >= 0)
    if (stepIdx >= 0) {
      if (stepIdx > 0) {
        // Go to previous step in current section
        goToStep(sectionIdx, stepIdx - 1);
      } else {
        // Currently on first step of section, go to current section's root
        const currentSection = curriculum[sectionIdx];
        router.push(currentSection.path);
      }
    } else {
      // Currently on a section root, go to previous section's last step
      if (sectionIdx > 0) {
        const prevSection = curriculum[sectionIdx - 1];
        goToStep(sectionIdx - 1, prevSection.steps.length - 1);
      }
    }
  }

  function handleNext() {
    if (sectionIdx === -1) return;
    
    if (stepIdx === -1) {
      // Currently on section root, go to first step of current section
      if (curriculum[sectionIdx].steps?.length > 0) {
        goToStep(sectionIdx, 0);
      }
    } else {
      // Currently on a subsection
      const section = curriculum[sectionIdx];
      if (stepIdx < section.steps.length - 1) {
        goToStep(sectionIdx, stepIdx + 1);
      } else if (sectionIdx < curriculum.length - 1) {
        // Go to the next section's root page
        const nextSection = curriculum[sectionIdx + 1];
        router.push(nextSection.path);
      }
    }
  }

  return (
    <div className="flex mt-24 gap-4">
      <button
        onClick={handleBack}
        className=" px-4 py-2 bg-blue-400 rounded disabled:opacity-50 hover:bg-blue-500 cursor-pointer disabled:cursor-not-allowed transition-colors text-sm"
        disabled={sectionIdx === 0 && stepIdx === -1}
      >
        Back
      </button>
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50 hover:bg-blue-700 cursor-pointer disabled:cursor-not-allowed transition-colors text-sm"
        disabled={sectionIdx === curriculum.length - 1 && stepIdx === curriculum[sectionIdx].steps.length - 1}
      >
        Next
      </button>
    </div>
  );
}
