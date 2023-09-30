import React from 'react';

function Alert(props) {
  const capitalize = (word) => {
    if (typeof word === 'string') {
      const lower = word.toLowerCase();
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return ''; // Return an empty string if word is undefined or not a string
  }

  return (
    // Check if props.alert is truthy (not undefined or null) before rendering the alert
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
      {/* Capitalize the alert type */}
      <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>

  )
}

export default Alert;
