import { useState, useEffect } from "react";
import { getArticleById } from "../utils/getArticleById";
import SoloArticle from "../components/SoloArticle";
import Loading from "../components/Loading";

function ArticleList({ searchTerm }) {
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!searchTerm) return;

    const fetchArticle = async () => {
      setLoading(true);
      try {
        const fetchedArticle = await getArticleById(searchTerm);
        setArticle(fetchedArticle);
      } catch (error) {
        console.error("Error fetching Article:", error);
        setArticle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [searchTerm]);

  if (loading) return <Loading/>;

  if (!article ) {
    return searchTerm ? <p>No Article found.</p> : null;
  }
  
  return (
    <section>
      <SoloArticle key={article.id} article={article} />
      
    </section>
  );
}

export default ArticleList;