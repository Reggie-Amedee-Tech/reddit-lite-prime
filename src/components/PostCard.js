import React, { useEffect } from 'react'
import classes from '../cssModules/PostCard.module.css'
import axios from 'axios';



const PostCard = (props) => {
    const { card } = props;

    //if thumbnail === 'self', use a blank white box image
    


  return (
    <div>
        <div className={classes.Container}>
            <div className={classes.TopCard}>
            <h5>{card.title}</h5>
            <p>{card.ups}</p>
            </div>
            <div>
            <img src={card.thumbnail} alt="thumbnail image" className={classes.Img}/>
            </div>
            <div>
              <p>posted by {card.author}</p>
            </div>
        </div>
    </div>
  )
}

export default PostCard