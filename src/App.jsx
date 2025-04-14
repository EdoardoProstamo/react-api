import { use, useEffect, useState } from 'react'
import axios from 'axios';
import Card from './Card';

function App() {
  const [cast, setCast] = useState([]);


  // function fanchCast() {
  //   axios.get('https://www.freetestapi.com/api/v1/actors').then((res) => setCast(res.data))
  // }
  // useEffect(fanchCast, []);
  useEffect(() => {
    axios.get('https://www.freetestapi.com/api/v1/actors')
      .then((res) => setCast(res.data))
  }, []);



  return (
    <>
      <ul>
        {cast.map((actor) => (<li key={actor.id}> <Card person={actor} /> </li>))}
      </ul>
    </>
  )
}

export default App