import { useState } from "react"
import { useApiFetch } from "./hooks/useApiFetch"
import Character from "./components/Character"

function App() {
  const [page, setPage] = useState(1)
  const { data, loading } = useApiFetch('https://rickandmortyapi.com/graphql', page)

  return (
    <div>
      <h1>Rick and Morty Characters</h1>

      <div>
        <button 
          disabled={page === 1 ? true : false} 
          onClick={() => setPage(page-1)}
        >
            Prev
        </button>
        <span>{page}/42</span>
        <button 
          disabled={page === 42 ? true : false} 
          onClick={() => setPage(page+1)}
        >
          Next
        </button>
      </div>

      <section>
        {loading && <span>...Loading</span>}
        {!loading && data && (
          data.map((character) => (
            <Character 
              key={character.id} 
              image={character.image}
              name={character.name}
            />
          ))
        )}
      </section>
    </div>
  )
}

export default App
