import { Routes, Route } from 'react-router';
import classes from './App.module.css'
import HomePage from './views/HomePage';
import ViewQuereyedPost from './views/ViewQueriedPost';
import SearchForm from './components/SearchForm';
import SearchedPostsPage from './views/SearchedPostsPage';


function App() {
  return (
    <div className={classes.App}>
      <div className={classes.SearchBar}>
      <SearchForm />
      </div>
      <div className={classes.Home}>

      
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path =':id' element={<ViewQuereyedPost/>}/>
        <Route path="searchedPage" element={<SearchedPostsPage />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
