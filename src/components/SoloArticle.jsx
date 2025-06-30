import React from "react";

const SoloArticle = (articles) => {
    const { title, topic, created_at, author, votes, comment_count, body, article_img_url } = articles.article.article 
   const image = article_img_url
    return (
        <div className="user-card">
            <div >
                
            <div className="imgbox2">
              <img src={image} alt="" />
            </div>
            <div className="detbox">
              <h3 className="name">{author}</h3>
              <p className="topic">TOPIC: {topic }</p>
            </div>
          </div>
          <div className="articleBox">
                <h3>{title}</h3>
                <h5>{ body}</h5>
            <p>{created_at}</p>
                <div className="comment-expander">
                    <p>{comment_count} comments</p>
            <button className="comms">View Comments</button ><button>Add Comment</button>
            
                </div>
                <div className="comment-expander">
                    <p>{votes} votes</p>
            <button className="comms">Add Votes</button >
            
                </div>
            </div>
            
        </div>





)    
}

export default SoloArticle