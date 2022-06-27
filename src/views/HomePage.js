import ViewPost from "./ViewPost";
import QueriedPost from "./QueriedPostView";
import React from 'react'
import classes from '../cssModules/HomePage.module.css'

const HomePage = () => {
  return (
    <div className={classes.MainDiv}>
        <div className={classes.Left}>
        <ViewPost/>
        </div>
        <div className={classes.Right}>
        <QueriedPost />
        </div>
        
    </div>
  )
}

export default HomePage