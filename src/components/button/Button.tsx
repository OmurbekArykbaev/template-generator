import { ReactNode, FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react"
import cn from "classnames"
interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
}

const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    <button
      className={cn(
        "flex justify-center items-center py-3 px-10 bg-green-300 text-md font-bold rounded-lg text-green-700 active:scale-90",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
