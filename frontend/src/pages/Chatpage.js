import { useState } from "react";
import ChatBox from "../components/miscellaneous/ChatBox";
import Mychats from "../components/miscellaneous/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { ChatState } from "../context/chatProvider";
import { Box } from '@chakra-ui/react'

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <Mychats />}
        {user && (
         <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} 
        />
      )}
      </Box>
    </div>
  )
};
export default Chatpage;
