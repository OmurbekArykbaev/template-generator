import { Layout } from "./layout"
import Quiz from "./modules/Quiz"

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="flex flex-col space-y-8 w-full h-[100px]">
          <Quiz />
          <Quiz />
          <Quiz /> <Quiz />
        </div>
      </Layout>
    </div>
  )
}

export default App
