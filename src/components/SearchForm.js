import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchPost } from '../features/SearchRedditPostSlice'
import { useNavigate, Link } from 'react-router-dom'

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate
    const dispatch = useDispatch()


    return (
        <div>
            <input type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <Link to="/searchedPage" onClick={() => dispatch(searchPost(searchTerm))}>Search</Link>
        </div>
    )
}

export default SearchForm