// FormHandling.jsx
import React from 'react';
import './FormHandling.css'; // import the CSS

const FormHandling = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder="Enter your name" className="input-field"/>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default FormHandling;