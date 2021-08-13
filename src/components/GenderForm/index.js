import "./index.css";
import boy from "../../assets/images/boy.jpeg";
import girl from "../../assets/images/girl.jpeg";
import Button from '@material-ui/core/Button';

const GenderForm = ({ onChangeGender }) => {
  return (
    <div className="gender">
      <div className="genderImageView">
        <img src={girl} className="genderImgSt" onClick={() => onChangeGender('Female')} />
        <img src={boy} className="genderImgSt" onClick={() => onChangeGender('Male')} />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Button style={{ backgroundColor: "white", color: "black", marginTop: "-5rem", boxShadow: "none" }} variant="contained">Other</Button>
      </div>
    </div>
  );
};

export default GenderForm;