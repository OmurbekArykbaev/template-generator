import { IQuiz } from "../types/AllQuiz.interfaces"

export const breaks: IQuiz[] = [
  {
    id: 0,
    questionTitle: "Есть ли сессия?",
    falseResult: "Сессии нет",
    trueResult: "Сессии есть",
  },
  {
    id: 2,
    questionTitle: "Есть ли логи?",
    falseResult: "Логов нет",
    trueResult: "Логи есть",
  },
  {
    id: 3,
    questionTitle: "Интернет работает в данный момент?",
    falseResult: "интернета в момент разговора нет",
    trueResult: "На момент разговора интернет работает",
  },
]

export const InW: IQuiz[] = [
  {
    id: 0,
    questionTitle: "Есть ли сессия?",
    falseResult: "Сессии нет",
    trueResult: "Сессии есть",
  },
  {
    id: 2,
    questionTitle: "Есть ли логи?",
    falseResult: "Логов нет",
    trueResult: "Логи есть",
  },
  {
    id: 3,
    questionTitle: "Имеются активные в этом доме?",
    falseResult: "Активных нет",
    trueResult: "Активные есть",
  },
  {
    id: 4,
    questionTitle: "Не трогал ли Reset/WPS на роутере?",
    falseResult: "Настройки на роутере не трогал",
    trueResult: "сообщает что трогал настройки на роутере",
  },
  {
    id: 5,
    questionTitle: "Прямое подключение",
    stateOption: [
      {
        value: "Нет возможности на прямую",
        label: "Нет возможности на прямую",
        answer: "Нет возможности подкл-ся на прямую",
      },
      {
        value: "Ошибка 651",
        label: "Ошибка 651",
        answer: "Ошибка 651 - прямого подключения",
      },
      {
        value: "Ошибка 691",
        label: "Ошибка 691",
        answer: "Ошибка 691 - прямого подключения",
      },
      {
        value: "Ошибка 720",
        label: "Ошибка 720",
        answer: "Ошибка 720 - прямого подключения",
      },
    ],
  },
]

export const slow: IQuiz[] = [
  {
    id: 0,
    questionTitle: "Какой у абонента тарифный план?",
    stateOption: [
      {
        value: "Популярный",
        label: "Популярный",
        answer: "тариф Популярный",
      },
      {
        value: "Домашний-60",
        label: "Домашний-60",
        answer: "тариф Домашний-60",
      },
    ],
  },
  {
    id: 1,
    questionTitle: "Есть ли сессия?",
    falseResult: "Сессии нет",
    trueResult: "Сессии есть",
  },
]

export const iptv: IQuiz[] = [
  {
    id: 0,
    questionTitle: "Перезагрузка?",
    falseResult: "Переза",
    trueResult: "", 
  },
]
