import { Layout } from "./layout"
import Quiz from "./modules/Quiz"
import { data } from "./const/repairRequest"

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="flex flex-col space-y-8 w-full h-[100px]">
          {data.map((q) => (
            <Quiz key={q.id} {...q} />
          ))}
        </div>

        <div></div>
      </Layout>
    </div>
  )
}

export default App
