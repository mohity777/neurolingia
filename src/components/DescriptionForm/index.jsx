import "./index.css";

const DescriptionForm = ({ onChange }) => {
    return (
      <div className="descriptionView">
        <textarea onChange={(e)=> onChange(e.target.value)} className="descriptionInput" placeholder="Start Typing Here..."/>
      </div>
    );
}

export default DescriptionForm;