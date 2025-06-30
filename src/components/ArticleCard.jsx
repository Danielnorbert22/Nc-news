import React from "react";

const ArticlesCard = (articles) => {
    const { title, topic, created_at, author, votes, comment_count } = articles.article 
    const isoString = created_at
    const date = new Date(isoString);
    const readableDate = date.toLocaleString(); 
    
    return (
        <div className="user-card">
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name">{author}</p>
              <p className="topic">TOPIC: {topic }</p>
            </div>
          </div>
          <div className="article">
          <h4>{title }</h4>
            <p>{readableDate}</p>
                <div className="comment-expander">
                    <p>{comment_count} comments</p>
            <button className="comms">View Comments</button ><button>Add Comment</button>
            
                </div>
            </div>
            
        </div>

)    
}

export default ArticlesCard