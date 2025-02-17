import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import ChatProvider from './context/chatProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ChatProvider>
    <BrowserRouter>
     <ChakraProvider>
      <App />
     </ChakraProvider>
    </BrowserRouter>
  </ChatProvider>
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { ChakraProvider } from "@chakra-ui/react";
// const root = ReactDOM.createRoot(document.getElementById('root'));
// import { BrowserRouter } from "react-router-dom";
// import ChatProvider from "./context/chatProvider";

// root.render(
//   <ChakraProvider>
//     <BrowserRouter>
//       <ChatProvider>
//         <App />
//       </ChatProvider>
//     </BrowserRouter>
//   </ChakraProvider>,
//   document.getElementById("root")
// );
