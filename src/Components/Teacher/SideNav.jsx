
import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import './Styles/Navbar.css'
import Logo from './Logo'
import ProfileProgress from './ProfileProgress'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';

const useStyles = makeStyles({
   root: {
      maxWidth: 400,
      flexGrow: 1,
      color: "red",

   },
});

function SideNav({ activeStep, setActiveStep, progress, setDisplay, display }) {
   const nav_list = [
      { item: "Basic Info", path: "basicinfo", div: [1, 2, 3, 4] },
      { item: "Teacher Type", path: "teachertype", div: [1] },
      { item: "Language Skills", path: "languageskills", div: [1, 2] },
      { item: "Intro Video", path: "introvideo", div: [1, 2, 3] },
      { item: "Resume", path: "resume", div: [1, 2, 3] }
   ]
   const classes = useStyles();

   function ProfileProgress() {

      let percent = 0
      let i = 0
      // percent = progress.map((ele) => {
      //    if (activeStep === ele.page) {
      //       i = ele.value
      //       return ele.value
      //    }
      // })

      return (
         <div class="circle small">
            <h1>{` ${display ? progress : `0`}%  `}</h1>
         </div >
      )
   }

   let i = 0
   return (
      <div style={{ width: "25%" }}>
         <div className="sidenav">
            <Logo />
            <ProfileProgress />
            <MobileStepper style={{ display: "none" }} />
            {
               nav_list.map((navi) => {
                  return (
                     <div className="nav-item">
                        <NavLink exact to={navi.path} activeClassName="selected" className > {navi.item} </NavLink>

                        <div className="stepperDots">
                           {navi.div.map(() => {
                              return <div className={`MuiMobileStepper-dot  ${activeStep === i++ ? `MuiMobileStepper-dotActive` : null}`}></div>
                           })}
                        </div>
                     </div>

                  )
               })
            }
         </div>
      </div >
   );
};
export default SideNav;