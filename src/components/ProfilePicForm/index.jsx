import { useState } from "react";
import { useRef } from "react";
import "./index.css";

const ProfilePicForm = ({ onChangePic }) => {
  const ref = useRef();
  const [pic, setPic] = useState(null);
  return (
    <div className="profilePicView">
      <button
        onClick={() => ref.current.click()}
        className="uploadPicPlaceholder"
      >
        {pic ? (
          <img className="uploadPicPlaceholder" src={pic} alt="" />
        ) : (
          <h2>Upload your photo</h2>
        )}
      </button>
      <input
        accept="image/*"
        onChange={(event) => {
          if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              setPic(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
            onChangePic(event.target.files[0]);
          }
        }}
        ref={ref}
        type="file"
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ProfilePicForm;
