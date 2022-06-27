import React, { useEffect } from 'react'
import classes from '../cssModules/PostCard.module.css'




const PostCard = (props) => {
    const { card } = props;
    //if thumbnail === 'self', use a blank white box image
    
    const pictureExist = card.hasOwnProperty('preview')
    console.log(pictureExist)
  

  return (
    <div>
        <div className={classes.Container}>
            <div className={classes.TopCard}>
            <h5>{card.title}</h5>
            <p>{card.ups}</p>
            </div>
            <div>
            {pictureExist ? <img src={card.preview.images[0].source.url} alt="pic of icon"/> : <p>It doesn't exist</p>}
            </div>
            <div>
              <p>posted by {card.author}</p>
            </div>
        </div>
    </div>
  )
}

export default PostCard