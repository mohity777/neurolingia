import "./index.css";
import boy from "../../assets/images/boy.jpeg";
import girl from "../../assets/images/girl.jpeg";

const TeacherTypeForm = ({ onChangeType }) => {
  return (
    <div className="teacherTypeView">
      <img src={girl} alt='girl_img' className="genderImgSt" height="55%" width="22%" onClick={() => onChangeType('Professional')} />
      <img src={boy} alt='boy_img' className="genderImgSt" height="55%" width="22%" onClick={() => onChangeType('Community')} />
    </div>
  );
};
export default TeacherTypeForm;
