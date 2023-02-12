// import logo from './logo.svg';
import './App.css';
// import HomePage from './components/homepage/HomePage';
import { BrowserRouter as Router } from "react-router-dom";
import RouteNames from './components/routes/Routes';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <RouteNames />
       </Router>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
