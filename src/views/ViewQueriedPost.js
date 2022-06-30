import React from 'react'
import { useSelector } from 'react-redux'
import PostCard from '../components/PostCard'
import classes from '../cssModules/ViewQueriedPost.module.css'
import { Link } from 'react-router-dom'




const ViewQuereyedPost = () => {
    const queriedPost = useSelector(state => state.queriedPosts)

    return (
        <div>
            <div className={classes.MainDiv}>
            <div className={classes.Left}>
            <h2 className={classes.H2}>List of posts </h2>
            {queriedPost.loading && <div>Loading...</div>}
            {!queriedPost.loading && queriedPost.error ? <div>Error: {queriedPost.error}</div> : null}
            {!queriedPost.loading && queriedPost.queriedPosts.length ? (
                <ul className={classes.ul}>{
                    queriedPost.queriedPosts.map((post, i) => {
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

export default ViewQuereyedPost