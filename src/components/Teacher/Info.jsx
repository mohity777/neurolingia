import React from "react";
import './Styles/Info.css'
import Button from '@material-ui/core/Button';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { useTheme } from '@material-ui/core/styles';
import BasicInfoName from "../InfoComponents/BasicInfoName"
import BasicInfoGender from '../InfoComponents/BasicInfoGender';
import BasicInfoDOB from '../InfoComponents/BasicInfoDOB';
import BasicInfoMobile from '../InfoComponents/BasicInfoMobile';
import TeacherType from '../InfoComponents/TeacherType';
import LanguageSkills from '../InfoComponents/LanguageSkills';



function Info({ activeStep, setActiveStep, setDisplay, setProgress }) {
    const theme = useTheme();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setProgress(e => e + 7)
        setDisplay(false)
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        setProgress(e => e - 7)
        setDisplay(false)

    };



    const basicInfoComponents = () => {
        switch (activeStep) {
            case 0:
                return <BasicInfoName />

            case 1:
                return <BasicInfoGender />


            case 2:
                return <BasicInfoDOB />


            case 3:
                return <BasicInfoMobile />

            case 4:
                return <TeacherType />

            case 5:
                return <LanguageSkills />


            default:
                break;
        }
    }

    return (
        <div className="infoGrey" style={{ width: "75%" }}>

            <h6 className="apply"> You are applying for:
                <span className="selected"> Teacher</span>
            </h6>

            <div>{basicInfoComponents()}</div>


            <div className="Infobutton">
                <Button style={{ position: "fixed" }} variant="contained" color="secondary" size="large" onClick={handleBack} disabled={activeStep === 0} style={{ display: `${activeStep == 0 ? `none` : ``}` }}>
                    {theme.direction === 'rtl' ? <ArrowRightIcon /> : <ArrowLeftIcon />}
                    Previous
                </Button>
                <Button style={{ position: "fixed" }} variant="contained" color="secondary" size="large" onClick={handleNext} disabled={activeStep === 12} style={{ display: `${activeStep == 12 ? `none` : ``}` }}>
                    Next
                    {theme.direction === 'rtl' ? <ArrowLeftIcon /> : <ArrowRightIcon />}
                </Button>
            </div>

        </div >
    )
}

export default Info