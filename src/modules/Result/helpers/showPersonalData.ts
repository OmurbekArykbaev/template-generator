interface Props {
  ls: string
  login: string
  password: string
  phone: string
}

export const showPersonalData = <T extends Props, J>({
  ls,
  login,
  password,
  phone,
}: T): string | null => {
  if (ls === "" || login === "" || password === "" || phone === "") return null

  const result = `Лc: ${ls}, логин: ${login}, пароль: ${password}. Звонить за 1 час т: ${phone}`

  return result
}
