import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <div className="form-group">
      <input
        id={props.id}
        className={props.className}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
};

export default Input;
