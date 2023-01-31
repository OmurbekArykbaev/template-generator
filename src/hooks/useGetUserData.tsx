import { useAppSelector } from "./RtkHooks"
import { useState, useEffect } from "react"

const useGetUserData = () => {
  const [state, setState] = useState<boolean>(false)
  const { ls, login, password, phone } = useAppSelector(
    (state) => state.userData
  )

  useEffect(() => {
    if (ls && login && password && phone) {
      setState(true)
    } else {
      setState(false)
    }
  }, [ls, login, password, phone])

  return state
}

export default useGetUserData
