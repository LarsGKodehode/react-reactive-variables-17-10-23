import { Counter } from './component/Counter/Counter'
import './App.css'
import { ArticleList } from './component/ArticlesList/ArticlesList'

function App() {
  return (
    <div>
      <main>
        <section>
          <h2>Counter</h2>
          <p>Simple example of useState</p>
          <Counter />
        </section>

        <section>
          <h2>Search Filter</h2>
          <p>Loading data and rendering a list as well as having a statefull filter to filter the list by</p>
          <ArticleList />
        </section>
      </main>
    </div>
  )
}

export default App
