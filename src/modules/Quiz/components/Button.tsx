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
    <button className="flex py-3 px-6 bg-red-200 active:scale-90" {...props}>
      {children}
    </button>
  )
}

export default Button
