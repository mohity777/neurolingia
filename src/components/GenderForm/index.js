import "./index.css";
import boy from "../../assets/images/boy.jpeg";
import girl from "../../assets/images/girl.jpeg";

const GenderForm = ({  }) => {
  return (
      <div className="genderImageView">
        <img src={girl} className="genderImgSt" />
        <img src={boy} className="genderImgSt" />
      </div>
  );
};

export default GenderForm;
