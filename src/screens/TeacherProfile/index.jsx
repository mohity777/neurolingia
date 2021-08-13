import SideNav from '../../components/SideNav'
import React, { useRef, useState } from "react"
import NameForm from "../../components/NameForm"
import GenderForm from "../../components/GenderForm"
import CalenderForm from "../../components/CalenderForm"
import { SUB_FORMS } from "../../utils/constants"
import FormRowBtn from "../../components/FormRowBtn"
import MobileForm from "../../components/MobileForm"
import TeacherTypeForm from "../../components/TeacherTypeForm"
import LanguageForm from "../../components/LanguageSkillsForm"
import LocationForm from "../../components/LocationForm"
import DescriptionForm from "../../components/DescriptionForm"
import EducationDetails from "../../components/EducationDetailsForm";
import "./index.css"
import ProfilePicForm from '../../components/ProfilePicForm'
import VideoForm from '../../components/VideoForm'
import ResumeForm from '../../components/ResumeForm'
import Api from '../../utils/server'
import { PATH } from '../../utils/apiPath'


function TeacherProfile() {

  const [formType, setFormType] = useState("0_0")      //formIndex_subformIndex

  // All needed Details
  const firstName = useRef('');
  const lastName = useRef('');
  const dob = useRef(new Date())
  const gender = useRef();
  const countryCode = useRef('91');
  const mobileNo = useRef('');
  const teacherType = useRef('');

  const onClickNext = () => {
    let [formIndex, subFormIndex] = formType.split('_');
    let intFormIndex = parseInt(formIndex);
    let intSubFormIndex = parseInt(subFormIndex);
    let formData = new FormData();
    formData.append("email", "aroaMohit@gmail.com");
    switch (intSubFormIndex) {
      case 0:  //First Name, Last Name
        formData.append('first_name', firstName.current);
        formData.append('last_name', lastName.current);
        break;
      case 1:  //Gender
        formData.append("gender", gender.current);
        break;
      case 2:  //DOB
        formData.append("dob", dob.current);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
      case 10:
      case 11:
      case 12:
      default:
    };
    Api.post(PATH.teacherDetails, formData, {
      "Content-Type": "multipart/form-data",
    });
    let newFormType = intSubFormIndex == 9 ? `${intFormIndex + 1}_${intSubFormIndex + 1}` : `${intFormIndex}_${intSubFormIndex + 1}`;
    setFormType(newFormType);
  }

  const onClickPrev = () => {
    let [formIndex, subFormIndex] = formType.split('_');
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
    let [_, subFormIndex] = formType.split('_');
    switch (subFormIndex) {
      case "0": return <NameForm onChangeFN={(val) => firstName.current = val} onChangeLN={(val) => lastName.current = val} />;
      case "1": return <GenderForm onChangeGender={val => gender.current = val} />;
      case "2": return <CalenderForm onChangeDOB={(val) => dob.current = val} />;
      case "3": return <MobileForm onChangeCode={val => countryCode.current = val} onChangeMobileNo={val => mobileNo.current = val} />;
      case "4": return <TeacherTypeForm onChangeType={val => teacherType.current = val} />
      case "5": return <LanguageForm />;
      case "6": return <LocationForm />;
      case "7": return <DescriptionForm />
      case "8": return <ProfilePicForm />;
      case "9": return <VideoForm />
      case "10": return <ResumeForm />
      case "11": return <ResumeForm />
      case "12": return <ResumeForm />
      default: <h1>No Match Found for formType</h1>
    }
  }


  return (
    <div className="container">
      <SideNav subFormIndex={parseInt(formType.split('_')[1])} formIndex={parseInt(formType.split('_')[0])} />
      <div className="right">
        <div className="rightTop">
          <h1 className="applyFor">
            You are applying for: <span className="role">Teacher</span>
          </h1>
          <div className="formHeadlineView">
            <h1 className="formHeadline">
              {SUB_FORMS[formType.split("_")[1]]}
            </h1>
            {formType.split("_")[1] == "7" ? <h6>how you teach, what you teach and talking about your language</h6> : <></>}
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