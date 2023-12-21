import classNames from "~/utils/classNames";

interface ProgressBarProps {
  completePercent: number;
  Total?: number;
}

export default function ProgressBar({ completePercent, Total = 100 }: ProgressBarProps) {
  return (
    <div className="bg-bgcolorprogressbar rounded-full h-[10px] w-full">
      <div
        className={classNames(
          "h-[10px] rounded-l-full",
          "bg-gradient-to-r from-gradientcolor1 to-gradientcolor2"
        )}
        style={{
          width: `${completePercent / Total * 100}%`
        }}
      />
    </div>
  )
}