export function getComments(id) {
    return fetch(
      `https://daniels-news-articles.onrender.com/api/articles/${id}/comments`
    ).then((res) => {
     console.log(id)
      if (!res.ok) {
        return Promise.reject({
          status: res.status,
          msg: "Failed",
        });
      }
      
      return res.json();
    });
  }
  