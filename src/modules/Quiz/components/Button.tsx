import { ReactNode, FC } from "react"
interface Props {
  children: ReactNode
}

const Button: FC<Props> = ({ children }) => {
  return <button className="flex py-3 px-6 bg-red-200">{children}</button>
}

export default Button
