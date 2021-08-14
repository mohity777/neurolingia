import { useRef } from "react";
import "./index.css"

const VideoForm = ({ onChangeVideoUrl }) => {
  const ref = useRef();

  return (
    <div className="videoFormView">
      <button onClick={() => ref.current.click()} className="uploaderDiv">
        <h4 style={{ fontWeight: 100 }}>Upload your file</h4>
      </button>
      <h4>or</h4>
      <input
        onChange={(e) => onChangeVideoUrl(e.target.value)}
        className="videoInput"
        placeholder="https://youtube.com/watch?v=xxxxxxxxxxx"
      />
      <input ref={ref} type="file" style={{ display: "none" }} />
    </div>
  );
};

export default VideoForm;