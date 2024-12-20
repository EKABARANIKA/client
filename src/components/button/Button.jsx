// import React from 'react'
// import './Button.css'

// export default function Button(props) {
//   return (
//     <button className={props.class}>{props.title}</button>
//   )
// }


import React from 'react';
import './Button.css'; // Add common styles for buttons

const Button = ({ onClick, disabled, style, children, className }) => {
  return (
    <button
      className={`custom-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        ...style,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {children}
    </button>
  );
};

export default Button;