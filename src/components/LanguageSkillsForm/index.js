import "./index.css";

const LanguageForm = ({ onChangeSpeak, onChangeTeach }) => {
  return (
    <div className="languageView">
      <select className="languageSelect" onChange={(e) => onChangeSpeak(e.target.value)} placeholder="Language you speak">
        <option value="" disabled selected>Language you speak</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
      <select className="languageSelect" onChange={(e) => onChangeTeach(e.target.value)}>
        <option value="" disabled selected>Language you teach</option>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
    </div>
  );
};

export default LanguageForm;
