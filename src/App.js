import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './views/HomePage';
import ViewQuereyedPost from './views/ViewQueriedPost';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path =':id' element={<ViewQuereyedPost/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
