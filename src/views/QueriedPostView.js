import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchQueriedPost } from '../features/SubRedditPostSlice'
import { Link } from 'react-router-dom'
import classes from '../cssModules/QuereyedPost.module.css'
import { useNavigate } from "react-router-dom";

const QueriedPost = () => {
    const post = useSelector(state => state.post)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
  return (
    <div>
        <h1>Subreddit</h1>
        <div className={classes.Subreddit}>
            {post.posts.map((post, i) => {
                return <Link to={`:${post.subreddit}`} key={i} onClick={() => {
                  dispatch(fetchQueriedPost(post.subreddit)
                  
                  )}}>{post.subreddit}</Link>
            })}
        </div>
    </div>
    
  )
}

export default QueriedPost