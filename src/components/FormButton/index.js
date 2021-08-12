import { memo } from "react";

import "./index.css"

const FormButton = ({ text, onClick, leftIcon, rightIcon }) => {
  return (
    <button className="btn" onClick={onClick}>
      {leftIcon ? leftIcon : <></>}
      <span className="btnTxt">{text}</span>
      {rightIcon ? rightIcon : <></>}
    </button>
  );
};

export default memo(FormButton);