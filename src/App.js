import logo from './logo.svg';
import './App.css';
import Router from "./Components/Router";
import Header from "./Components/Header";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
