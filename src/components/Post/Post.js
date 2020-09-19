import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});


const Post = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
  }, [])

  console.log('ppost', posts)

  return (

    <div className={classes.root} style={{ backgroundColor: '#cfe8fc' }}>
      {
        posts.map(post => <Container key={post.id} maxWidth="lg" style={{ borderBottom: '1px solid gray', padding: '3% 0', }}>
          <Typography variant="h5" gutterBottom style={{ marginTop: '1%' }}>
            {post.title}
          </Typography>

          <Typography variant="body1" gutterBottom style={{ marginTop: '1%' }}>
            {post.body}
          </Typography>
          <Link to={`/postDetail/${post.id}`}>
            <Button variant="contained" color="primary" style={{ marginTop: '1%' }}>
              Show Details
         </Button>
          </Link>
        </Container>)
      }
    </div>

  );
};

export default Post;