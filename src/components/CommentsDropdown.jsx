import React, { useState } from 'react';
import Loading from './Loading';

const CommentsDropdown = ({ comments }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    
    <div style={{ position: 'relative', display: 'inline-block' }}>
      
      <button onClick={toggleDropdown}>Show Comments</button>
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
            zIndex: 1,
            maxHeight: '200px',
            overflowY: 'auto',
            width: '200px',
          }}
        >
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index} style={{ padding: '8px', borderBottom: '1px solid #eee' }}>
                {comment}
              </div>
            ))
          ) : (
            <div style={{ padding: '8px' }}>No comments available</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommentsDropdown;