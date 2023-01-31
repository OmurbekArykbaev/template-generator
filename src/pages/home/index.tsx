import useGetUserData from "../../hooks/useGetUserData"
import { Wrapper } from "../../layout"
import LinkItem from "./LinkItem"
import { paths } from "./paths/paths"

const Home = () => {
  const isHasData = useGetUserData()
  return (
    <Wrapper>
      <section>
        {isHasData && (
          <ul className="flex justify-center gap-5 flex-wrap">
            {paths.map((p) => (
              <LinkItem key={p.to} to={p.to} title={p.title} icon={p.icon} />
            ))}
          </ul>
        )}
        {!isHasData && (
          <div className="flex w-full h-full justify-center items-center">
            <h1 className="text-2xl">
              Пожалуйста заполгите данные логина и пароля :)
            </h1>
          </div>
        )}
      </section>
    </Wrapper>
  )
}

export default Home
