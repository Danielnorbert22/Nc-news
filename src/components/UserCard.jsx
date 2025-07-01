import React from "react";

const UserCard = (users) => {
    console.log(users)
    console.log(users.users.name)
    
    return (
      <div className="container">
            <div className="row">
              <div className="user">
            <div className="imgbox1">
              <img src={users.users.avatar_url} alt="" />
            </div>
            <div className="detbox">
              <p className="name">{users.users.name}</p>
              <p className="handle">Handle: {users.users.username }</p>
            </div>
          </div>
          </div>
        </div>

)    
}

export default UserCard