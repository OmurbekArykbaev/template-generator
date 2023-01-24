import { ReactNode } from "react"

const Legend = ({ children }: { children: ReactNode }) => {
  return <legend className="block text-lg font-bold">{children}</legend>
}

export default Legend
