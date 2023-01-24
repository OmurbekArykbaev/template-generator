import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from "react"

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  children: ReactNode
}

const Input: FC<Props> = ({
  id,
  name,
  value,
  onChange,
  children,
  ...props
}) => {
  return (
    <>
      <input
        className="w-[30px]"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...props}
      />
      <label>{children}</label>
    </>
  )
}

export default Input
