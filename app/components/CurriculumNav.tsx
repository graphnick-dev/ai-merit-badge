"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { curriculum } from "../_curriculum";

export default function CurriculumNav({ currentStep }: { currentStep?: string }) {
  const pathname = usePathname();
  return (
    <nav className="mb-8">
      <ul className="flex flex-col gap-2">
        <li className="mb-4">
          <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white ai-merit-badge-title cursor-pointer">
            AI Merit Badge  <Image src='/images/ai-badge.webp' alt="AI Merit Badge" className='inline' width={40} height={40} />
          </Link>
        </li>
        {curriculum.map((section, idx) => (
          <li key={section.path}>
            <Link
              href={section.path}
              className={`cursor-pointer font-bold ${pathname.startsWith(section.path) ? "text-blue-600" : "text-gray-800"}`}
            >
              {idx + 1}. {section.title}
            </Link>
            {pathname.startsWith(section.path) && section.steps && (
              <ul className="ml-4 mt-1 flex flex-col gap-1">
                {section.steps.map((step) => (
                  <li key={step.path}>
                    <Link
                      href={step.path}
                      className={`cursor-pointer text-sm ${pathname === step.path ? "text-blue-500 underline" : "text-gray-600"}`}
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
