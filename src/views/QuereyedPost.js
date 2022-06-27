import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchQuereyedPost } from '../features/SubRedditPostSlice'
import { Link } from 'react-router-dom'
import classes from '../cssModules/QuereyedPost.module.css'
import { useNavigate } from "react-router-dom";

const QuereyedPost = () => {
    const post = useSelector(state => state.post)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
  return (
    <div>
        <h1>Subreddit</h1>
        <div className={classes.Subreddit}>
            {post.posts.map((post, i) => {
                return <Link to="" key={i} onClick={() => {
                  dispatch(fetchQuereyedPost(post.subreddit),
                  navigate(`/:${post.subreddit}`)
                  )}}>{post.subreddit}</Link>
            })}
        </div>
    </div>
    
  )
}

export default QuereyedPost