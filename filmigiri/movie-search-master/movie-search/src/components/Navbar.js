import { Box, Text } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return ( 
        <Box bgColor='blackAlpha.900' >
        <Link to='/home'> 
        <Text p={3} style={{fontSize: '32px', cursor: 'pointer'}}>Movie Search</Text>
        </Link>
        </Box>
     );
}
 
export default Navbar;