import React from 'react'
import { useSelector } from 'react-redux'
import classes from '../cssModules/PostCard.module.css'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom'

const SearchedPostsPage = () => {
    const searchedPosts = useSelector((state) => state.searchedPosts)

  return (
    <div>
        <h2>List of posts </h2>
            <div className={classes.MainDiv}>
            <div className={classes.Left}>
            {searchedPosts.loading && <div>Loading...</div>}
            {!searchedPosts.loading && searchedPosts.error ? <div>Error: {searchedPosts.error}</div> : null}
            {!searchedPosts.loading && searchedPosts.searchedPosts.length ? (
                <ul className={classes.ul}>{
                    searchedPosts.searchedPosts.map((post, i) => {
                        // rendering the subreddit posts to the screen
                        return <li className={classes.li} key={i}><PostCard card={post} /></li>
                    })
                }</ul>
            ) : null}
            </div>
            <div className={classes.Right}>
                <Link to="/">Go Back</Link>
            </div>
            </div>
    </div>
  )
}

export default SearchedPostsPage