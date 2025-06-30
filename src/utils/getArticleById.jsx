export function getArticleById(id) {
  return fetch(
    `https://daniels-news-articles.onrender.com/api/articles/${id}`
  ).then((res) => {
   
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        msg: "Failed",
      });
    }
    
    return res.json();
  });
}
