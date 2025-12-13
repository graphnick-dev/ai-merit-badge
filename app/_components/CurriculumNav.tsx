"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { curriculum } from "../_curriculum";

export default function CurriculumNav({ currentStep }: { currentStep?: string }) {
  const pathname = usePathname();
  return (
    <nav className="mb-8">
      <ul className="flex flex-col gap-2">
        {curriculum.map((section, idx) => (
          <li key={section.path}>
            <Link
              href={section.path}
              className={`font-bold ${pathname.startsWith(section.path) ? "text-blue-600" : "text-gray-800"}`}
            >
              {idx + 1}. {section.title}
            </Link>
            {pathname.startsWith(section.path) && section.steps && (
              <ul className="ml-4 mt-1 flex flex-col gap-1">
                {section.steps.map((step) => (
                  <li key={step.path}>
                    <Link
                      href={step.path}
                      className={`text-sm ${pathname === step.path ? "text-blue-500 underline" : "text-gray-600"}`}
                    >
                      {step.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
