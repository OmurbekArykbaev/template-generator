import { useSelector } from "react-redux"
import Button from "./components/Button"
import Input from "./components/Input"
import Legend from "./components/Legend"
import styles from "./index.module.css"
import { useAppSelector } from "../../hooks/RtkHooks"

const Quiz = () => {
  const state = useAppSelector((state) => state.quiz.value)
  return (
    <fieldset className="flex  p-4 border w-full ">
      <Legend>Привет</Legend>
      <div className="">
        <Input id="firstQuestion" name="firstQuestion" value={"as"}>
          Да
        </Input>
        <Input id="firstQuestion" name="firstQuestion" value={"as"}>
          Да
        </Input>
        <Input id="firstQuestion" name="firstQuestion" value={"as"}>
          Да
        </Input>
      </div>
    </fieldset>
  )
}

export default Quiz
