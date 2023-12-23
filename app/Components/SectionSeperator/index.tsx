import classNames from "~/utils/classNames"

interface SectionSeperatorProps {
  children: React.ReactNode
}

export default function SectionSeperator({ children }: SectionSeperatorProps) {
  return <div className="flex">
    <span className={classNames(
      "rounded-lg bg-sectionheadingcolor px-16 py-5 text-black",
      "transform-gpu -skew-x-6",
      "font-medium"
    )}>
      {children}
    </span>
  </div>
}