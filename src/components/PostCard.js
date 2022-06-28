import React, { useEffect } from 'react'
import classes from '../cssModules/PostCard.module.css'
import upArrow from '../assets/upArrow.png'
import downArrow from '../assets/downArrow.png'



const PostCard = (props) => {
    const { card } = props;
    //if thumbnail === 'self', use a blank white box image
    
    const pictureExist = card.hasOwnProperty('preview')
  

  return (
    <div className={classes.PageContainer}>
        <div className={classes.Container}>
            <div className={classes.TopCard}>
            <h5>{card.title}</h5>
            
            </div>
            <div className={classes.PicDiv}>
            {pictureExist ? <img src={card.preview.images[0].source.url} alt="pic of icon" className={classes.Img}/> : null}
            </div>
            <div>
              <p>posted by {card.author}</p>
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