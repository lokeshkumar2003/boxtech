// import logo from './logo.svg';
import './App.css';
import CreativeCnt from './components/creativecnt/creativecnt';
import { Navbar } from './components/navbar/Navbar';
import SecondCnt from './components/secondcnt/secondcnt';
import Services from './components/services/Services';
import StartCnt from './components/startcnt/startcnt';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <Navbar />
      <StartCnt />
      <SecondCnt />
      <Services />
      <CreativeCnt />
      <Testimonial />
    </div>
  );
}

export default App;
