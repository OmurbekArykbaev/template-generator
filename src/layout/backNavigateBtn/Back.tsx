import { AiOutlineArrowLeft } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

const Back = () => {
  const navigate = useNavigate()
  return (
    <div className="relative">
      <button
        className="absolute top-0 left-0 bg-gray-400 p-2 rounded-full"
        onClick={() => navigate("/")}
      >
        <AiOutlineArrowLeft size={20} color="white" />
      </button>
    </div>
  )
}

export default Back
