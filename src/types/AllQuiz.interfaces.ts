export interface IQuiz {
  id: number
  questionTitle: string
  falseResult?: string
  trueResult?: string
  stateOption?: IStateOption[]
}

export interface IStateOption {
  value: string
  label: string
  answer: string
}
