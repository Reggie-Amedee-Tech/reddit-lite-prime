import React from 'react'
import { useSelector } from 'react-redux'
import classes from '../cssModules/ViewQueriedPost.module.css'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom'

const SearchedPostsPage = () => {
    const searchedPosts = useSelector((state) => state.searchedPosts)

  return (
    <div>
            <div className={classes.MainDiv}>
            <div className={classes.Left}>
            <h2>List of posts </h2>
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
                <Link to="/" className={classes.Link}>Go Back</Link>
            </div>
            </div>
    </div>
  )
}

export default SearchedPostsPage