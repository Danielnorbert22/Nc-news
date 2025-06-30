const UserCard = ({ user }) => {
    if (!user) return null;
    const { company, address, email, name, username } = user
    
    return (
        <div className="user-card">
            <h3>Name: <span>{name}</span></h3>
            <h3>Username: <span>{username}</span></h3>
            <h3>E-Mail: <span>{email}</span></h3>
            <h3>Address: <span>{`${address.street}, ${address.city} ${address.zipcode}`}</span></h3>
            <h3>Company: <span>{company.name}</span></h3>
        </div>
    );
};

export default UserCard
