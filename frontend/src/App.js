// import "./App.css";
// import Homepage from "./Pages/Homepage";
// import { Route } from "react-router-dom";
// import Chatpage from "./Pages/Chatpage";

// function App() {
//   return (
//     <div className="App">
//       <Route path="/" component={Homepage} exact />
//       <Route path="/chats" component={Chatpage} />
//     </div>
//   );
// }

// export default App;
// import './App.css';
// import {Route} from "react-router-dom";
// import Homepage from './pages/Homepage';
// import Chatpage from './pages/Chatpage';

// function App() {
//   return (
//     <div className="App">
//        <Route path="/" component={Homepage} exact />
//       <Route path="/chats" component={Chatpage} />
//     </div>
//   );
// }
// export default App;
import "./App.css";
import Homepage from "./pages/Homepage";
import { Route } from "react-router-dom";
import Chatpage from "./pages/Chatpage";

function App() {
  return (
    <div className="App">
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
    </div>
  );
}

export default App;