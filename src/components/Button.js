import React from 'react';

// Define the Button component
const Button = ({ name, isBeam = false, containerClass }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {/* Conditional rendering for the beam effect */}
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping" />
          <span className="btn-ping_dot" />
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;