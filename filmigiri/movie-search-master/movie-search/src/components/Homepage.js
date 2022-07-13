import { Box } from '@chakra-ui/react'
import Navbar from './Navbar'
import { Input, InputGroup, InputRightAddon } from '@chakra-ui/input'
import { IconButton } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import Playlist from './Playlist'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Home = () => {
  const [searchValue, setSearchValue] = useState('')
  const navigate = useNavigate()

  return (
    <>
      <Box>
        <Box mt={20} ml={40} mr={40}>
          <InputGroup>
            <Input
              type="text"
              placeholder="Enter a movie name"
              onChange={(e) => setSearchValue(e.target.value)}
            />
            {/* <InputRightAddon children={} /> */}
            <Link to={`/movies/?item=${searchValue}`} >
              <IconButton
                aria-label="Search database"
                icon={<SearchIcon w={7} h={7} />}
              />
            </Link>
          </InputGroup>
        </Box>
        <Box m={20}>
          <Playlist />
        </Box>
      </Box>
    </>
  )
}

export default Home
