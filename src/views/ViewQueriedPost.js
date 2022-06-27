import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PostCard from '../components/PostCard'
import classes from '../cssModules/ViewQueriedPost.module.css'
import { useNavigate, Link } from 'react-router-dom'




const ViewQuereyedPost = () => {
    const queriedPost = useSelector(state => state.queriedPosts)
    const post = useSelector(state => state.post)
    const navigate = useNavigate('')

    return (
        <div>
            <h2>List of posts </h2>
            <div className={classes.MainDiv}>
            <div className={classes.Left}>

            
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
                <Link to="/">Go Back</Link>
            </div>
            </div>
        </div>
    )
}

export default ViewQuereyedPost