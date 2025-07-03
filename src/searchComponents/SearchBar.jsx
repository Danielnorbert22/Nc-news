import { useState, useEffect } from "react";
import UserList from "./ArticleList";
import UserSearch from  "./UserSearch"
import { getArticleById } from "../utils/getArticleById";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [articleData, setarticleData] = useState(null);
  const [error, setError] = useState(null)
    useEffect(() => {
      if (searchTerm) {
        getArticleById(searchTerm)
          .then((data) => setarticleData(data))
          .catch((err) => {
            
            setarticleData(null);
            setError(err.msg)
          });
      }
    }, [searchTerm])
  if (error) {
    return <p>error: {error }</p>
  }
  
    return (
      <main>
        <UserSearch setSearchTerm={setSearchTerm} />
        {articleData ? (
          <p></p>
        ) : (
          searchTerm && <p></p>
        )}
        <UserList searchTerm={searchTerm} />
      </main>
    );
  };
  
  export default SearchBar;