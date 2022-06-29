import { Routes, Route } from 'react-router';
import './App.css';
import HomePage from './views/HomePage';
import ViewQuereyedPost from './views/ViewQueriedPost';
import SearchForm from './components/SearchForm';
import SearchedPostsPage from './views/SearchedPostsPage';


function App() {
  return (
    <div className="App">
      <SearchForm />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path =':id' element={<ViewQuereyedPost/>}/>
        <Route path="searchedPage" element={<SearchedPostsPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
