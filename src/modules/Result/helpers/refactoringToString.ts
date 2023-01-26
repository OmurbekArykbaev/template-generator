export const DoString = <T extends string>(
  template: T,
  result: T,
  personalData: T | null
): string => {
  if (personalData === null) {
    return `${template}, ${result}.`
  }
  return `${template}, ${result}. ${personalData}.`
}
