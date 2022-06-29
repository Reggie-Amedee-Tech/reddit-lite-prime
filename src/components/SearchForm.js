import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchPost } from '../features/SearchRedditPostSlice'
import { Link } from 'react-router-dom'
import classes from '../cssModules/SearchForm.module.css'
import redditLogo from '../assets/redditLogo.png'

const SearchForm = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const dispatch = useDispatch()


    return (
        <div className={classes.SearchDiv}>
            <div className={classes.LogoDiv}>
            <img src={redditLogo} alt="reddit logo" className={classes.Img}></img>
            <h4 className={classes.H4}>Reddit Lite Prime</h4>
            </div>
            
            <div className={classes.SearchBar}>
                <input type='text' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className={classes.Input} />
                <Link to="/searchedPage" onClick={() => dispatch(searchPost(searchTerm))} className={classes.Link}>Search</Link>
            </div>
        </div>
    )
}

export default SearchForm