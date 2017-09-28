import React from 'react';
// import { Link } from 'dva/router';
import { Button, CardMedia, Card, CardActions, CardContent, Typography, IconButton, Favorite, FavoriteBorder } from '../utils/materialUI';

import styles from './MultiCard.css';

const MultiCard = ({ post }) => {
  return (
    <Card className={styles.card}>
      <a className={styles['flex-img']} href={post.message_url} target="_blank" rel="noopener noreferrer" >
        <CardMedia className={styles.img} style={{ backgroundImage: `url(${post.image_url == ''?'http://cdnq.duitang.com/uploads/blog/201407/18/20140718094627_uNCK2.thumb.700_0.jpeg': post.image_url})` }}>
          {/*<img className={styles.img} src={post.image_url == ''?'http://cdnq.duitang.com/uploads/blog/201407/18/20140718094627_uNCK2.thumb.700_0.jpeg': post.image_url} alt="xxx" />*/}
        </CardMedia>
      </a>
        <div className={styles['flex-content']}>
        <CardContent>
        <a href={post.message_url} target="_blank" rel="noopener noreferrer" >
          <Typography type="headline" component="h2" className={styles.limitTitle}>
            { post.title }
          </Typography>
        </a>
          <Typography component="p" className={styles.limitP}>
            { post.content }
          </Typography>
        </CardContent>
        <CardActions className={styles['flex-action']}>
          <div className={styles.littleText}>{ post.source_from }</div>
          <a href={post.message_url} target="_blank" rel="noopener noreferrer" >
          <Button dense color="primary">
            详情
          </Button>
          </a>
          <IconButton color='primary'>
            <Favorite />
          </IconButton>
        </CardActions>
        </div>
    </Card>
  )
};

MultiCard.propTypes = {

};

export default MultiCard;