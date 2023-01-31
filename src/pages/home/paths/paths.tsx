import { RiSignalWifiErrorLine, RiTvLine } from "react-icons/ri"
import { GiBreakingChain } from "react-icons/gi"
import { MdSpeed } from "react-icons/md"

export interface IPaths {
  to: string
  title: string
  icon: JSX.Element
}

export const paths: IPaths[] = [
  {
    to: "/not-working",
    title: "Не работает интернет",
    icon: <RiSignalWifiErrorLine size={40} />,
  },
  {
    to: "/break",
    title: "Периодические обрывы",
    icon: <GiBreakingChain size={40} />,
  },
  {
    to: "/slow",
    title: "Низкая скорость",
    icon: <MdSpeed size={40} />,
  },
  // { to: "/iptv", title: "Проблемы с IPTV", icon: <RiTvLine size={40} /> },
]
