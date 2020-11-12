import React , {useState} from 'react';
import './App.css';
import Header from './Header';
import Nav from './Nav'
import Results from './Results'
import Requests from './Requests'


function App() {
  const [selOp, setselOp] = useState(Requests.fetchTrending)
  return (
    <div className="App">
      <Header/>
      <Nav setselOp = {setselOp} />
      <Results selOp = {selOp} />
    </div>
  );
}

export default App;
