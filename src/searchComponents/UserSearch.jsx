import { useState } from "react";

const UserSearch = ({ setSearchTerm }) => {
    const [searchInput, setSearchInput] = useState('')
    const [currentId, setCurrentId] = useState(1)

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const id = parseInt(searchInput);
        if (!isNaN(id)) {
          setCurrentId(id);
          setSearchTerm(id);
        }
        setSearchInput('');
      };

    const handleNextUser = () => {
        const nextId = currentId + 1;
        setCurrentId(nextId);
        setSearchTerm(nextId);
    };
    const handlePrevUser = () => {
        const nextId = currentId - 1;
        setCurrentId(nextId);
        setSearchTerm(nextId);
    };
    
    return (
        <section className="search-bar">
            <h2>Search user by id</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter ID: 
                    <input className="form-control"type="text" onChange={handleChange} value={searchInput} />
                </label>
                <button type="submit">Search</button>
            </form>
             <button onClick={handlePrevUser} disabled ={currentId < 2}>Previous User</button><button onClick={handleNextUser} disabled ={currentId > 9}>Next User</button>
        </section>
    )
}

export default UserSearch