import { useRef } from "react";
import "./index.css";
const ProfilePicForm = (props) => {
  const ref = useRef();
  return (
    <div className="profilePicView">
      <button
        onClick={() => ref.current.click()}
        className="uploadPicPlaceholder"
      >
        <h2>Upload your photo</h2>
      </button>
      <input ref={ref} type="file" style={{ display: "none" }} />
    </div>
  );
};

export default ProfilePicForm;
