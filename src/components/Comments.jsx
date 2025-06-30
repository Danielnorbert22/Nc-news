import React from "react";
import getUserByUsername from "../utils/getUsers";
import Loading from "./Loading"; 
import CommentCard from "./CommentCard"; 



function Comments() {
        const { comment, loading, error } = getComments();
    
    
        if (loading) {
          return <Loading />;
        }
      
        if (error) {
          return <div>Error: {error}</div>;
        }
      
          return (
            <section className="user-section">
          <div className="card">
            {comment.comment.map((users, index) => (
              <CommentCard key={index} users={users} />
            ))}
                          </div>
         </section>
        );
      }


export default Comments