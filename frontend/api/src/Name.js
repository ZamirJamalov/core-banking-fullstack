import React from 'react';

const Name = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={value} onChange={onChange} />
    </div>
  );
};

export default Name;