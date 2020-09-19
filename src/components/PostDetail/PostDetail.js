import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Comment from '../Comment/Comment';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
        padding: '2%',
    },
});


const PostDetail = () => {
    const classes = useStyles();
    let { postId } = useParams()

    const [postDetail, setPostDetail] = useState({})
    const [comments, setComments] = useState([])
    const [profilePic, setProfilePic] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(response => response.json())
            .then(data => setPostDetail(data))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
            .then(response => response.json())
            .then(data => setComments(data))
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(response => response.json())
            .then(data => setProfilePic(data))
    }, [])

    const profilePicUrl = profilePic.slice(0, comments.length)
    const commentsWithUrl = comments.map((obj, i) => ({ ...obj, image: profilePicUrl[i] }))

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            User Id :{postDetail.id}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            {postDetail.title}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            {postDetail.body}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <h2 style={{ marginLeft: '30px' }}>Comments:</h2>
            {
                commentsWithUrl.map(comment => <Comment comment={comment} key={comment.id}></Comment>)
            }
        </div>
    );
};

export default PostDetail;