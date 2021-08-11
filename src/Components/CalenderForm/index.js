import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";

const CalenderForm = ({ onChangeDOB }) => {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection : "column" , justifyContent: "center",alignItems: "center",height: "100%"}}>
      <Calendar onChange={onChangeDOB} />
    </div>
  );
};

export default CalenderForm;