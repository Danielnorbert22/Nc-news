import { useState, useEffect } from "react";

const API = 'https://daniels-news-articles.onrender.com/api/articles';

function fetchArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ERROR: ${response.status}`);
        }
        return response.json();
      })
        .then((data) => {
           
        setArticles(data)
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);
  
  return { articles, loading, error };
}

export default fetchArticles;