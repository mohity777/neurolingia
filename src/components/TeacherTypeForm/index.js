import "./index.css";
import boy from "../../assets/images/boy.jpeg";
import girl from "../../assets/images/girl.jpeg";

const TeacherTypeForm = ({}) => {
  return (
    <div className="teacherTypeView">
      <img src={girl} className="genderImgSt" height="55%" width="22%" />
      <img src={boy} className="genderImgSt" height="55%" width="22%" />
    </div>
  );
};

export default TeacherTypeForm;
