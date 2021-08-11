// import './Styles/Profile.css'
import SideNav from '../../Components/Teacher/SideNav'
// import Info from './Info'

import React, { useRef, useState } from "react"
import NameForm from "../../Components/NameForm"
import GenderForm from "../../Components/GenderForm"
import CalenderForm from "../../Components/CalenderForm"
import { SUB_FORMS } from "../../utils/constants"
import FormRowBtn from "../../Components/FormRowBtn"
import MobileForm from "../../Components/MobileForm"
import TeacherTypeForm from "../../Components/TeacherTypeForm"
import LanguageForm from "../../Components/LanguageSkillsForm"
import LocationForm from "../../Components/LocationForm"
import DescriptionForm from "../../Components/DescriptionForm"
import "./index.css"
import ProfilePicForm from '../../Components/ProfilePicForm'
import VideoForm from '../../Components/VideoForm'

function TeacherProfile() {

  const [formType,setFormType] = useState("0_0")      //formIndex_subformIndex

     // All needed Details
  const firstName = useRef('');
  const lastName = useRef('');
  const dob = useRef(new Date())
  const gender = useRef();
  const countryCode = useRef('91');
  const mobileNo = useRef('');
  const teacherType = useRef('');

  const onClickNext = () => {
    let [formIndex,subFormIndex] = formType.split('_');
    let intFormIndex = parseInt(formIndex);
    let intSubFormIndex = parseInt(subFormIndex);
    switch (intSubFormIndex) {
      case 3:
      case 4:
      case 6:
      case 9:
        setFormType(`${intFormIndex + 1}_${intSubFormIndex + 1}`);
        break;
      default:
        setFormType(`${intFormIndex}_${intSubFormIndex + 1}`);
    }
  }

  const onClickPrev = () => {
    let [formIndex,subFormIndex] = formType.split('_');
    let intFormIndex = parseInt(formIndex);
    let intSubFormIndex = parseInt(subFormIndex)
    switch (intSubFormIndex) {
      case 4:
      case 5:
      case 7:
      case 10:
        setFormType(`${intFormIndex - 1}_${intSubFormIndex - 1}`);
        break;
      default:
        setFormType(`${intFormIndex}_${intSubFormIndex - 1}`);
    }
  }

  const renderForm = () => {
    let [_,subFormIndex] = formType.split('_');
    switch(subFormIndex){
      case "0": return <NameForm onChangeFN={(val)=> firstName.current = val} onChangeLN={(val) => lastName.current = val}/>;
      case "1": return <GenderForm onChangeGender={val => gender.current = val }/>;
      case "2": return <CalenderForm onChangeDOB={(val) => dob.current = val}/>;
      case "3": return <MobileForm onChangeCode={val => countryCode.current = val} onChangeMobileNo={val => mobileNo.current = val}/>;
      case "4": return <TeacherTypeForm onChangeType={val => teacherType.current = val}/>
      case "5": return <LanguageForm/>;
      case "6": return <LocationForm/>;
      case "7": return <DescriptionForm/>
      case "8": return <ProfilePicForm/>;
      case "9": return <VideoForm />
      default: <h1>No Match Found for formType</h1>
    }
  }


    return (
     <div className="container">
       <SideNav subFormIndex={parseInt(formType.split('_')[1])} formIndex={parseInt(formType.split('_')[0])}/>
       <div className="right">
         <div className="rightTop">
           <h1 className="applyFor">
             You are applying for: <span className="role">Teacher</span>
           </h1>
           <div className="formHeadlineView">
             <h1 className="formHeadline">
               {SUB_FORMS[formType.split("_")[1]]}
             </h1>
             {formType.split("_")[1] == "7" ? <h6>how you teach, what you teach and talking about your language</h6>  :<></>}
           </div>
         </div>
         <div className="rightCenter">{renderForm()}</div>
         <div className="rightBottom">
           <FormRowBtn
             onClickNext={onClickNext}
             onClickPrev={onClickPrev}
             hidePrev={formType == "0_0"}
             hideNext={formType == "4_12"}
           />
         </div>
       </div>
     </div>
    );
}

export default TeacherProfile;