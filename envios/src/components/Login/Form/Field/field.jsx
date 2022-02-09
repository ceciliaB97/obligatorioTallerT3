import React from "react";
import { labelStyle,inputStyle } from "../LoginStyle";
const Field = React.forwardRef(({ label, type }, ref) => {
    return (
      <div>
        <label style={labelStyle}>{label}</label>
        <input ref={ref} type={type} style={inputStyle} />
      </div>
    );
  }); // forward ref


export default Field;