import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import classes from '../cssModules/ViewPost.module.css'



const ViewQuereyedPost = () => {
    const queriedPost = useSelector(state => state.queriedPosts)

    return (
        <div>
        <h2>List of posts </h2>
        {queriedPost.loading && <div>Loading...</div>}
        {!queriedPost.loading && queriedPost.error ? <div>Error: {queriedPost.error}</div> : null}
        {!queriedPost.loading && queriedPost.queriedPosts.length ? (
            <ul className={classes.ul}>{
                queriedPost.queriedPosts.map((post, i) => {
                    // rendering the subreddit posts to the screen
                   return <li className={classes.li} key={i}><PostCard card={post}/></li>
                })

            }</ul>
        ) : null}

    </div>
    )
}

export default ViewQuereyedPost