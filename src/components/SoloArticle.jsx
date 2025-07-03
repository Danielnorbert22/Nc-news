import React from "react";
import fetchArticles from "./fetchArticles";

const SoloArticle = (article) => {
    const { title, topic, created_at, author, votes, body, article_img_url, id } = article.article.article
    const image = article_img_url
    const isoString = created_at
    const date = new Date(isoString);
    const readableDate = date.toLocaleString();
    const { articles} = fetchArticles(id);
    console.log(articles)
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
            <p>{readableDate}</p>
                <div className="comment-expander">
                    <p>{articles[0].comment_count} comments</p>
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