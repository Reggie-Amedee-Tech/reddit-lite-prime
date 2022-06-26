import { Routes, Route } from 'react-router';
import './App.css';
import ViewPost from './views/ViewPost';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<ViewPost/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
