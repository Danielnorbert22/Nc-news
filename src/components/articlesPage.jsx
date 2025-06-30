import React from "react";
import fetchArticles from "./fetchArticles"; // your custom hook
import Loading from "./Loading"; // loading spinner component
import ArticlesCard from "./ArticleCard"; // to display individual articles

function ArticlesPage() {
  const { articles, loading, error } = fetchArticles();
    
    
  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

    return (
      <>
        <a href="/search-articles">Search articles by ID</a>
    <div className="card">
      {articles.articles.map((article, index) => (
        <ArticlesCard key={index} article={article} />
      ))}
        </div>
        </>
  );
}

export default ArticlesPage;