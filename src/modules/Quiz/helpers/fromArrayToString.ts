import { Result } from "../redux/quiz"

export const fromArrayToString = (array: Result[]): string => {
  const one: string[] = []

  for (let i = 0; i < array.length; i++) {
    if (array[i].userAnswer) {
      one.push(array[i].trueResult)
    } else if (array[i].userAnswer === false) {
      one.push(array[i].falseResult)
    }
  }

  return one.join(", ").toLowerCase()
}
