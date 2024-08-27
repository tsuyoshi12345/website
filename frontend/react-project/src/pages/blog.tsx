import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { getPosts, createPost, deletePost, Post } from '../api/get-blog';
import { Card, CardContent, TextField, Button, Grid, Typography } from '@mui/material';


const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPost, setNewPost] = useState<Partial<Post>>({ title: '', content: '' });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newPost.title && newPost.content) {
      await createPost(newPost as Post);
      fetchPosts();
      setNewPost({ title: '', content: '' });
    }
  };

  const handleDelete = async (id: number) => {
    await deletePost(id);
    fetchPosts();
  };

  return (
    <div className="App" style={{ maxWidth: '950px', margin: '0 auto'}}>
      <h1>My Blog & Todo List</h1>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Blog Posts</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            name="title"
            label="Title"
            value={newPost.title || ''}
            onChange={handleInputChange}
            fullWidth
            margin="normal"
          />
          <TextField
            name="content"
            label="Content"
            value={newPost.content || ''}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Create Post
          </Button>
        </form>
        <Grid container spacing={2}>
          {posts.map(post => (
            <Grid item xs={12} sm={6} md={3} key={post.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {post.content}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDelete(post.id!)}
                    style={{ marginTop: '1rem' }}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Blog;