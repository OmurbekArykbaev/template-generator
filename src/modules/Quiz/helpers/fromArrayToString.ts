import { Result } from "../redux/quiz"

export const fromArrayToString = (array: Result[]): string => {
  const one: string[] = []

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i].userAnswer === "boolean") {
      if (array[i].userAnswer) {
        one.push(array[i].trueResult!)
      } else if (array[i].userAnswer === false) {
        one.push(array[i].falseResult!)
      }
    } else if (typeof array[i].userAnswer === "string") {
      one.push(String(array[i].userAnswer))
    }
  }

  return one.join(", ").toLowerCase()
}
