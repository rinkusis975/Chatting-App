import React, { useEffect } from 'react'
import { Box, Container ,Tab,TabList,TabPanel,TabPanels,Tabs,Text} from '@chakra-ui/react'
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";
import { useHistory } from 'react-router-dom';
function Homepage() {
  const history = useHistory();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (!userInfo) history.push("/");
  }, [history]);
  return (
    <Container maxW="lg" centerContent>
      <Box
      // padding = "10px black"
      display = "flex"
      justifyContent="center"
       p ={0}
      bg = "#FFFFFF"
      w = "100%"
      m="40px 0 15px 0"
      borderRadius = "10PX"
      borderWidth="1.3px"
      borderColor ="#76ABDF"
      >
        <Text
        fontSize = "4xl"
        fontFamily = "Work sans"
        color = 'black'
        >Talk-A-Tive</Text>
      </Box>
      <Box 
      bg = {"#FFFFFF"}
      w="100%"
      p={4}
      color="black"
      borderRadius="10PX"
      borderWidth="1.3px"
      borderColor ="#76ABDF"
      >
        <Tabs variant='soft-rounded'>
          <TabList mb ="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
        <TabPanels>
          <TabPanel >
             <Login>

             </Login>
          </TabPanel>
          <TabPanel>
            <Signup>
              
            </Signup>
          </TabPanel>
        </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default Homepage
