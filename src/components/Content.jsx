import React from "react";
import fetchArticles from "./fetchArticles";
import Loading from "./Loading";
function Content() {
  const { articles, loading, error } = fetchArticles();
// const {body} = 
  if (loading) {
    return <Loading />
  }

  if (error) {
    return <div>Error fetching articles: {error}</div>;
  }
  
  return (
      
   
    <div className="outerdiv">
   
      <div className="innerdiv">

       
        <div className="div1 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-daniel.jpg" alt="" />
            </div>
            <div className="detbox">
                <p className="name">{articles.articles[0].author}</p>
              <p className="topic">TOPIC: {articles.articles[0].topic }</p>
            </div>
          </div>
          <div className="article">
            <h4>{articles.articles[0].title }</h4>
            <p>{articles.articles[0].created_at}</p>
            <a href="/search-articles/0">Continue Reading</a>
            
            <h3>{articles.articles[0].comment_count} Comments</h3>
            <button>View Comments</button>
          </div>
        </div>

      
        <div className="div2 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name">{articles.articles[1].author}</p>
              <p className="topic">TOPIC: {articles.articles[1].topic }</p>
            </div>
          </div>
          <div className="article">
          <h4>{articles.articles[1].title }</h4>
            <p>{articles.articles[1].created_at}</p>
            <h3>{articles.articles[1].comment_count} Comments</h3>
            <button>View Comments</button>
          </div>
        </div>

       
        <div className="div3 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name dark">{articles.articles[2].author}</p>
              <p className="topic dark">TOPIC: {articles.articles[2].topic }</p>
            </div>
          </div>
          <div className="article dark">
            <h4>{articles.articles[2].title}</h4>
            <h5>{articles.articles[2].body }</h5>
            <p>{articles.articles[2].created_at}</p>
            <h3>{articles.articles[2].comment_count} Comments</h3>
            <button>View Comments</button>
          </div>
        </div>

       
        <div className="div4 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="" />
            </div>
            <div className="detbox">
            <p className="name dark">{articles.articles[3].author}</p>
            <p className="topic dark">TOPIC: {articles.articles[3].topic }</p>
          </div>
        </div>
        <div className="article dark">
        <h4>{articles.articles[3].title}</h4>
            <h5>{articles.articles[3].body }</h5>
            <p>{articles.articles[3].created_at}</p>
            <h3>{articles.articles[3].comment_count} Comments</h3>
            <button>View Comments</button>
        </div>
              </div>
              <div className="div5 eachdiv">
        <div className="userdetails">
          <div className="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="" />
          </div>
          <div className="detbox">
            <p className="name">{articles.articles[4].author}</p>
            <p className="topic">{articles.articles[4].topic}</p>
          </div>
        </div>
          <div className="article">
          <h4>{articles.articles[4].title}</h4>
        <h5>{articles.articles[4].body }</h5>
            <p>{articles.articles[4].created_at}</p>
            <h3>{articles.articles[4].comment_count} Comments</h3>
            <button>View Comments</button>
         </div>
                    
        
      </div>

    
            </div>
      </div>
     
         
  )
}
export default Content;