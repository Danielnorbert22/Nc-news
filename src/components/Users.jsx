import React from "react";
import getUserByUsername from "../utils/getUsers";
import Loading from "./Loading"; 
import UserCard from "./UserCard"; 



function Users() {
        const { users, loading, error } = getUserByUsername();
    
    
        if (loading) {
          return <Loading />;
        }
      
        if (error) {
          return <div>Error: {error}</div>;
        }
      
          return (
            <section className="user-section">
          <div className="card">
            {users.users.map((users, index) => (
              <UserCard key={index} users={users} />
            ))}
                          </div>
         </section>
        );
      }


export default Users