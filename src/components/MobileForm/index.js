import "./index.css";

const MobileForm = ({ onChangeCode, onChangeMobileNo }) => {
  return (
    <div className="mobileView">
      <select className="countryCode" onChange={(e)=> onChangeCode(e.target.value)}>
        <option value="91">India (+91)</option>
        <option value="90">USA (+90)</option>
        <option value="80">England (+80)</option>
      </select>
      <input className="input" placeholder="Mobile Number" onChange={(e)=> onChangeMobileNo(e.target.value)}/>
    </div>
  );
};

export default MobileForm;
