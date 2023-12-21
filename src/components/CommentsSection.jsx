import React, { useState, useEffect } from "react";
import axios from "axios";

const CommentsSection = ({ elementId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`https://striveschool-api.herokuapp.com/api/books/${elementId}/comments`, {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc0NDZhODJjNmEwZDAwMTg0OTU5YjMiLCJpYXQiOjE3MDMxNjE5MjksImV4cCI6MTcwNDM3MTUyOX0.gL7TeofYi7vcnjsGmGcaS7WPEIubZO-qPZUXk4AqW9Y`
          }
        });
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [elementId]);

  return (
    <div>
      <h3>Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            <p>Comment: {comment.comment}</p>
            <p>Rate: {comment.rate}</p>
            <p>Author: {comment.author}</p>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsSection;
