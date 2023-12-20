import { ReactNode } from "react";

export default function MaxWidthWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-7xl mx-auto px-2">
      {children}
    </div>
  )
}