import React, { useState, useEffect } from "react";
import fetchArticles from "./fetchArticles";
import { getComments } from "../utils/getComments";
import CommentsDropdown from "./CommentsDropdown";

const SoloArticle = ({ article }) => {
    const { title, topic, created_at, author, votes, body, article_img_url, article_id } = article;
    const image = article_img_url;
    const id = article_id;

    
    const date = new Date(created_at);
    const readableDate = date.toLocaleString();

  
    const [articleData, setArticleData] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
       
        fetchArticles(id).then(data => {
            setArticleData(data);
        });
       
        getComments(id).then(c => {
            setComments(c.comments);
        });
    }, [id]);

    if (!articleData) return <div>Loading...</div>;

    return (
        <div className="user-card">
            <div>
                <div className="imgbox2">
                    <img src={image} alt="" />
                </div>
                <div className="detbox">
                    <h3 className="name">{author}</h3>
                    <p className="topic">Topic: {topic}</p>
                </div>
            </div>
            <div className="articleBox">
                <h3>{title}</h3>
                <h5>{body}</h5>
                <p>{readableDate}</p>
                <div className="comment-expander">
                    <p>{articleData.comment_count} comments</p>
                    <button className="comms">View Comments</button>
                    <CommentsDropdown comments={comments} />
                    <button>Add Comment</button>
                </div>
                <div className="comment-expander">
                    <p>{votes} votes</p>
                    <button className="comms">Add Votes</button>
                </div>
            </div>
        </div>
    );
};

export default SoloArticle;
