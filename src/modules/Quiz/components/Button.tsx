import { ReactNode, FC, DetailedHTMLProps, ButtonHTMLAttributes } from "react"
interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
}

const Button: FC<Props> = ({ children, ...props }) => {
  return (
    <button
      className="flex justify-center items-center py-3 px-10 bg-green-300 text-md font-bold rounded-lg text-green-700 active:scale-90"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
