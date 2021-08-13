import "./index.css";

const LocationForm = ({ onChangeFromC, onChangeFromS, onChangeLivingC, onChangeLivingS }) => {
  return (
    <div className="locationView">
      <div className="locationRow">
        <h4>From</h4>
        <div className="locationSelectView">
          <select className="locationSelect" onChange={(e) => onChangeFromC(e.target.value)}>
            <option value="" disabled selected>Country</option>
            <option value="91">India</option>
            <option value="90">USA</option>
          </select>
          <select className="locationSelect" onChange={(e) => onChangeFromS(e.target.value)}>
            <option value="" disabled selected>State</option>
            <option value="90">Delhi</option>
            <option value="80">Assam</option>
          </select>
        </div>
      </div>
      <div className="locationRow">
        <h4>Living In</h4>
        <div className="locationSelectView">
          <select className="locationSelect" onChange={(e) => onChangeLivingC(e.target.value)}>
            <option value="" disabled selected>Country</option>
            <option value="91">India</option>
            <option value="90">USA</option>
          </select>
          <select className="locationSelect" onChange={(e) => onChangeLivingS(e.target.value)}>
            <option value="" disabled selected>State</option>
            <option value="90">Delhi</option>
            <option value="80">Assam</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
