import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const storedPosts = [
  { id: 1, title: "Introduction to React", body: "React is a JavaScript library for building user interfaces." },
  { id: 2, title: "Understanding useState", body: "useState is a Hook that lets you add state to functional components." },
  { id: 3, title: "React Router Explained", body: "React Router helps in navigating between pages in a React application." }
];

const Post = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Check if the post exists in the storedPosts array
    const foundPost = storedPosts.find((p) => p.id === parseInt(id));

    if (foundPost) {
      setPost(foundPost);
    } else {
      navigate("/404"); // Redirect to 404 if post not found
    }
  }, [id, navigate]);

  if (!post) {
    return <div className="loading">Loading post...</div>;
  }

  return (
    <div className="page">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={() => navigate("/")} className="go-back-button">🔙 Go Back</button>
    </div>
  );
};

export default Post;
