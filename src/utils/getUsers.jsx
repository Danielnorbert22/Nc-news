import { React, useState, useEffect } from "react";

const API = 'https://daniels-news-articles.onrender.com/api/users'

function getUserByUsername() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(()=>{
fetch(API).then(
      (res) => {
        if (!res.ok) {
          return Promise.reject({
            status: res.status,
            msg: "Failed to fetch users",
          });
        }
    return res.json();
  })
  .then((data) => {
    setUsers(data)
    setLoading(false)
  })
  .catch((error) => {
    setError(error.message);
    setLoading(false);
  });
}, []);
  return {users, loading, error}
}
  
  export default getUserByUsername