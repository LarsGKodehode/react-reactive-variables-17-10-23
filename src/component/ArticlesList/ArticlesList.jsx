import { useState } from "react"
import { getAllArticles } from "../../data/articles"

export function ArticleList() {
  // Filter er den variabelen som leder til endringer i den genererte JSX (HTML)
  const [filter, setFilter] = useState("")

  // Forblir statisk igjennom alt
  const articles = getAllArticles()

  // Filtrerte artikler kan bergens basert på du to foregående variablene
  const filteredArticles = articles.filter(article => article.title.includes(filter))

  function updateFilter(event) {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h3>Articles</h3>

      <input type="text" onChange={updateFilter} />

      <ul>
        {
          filteredArticles.map(article => {
            return (
              <li key={article.slug}>
                <ArticleCard article={article} />
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

function ArticleCard(properties) {
  const { article } = properties

  return (
    <article>
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </article>
  )
}