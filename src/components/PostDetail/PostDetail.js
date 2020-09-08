import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Posts from '../Post/Post';
import Comment from '../Comment/Comment';
import Container from '@material-ui/core/Container';
import { Typography } from '@material-ui/core';

const PostDetail = () => {
    const { userId } = useParams();

    const [post, setPost] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${userId}`)
            .then(res => res.json())
            .then(data => setPost(data[0]))
    }, [])

    const [comments, setComments] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [])

    return (
        <>
            <Container maxWidth="sm" style={{ maxWidth: '850px' }}>
                <Posts post={post} btnText={false}></Posts>
                <Typography style={{color: 'white', marginTop: '20px'}} variant="h5" component="h6">All Comments:</Typography>
                {
                    comments.map(comment => <Comment comment={comment}></Comment>)
                }
            </Container>
        </>
    );
};

export default PostDetail;