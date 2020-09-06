
import './Posts.css'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});


const Posts = (props) => {

  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  const { userId, id, title } = props.Post;

   
  return (
  

      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            UserId: {userId}
        </Typography>
          <Typography className='post__id' variant="h6" component="h6">
           Id:{id}
        </Typography>
        <Typography variant="body2" component="p">
            {title}
          
          </Typography>
        </CardContent>
        <CardActions>
         <Link to={`/postDetails/${id}`}> <Button size="small">See More</Button></Link>
        </CardActions>
      </Card>
       );
};

export default Posts;