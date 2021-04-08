import React from "react";

//called by jsx on the app component
export default ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="input"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
