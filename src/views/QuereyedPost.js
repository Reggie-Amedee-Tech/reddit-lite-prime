import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchQuereyedPost } from '../features/SubRedditPostSlice'
import { Link } from 'react-router-dom'
import classes from '../cssModules/QuereyedPost.module.css'

const QuereyedPost = () => {
    const post = useSelector(state => state.post)
    const dispatch = useDispatch()

    
  return (
    <div>
        <h1>Subreddit</h1>
        <div className={classes.Subreddit}>
            {post.posts.map((post, i) => {
                return <Link to="" key={i} onClick={() => dispatch(fetchQuereyedPost(post.subreddit))}>{post.subreddit}</Link>
            })}
        </div>
    </div>
    
  )
}

export default QuereyedPost