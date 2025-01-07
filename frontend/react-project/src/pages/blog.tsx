import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogListUser from '../components/blog/blog-list-user';
import BlogListDeveloper from '../components/blog/blog-list-developer';
import CreateBlog from '../components/blog/create-blog';
import BlogDetail from '../components/blog/blog-detail';


const Blog: React.FC = () => {
  const isDeveloperMode = process.env.REACT_APP_DEVELOPER_MODE === "true";
  const apiKey = process.env.REACT_APP_ACCESS_PASSWORD;

  return (
    <div>
      <Routes>
        <Route path="/" element={isDeveloperMode ? <BlogListDeveloper /> : <BlogListUser />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/posts/:id" element={<BlogDetail />} />
      </Routes>
    </div>
  );
};

export default Blog;