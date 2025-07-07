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
            <h2>Search Articles</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter ID: 
                    <input className="form-control"type="text" onChange={handleChange} value={searchInput} />
                </label>
                <button type="submit">Search</button>
            </form>
             <button onClick={handlePrevUser} disabled ={currentId < 1}>Previous Article</button><button onClick={handleNextUser} disabled ={currentId > 50}>Next Article</button>
        </section>
    )
}

export default UserSearch