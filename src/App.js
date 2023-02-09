// import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import SecondCnt from './components/secondcnt/secondcnt';
import StartCnt from './components/startcnt/startcnt';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StartCnt />
      <SecondCnt />
    </div>
  );
}

export default App;
