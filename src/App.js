import logo from './logo.svg';
import './App.css';
import Router from "./Components/Router";
import Header from "./Components/Header";
import {BrowserRouter} from "react-router-dom";
import {MyProvider} from "./Components/MyContext";

function App() {
  return (
    <div>
      <MyProvider value="Send a message">
      <BrowserRouter>
      <Header />
      <Router />
      </BrowserRouter>
      </MyProvider>
    </div>
  );
}

export default App;
