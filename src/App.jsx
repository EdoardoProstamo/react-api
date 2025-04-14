import { useEffect, useState } from 'react'
import axios from 'axios';

function App() {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios.get('https://www.freetestapi.com/api/v1/actors')
      .then((res) => setCast(res.data))
  }, []);

  return (
    <>
      <ul>
        {cast.map((actor) => (<li key={actor.id}>{actor.name}</li>))}
      </ul>
    </>
  )
}

export default App