import { INotWorking } from "../types/reapairRequest.interfaces"

export const data: INotWorking[] = [
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
]
