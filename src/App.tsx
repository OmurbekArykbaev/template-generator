import { TextArea } from "./components"
import Input from "./components/input"
import { Footer, Header, Layout } from "./layout"
import Quiz from "./modules/Quiz"

function App() {
  return (
    <div className="App">
      <Layout>
        <TextArea cols={5} rows={5} />
        <div className="flex w-full h-[100px]">
          <Quiz />
        </div>
      </Layout>
    </div>
  )
}

export default App
