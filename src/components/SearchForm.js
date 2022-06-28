import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchPost } from '../features/SearchRedditPostSlice'

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const searchedPosts = useSelector(state => state.searchedPosts)
    const dispatch = useDispatch()


  return (
        <div>

        
        <input type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)}/>
        <button onClick={() => dispatch(searchPost(searchTerm))}>Search</button>
        </div>
  )
}

export default SearchForm