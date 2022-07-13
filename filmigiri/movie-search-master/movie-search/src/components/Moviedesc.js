import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Moviedesc = () => {
  const location = useLocation()
  const [movie, setMovie] = useState()

  const getMovieRequest = async (searchValue) => {
    searchValue = searchValue === '' ? 'star wars' : searchValue
    const url = `http://www.omdbapi.com/?t=${searchValue}&type=movie&apikey=70c86ce7`

    const { data } = await axios.get(url)
    //console.log(data.Search)
    if (data) {
      setMovie(data)
    }
    //console.log(movies)
  }

  useEffect(() => {
    const { title } = queryString.parse(location.search)
    getMovieRequest(title)
  }, [location.search])

  return (
    <Flex gap='16' m='10'>
      {movie && (
        <>
          <Box>
            <Image src={movie.Poster} alt={movie.title} height={400} width={300} />
          </Box>
          <Box>
            <Text pb='4' style={{fontSize: '32px'}} >{movie.Title}</Text>
            <Text pb='4'>{movie.Year}</Text>
            <Text pb='4'>Genre - {movie.Genre}</Text>
            <Text pb='4'>imdb rating - {movie.imdbRating}</Text>
            <Text border='2px solid gray' p='6' mb='4'>{movie.Plot}</Text>
            <Text pb='4'>Actors - {movie.Actors}</Text>
          </Box>
        </>
      )}
    </Flex>
  )
}

export default Moviedesc
