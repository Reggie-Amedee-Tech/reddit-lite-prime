import React, { useEffect } from 'react'
import classes from '../cssModules/PostCard.module.css'
import upArrow from '../assets/upArrow.png'
import downArrow from '../assets/downArrow.png'
import { Link } from 'react-router-dom'



const PostCard = (props) => {
    const { card } = props;
    //if thumbnail === 'self', use a blank white box image
    
    const pictureExist = card.hasOwnProperty('preview')
    const date = new Date(0)
    const postDate = card.created_utc
    date.setUTCSeconds(postDate)
    const stringObject = date.toString()
    const actualDate = stringObject.slice(3,10)
    

    
  return (
    <div className={classes.PageContainer}>
        <div className={classes.Container}>
            <div className={classes.TopCard}>
            <h5 className={classes.H5}>{card.title}</h5>
            
            </div>
            <div className={classes.PicDiv}>
            {pictureExist ? <img src={card.preview.images[0].source.url} alt="pic of icon" className={classes.Img}/> : null}
            </div>
            <div className={classes.BottomDiv}>
              <p className={classes.Author}>{card.author}</p>
              <p className={classes.DatePosted}>posted on {actualDate}</p>
              <a href={card.url} className={classes.NumOfComments} target="_blank">{card.num_comments}</a>
            </div>
            
        </div>
        <div className={classes.TopLeft}>
              <img src={upArrow} alt="arrow pointing up" className={classes.UpArrow}/>
            <p className={classes.UpVotes}>{card.ups}</p>
            <img src={downArrow} alt='arrow pointing down' className={classes.DownArrow}/>
            </div>
    </div>
  )
}

export default PostCard