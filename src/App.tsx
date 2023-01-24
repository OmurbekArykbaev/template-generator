import { TextArea } from "./components"
import Input from "./components/input"
import { Footer, Header, Layout } from "./layout"

function App() {
  return (
    <div className="App">
      <Layout>
        <TextArea cols={5} rows={5} />
      </Layout>
    </div>
  )
}

export default App
