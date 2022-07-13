import { Grid, } from '@chakra-ui/react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Movieitem from './MovieItem'

const Movielist = () => {
  const location = useLocation()
  const [movies, setMovies] = useState()

  const getMovieRequest = async (searchValue) => {
    searchValue = searchValue === '' ? 'star wars' : searchValue
    const url = `http://www.omdbapi.com/?s=${searchValue}&type=movie&apikey=70c86ce7`

    const { data } = await axios.get(url)
    //console.log(data.Search)
    if (data.Search) {
      setMovies(data.Search)
    }
    //console.log(movies)
  }

  useEffect(() => {
    const { item } = queryString.parse(location.search)
    getMovieRequest(item)
  }, [location.search])

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={12} m={10}>
      {movies &&
        movies.map((item, i) => {
          return <Movieitem key={i} title={item.Title} img={item.Poster} i={i} />
        })}
    </Grid>
  )
}

export default Movielist
