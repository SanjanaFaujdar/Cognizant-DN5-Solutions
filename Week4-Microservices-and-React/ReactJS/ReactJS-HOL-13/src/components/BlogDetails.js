import React from 'react';

const blogs = [
  { id: 1, title: 'React Learning', author: 'Stephen Bo',
    content: 'Welcome to learning React!' },
  { id: 2, title: 'Installation', author: 'Schmedtner',
    content: 'You can install React from npm.' }
];

function BlogDetails() {
  const blogList = blogs.map((blog) => (
    <div key={blog.id} className="t1">
      <h3>{blog.title}</h3>
      <h4>{blog.author}</h4>
      <p>{blog.content}</p>
    </div>
  ));

  return (
    <div className="d1">
      <h1>Blog Details</h1>
      <div>{blogList}</div>
    </div>
  );
}

export default BlogDetails;
