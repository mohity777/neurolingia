import { useRef } from "react";
import "./index.css"

const VideoForm = props => {

    const ref = useRef();

    return (
      <div className="videoFormView">
        <button onClick={()=> ref.current.click()} className="uploaderDiv">
          <h4 style={{fontWeight: 100}}>Upload your file</h4>
        </button>
        <h4>or</h4>
        <input className="videoInput" placeholder="https://youtube.com/watch?v=xxxxxxxxxxx" />
        <input ref={ref} type="file" style={{ display: "none" }} />
      </div>
    );
}

export default VideoForm;