import { FC } from "react"
import Select from "react-select"

import { IStateOption } from "../../../types/AllQuiz.interfaces"

interface ICustomSelect {
  isVisible: boolean
  optionArray?: IStateOption[]
  onSelectHandler: (value: IStateOption | null) => void
}

const CustomSelect: FC<ICustomSelect> = ({
  isVisible,
  optionArray,
  onSelectHandler,
}) => {
  if (isVisible) {
    return (
      <Select
        options={optionArray}
        className="w-auto text-center"
        placeholder="Выбрать пункт..."
        onChange={(value) => onSelectHandler(value)}
        value={optionArray}
      />
    )
  } else return null
}

export default CustomSelect
