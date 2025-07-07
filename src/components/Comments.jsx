import React from "react";
import getComments from "../utils/getComments";
import Loading from "./Loading"; 
import CommentCard from "./CommentsDropdown"; 



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