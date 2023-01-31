import { useAppSelector } from "../../../hooks/RtkHooks"

const Templates = {
  InternetNeRabotaet: "Не работает интернет",
  Break: "Наблюдаются периодические обрывы сети",
  SlowSpeed: "Низкая скорость интернета",
  IPTV: "Проблема с телевидением",
}

const useGetTypeIssue = () => {
  const typeIssue = useAppSelector((state) => state.typeIssue.type)

  switch (typeIssue) {
    case "InternetNeRabotaet":
      return Templates.InternetNeRabotaet
    case "Break":
      return Templates.Break
    case "SlowSpeed":
      return Templates.SlowSpeed
    case "IPTV":
      return Templates.IPTV

    default:
      return "Тип заявки не указан"
  }
}

export default useGetTypeIssue
