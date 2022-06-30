import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchQueriedPost } from '../features/SubRedditPostSlice'
import { Link } from 'react-router-dom'
import classes from '../cssModules/QueriedPost.module.css'

const QueriedPost = () => {
    const post = useSelector(state => state.post)
    const dispatch = useDispatch()
    
  return (
    <div className={classes.QueriedPostDiv}>
        <h1 className={classes.H1}>Subreddit</h1>
        <div className={classes.Subreddit}>
            {post.posts.map((post, i) => {
                return <Link to={`:${post.subreddit}`} key={i} onClick={() => {
                  dispatch(fetchQueriedPost(post.subreddit))}} className={classes.Link}>{post.subreddit}</Link>
            })}
        </div>
    </div>
    
  )
}

export default QueriedPost