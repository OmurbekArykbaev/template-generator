import { Link } from "react-router-dom"
import { FC } from "react"

import { IPaths } from "./paths/paths"
import { motion } from "framer-motion"

const LinkItem: FC<IPaths> = ({ to, title, icon }) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <li className="h-[70px]">
        <Link
          className="flex w-[400px] h-full justify-center items-center space-x-3  py-6 px-10 border-2 border-black"
          to={to}
        >
          {icon}
          <div className="text-xl">{title}</div>
        </Link>
      </li>
    </motion.div>
  )
}

export default LinkItem
