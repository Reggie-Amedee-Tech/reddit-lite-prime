import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../features/ViewPostSlice'
import PostCard from '../components/PostCard'
import classes from '../cssModules/ViewPost.module.css'



const ViewPost = () => {
    const post = useSelector(state => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div>
        <h2 className={classes.H4}>List of posts </h2>
        {post.loading && <div>Loading...</div>}
        {!post.loading && post.error ? <div>Error: {post.error} </div> : null}
        {!post.loading && post.posts.length ? (
            <ul className={classes.ul}>{
                post.posts.map((post, i) => {
                    // rendering the subreddit posts to the screen
                   return <li className={classes.li} key={i}><PostCard card={post}/></li>
                })

            }</ul>
        ) : null}

    </div>
    )
}

export default ViewPost