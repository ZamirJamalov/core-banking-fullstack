import React from 'react';

const Email = ({ value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={value} onChange={onChange} />
    </div>
  );
};

export default Email;