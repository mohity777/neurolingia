import React from 'react';
import './Styles/Profile.css'
import SideNav from './SideNav'
import Info from './Info'


function Profile() {

    const [display, setDisplay] = React.useState(false)
    const [progress, setProgress] = React.useState(0)

    const [activeStep, setActiveStep] = React.useState(0);
    //const progress = [{ page: 0, value: 0 }, { page: 1, value: 7 }, { page: 2, value: 30 }]


    return (
        <div className="profile">
            <SideNav activeStep={activeStep} setActiveStep={setActiveStep} progress={progress} display={display} />
            <Info activeStep={activeStep} setActiveStep={setActiveStep} setDisplay={setDisplay} setProgress={setProgress} />
        </div>
    );
}

export default Profile;