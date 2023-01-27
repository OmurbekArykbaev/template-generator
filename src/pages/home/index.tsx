import { Wrapper } from "../../layout"
import LinkItem from "./LinkItem"
import { paths } from "./paths/paths"

const Home = () => {
  return (
    <Wrapper>
      <section>
        <ul className="flex justify-center gap-5 flex-wrap">
          {paths.map((p) => (
            <LinkItem key={p.to} to={p.to} title={p.title} icon={p.icon} />
          ))}
        </ul>
      </section>
    </Wrapper>
  )
}

export default Home
