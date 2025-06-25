import React from "react";
import fetchArticles from "./fetchArticles";

function Content() {
  const { articles, loading, error } = fetchArticles();

  if (loading) {
    return <div>Loading...</div>;
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
          <div className="review">
            <h4>{articles.articles[0].title }</h4>
            <p>{articles.articles[0].created_at}</p>
            <span><p>Votes: { articles.articles[0].votes}</p><button>Vote Up!</button></span>
          </div>
        </div>

      
        <div className="div2 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jonathan.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name">Jonathan Walters</p>
              <p className="topic">Verified Graduate</p>
            </div>
          </div>
          <div className="review">
            <h4>The team was very supportive and kept me motivated</h4>
            <p>“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself. ”</p>
          </div>
        </div>

       
        <div className="div3 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-kira.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name dark">Kira Whittle</p>
              <p className="topic dark">Verified Graduate</p>
            </div>
          </div>
          <div className="review dark">
            <h4>Such a life-changing experience. Highly recommended!</h4>
            <p>“ Before joining the bo recommend! ”</p>
          </div>
        </div>

       
        <div className="div4 eachdiv">
          <div className="userdetails">
            <div className="imgbox">
              <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-jeanette.jpg" alt="" />
            </div>
            <div className="detbox">
              <p className="name dark">Jeanette Harmon</p>
              <p className="topic dark">Verified Graduate</p>
          </div>
        </div>
        <div className="review dark">
          <h4>An overall wonderful and rewarding experience</h4>
        <p>“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love. ”</p>
        </div>
              </div>
              <div className="div5 eachdiv">
        <div className="userdetails">
          <div className="imgbox">
            <img src="https://raw.githubusercontent.com/RahulSahOfficial/testimonials_grid_section/5532c958b7d3c9b910a216b198fdd21c73112d84/images/image-patrick.jpg" alt="" />
          </div>
          <div className="detbox">
            <p className="name">Patrick Abrams</p>
            <p className="topic">Verified Graduate</p>
          </div>
        </div>
        <div className="review">
          <h4>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h4>
          <p>“ The staff seem genuinely concerned about my progress w able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people. ”</p>
          <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
          Frontend Mentor
        </a>
        <br />
        Coded by <a href="https://www.instagram.com/developer_sah/" target="_blank" rel="noopener noreferrer">Rahul Sah</a>.
      </div>       
         </div>
                    
        
      </div>

      {/* Attribution */}
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
          Frontend Mentor
        </a>
        <br />
        Coded by <a href="https://www.instagram.com/developer_sah/" target="_blank" rel="noopener noreferrer">Rahul Sah</a>.
      </div>
            </div>
            </div>
         
  )
}
export default Content;