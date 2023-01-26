import { useAppSelector } from "../../../hooks/RtkHooks"

const Templates = {
  InternetNeRabotaet: "Не работает интернет",
}

const useGetTypeIssue = () => {
  const typeIssue = useAppSelector((state) => state.typeIssue.type)

  switch (typeIssue) {
    case "InternetNeRabotaet":
      return Templates.InternetNeRabotaet

    default:
      return "Пусто"
  }
}

export default useGetTypeIssue
