import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <h1 style={{textAlign:'center'}}>Employee List</h1>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path = "/create" element={<Add/>}/>
          <Route path = '/edit' element={<Edit/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
