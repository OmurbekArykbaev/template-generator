import Button from "./components/Button"
import Input from "./components/Input"
import Legend from "./components/Legend"
import styles from "./index.module.css"

const Quiz = () => {
  return (
    <fieldset className="flex p-4 border  ">
      <Legend>Привет</Legend>
      <div className="w-[500px]">
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
