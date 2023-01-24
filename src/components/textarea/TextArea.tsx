import { FC } from "react"

import { TextAreaProps } from "./TextArea.props"

const TextArea: FC<TextAreaProps> = ({
  name,
  id,
  cols = 30,
  rows = 20,
  ...props
}): JSX.Element => {
  return <textarea name={name} id={id} cols={cols} rows={rows} {...props} />
}

export default TextArea
