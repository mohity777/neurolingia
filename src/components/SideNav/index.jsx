
import { NavLink } from 'react-router-dom';
import './index.css'
import MobileStepper from '@material-ui/core/MobileStepper';

function SideNav({ subFormIndex, formIndex }) {
   const nav_list = [
      { item: "Basic Info", path: "basicinfo", div: [1, 2, 3, 4] },
      { item: "Teacher Type", path: "teachertype", div: [1] },
      { item: "Language Skills", path: "languageskills", div: [1, 2] },
      { item: "Intro Video", path: "introvideo", div: [1, 2, 3] },
      { item: "Resume", path: "resume", div: [1, 2, 3] }
   ]

   let i = 0
   return (
      <div style={{ width: "25%" }}>
         <div className="sidenav">
            <figure className="logo">
              <img src={process.env.PUBLIC_URL + '/assets/img/logo.jpg'} alt="NeuroLingua Logo" /> 
            </figure>
            <div className="circle">
              <h2>{`${subFormIndex*7}%`}</h2>
            </div >
            <MobileStepper style={{ display: "none" }} />
            {
               nav_list.map((navi,index) => {
                  return (
                     <div key={index} className="nav-item">
                        <NavLink exact to={navi.path} className={`${formIndex === index ? "selected" : "null"}`}  > {navi.item} </NavLink>
                        <div className="stepperDots">
                           {navi.div.map((_,ind) => {
                              return <div key={ind} className={`MuiMobileStepper-dot  ${subFormIndex === i++ ? `MuiMobileStepper-dotActive` : null}`}></div>
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