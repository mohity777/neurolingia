import "./index.css";

const LanguageForm = ({ onChangeCode, onChangeMobileNo }) => {
  return (
    <div className="languageView">
      <select className="languageSelect" onChange={(e)=> onChangeCode(e.target.value)} placeholder="Language you speak">
        <option value="" disabled selected>Language you speak</option>
        <option value="91">English</option>
        <option value="90">Hindi</option>
      </select>
       <select className="languageSelect" onChange={(e)=> onChangeCode(e.target.value)}>
        <option value="" disabled selected>Language you teach</option>
        <option value="90">English</option>
        <option value="80">Hindi</option>
      </select>
    </div>
  );
};

export default LanguageForm;
