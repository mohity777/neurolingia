import "./index.css";
import boy from "../../assets/images/boy.jpeg";
import girl from "../../assets/images/girl.jpeg";

const GenderForm = ({ onChangeGender }) => {
  return (
      <div className="genderImageView">
        <img src={girl} className="genderImgSt" onClick={() => onChangeGender('Female')} />
        <img src={boy} className="genderImgSt" onClick={() => onChangeGender('Male')}/>
      </div>
  );
};

export default GenderForm;
