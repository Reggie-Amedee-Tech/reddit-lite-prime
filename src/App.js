import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './views/HomePage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<HomePage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
