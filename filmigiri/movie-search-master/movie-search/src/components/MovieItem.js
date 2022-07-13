import { Box, Image, GridItem, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Movieitem = ({ title, img, i }) => {
  return (
    <GridItem style={{ cursor: 'pointer', minHeight: '80px' }} w="100%">
      <Link to={`/desc/?title=${title}`}>
        <Box
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          shadow="2xl"
          key={i}
          bg="gray.700"
        >
          <Image src={img} alt={title} height={400} />

          <Box p="6" bg="gray.700">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
              bg="gray.700"
            >
              <Text align="center">{title}</Text>
            </Box>
          </Box>
        </Box>
      </Link>
    </GridItem>
  )
}

export default Movieitem
