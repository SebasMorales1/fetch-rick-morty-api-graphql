import { useState, useEffect } from "react";

export function useApiFetch(url, page) {
  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(true)
  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: `{
        characters (page: ${page}) {
          results {
            id,
            name,
            image
          }
        }
      }`
    })
  }

  useEffect(() => {
    setLoading(true)
    fetch(url, settings)
      .then(res => res.json())
      .then(data => setdata(data.data.characters.results))
      .catch(error => console.error(`Error when quering api: ${error}`))
      .finally(() => setLoading(false))
  }, [page])

  return {data, loading}
}