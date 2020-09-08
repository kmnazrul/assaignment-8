import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Post from '../Post/Post';

const NewsFeed = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <Typography variant='h3' style={{textAlign: 'center', marginTop: '40px',color:"white"}}>NewsFeed</Typography>
            <Container maxWidth="sm" style={{maxWidth: '850px'}}>
                {
                    posts.map(post => <Post key={post.id} post={post} btnText={true}></Post>)
                }
            </Container>
        </div>
    );
};

export default NewsFeed;