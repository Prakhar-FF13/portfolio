import classNames from "~/utils/classNames"

type GeneralButtonProps = {
  children: React.ReactNode
  classes?: string
  onClick?: () => void
}

export function GeneralButton({ children, classes = "", onClick }: GeneralButtonProps) {
  return (
    <button
      className={classNames(
        "py-3 px-12 rounded-lg",
        classes
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}