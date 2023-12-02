import "./index.css";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  select: {
    minWidth: 250,
  },
}));

const LocationForm = ({ onChange }) => {
  const classes = useStyles();
  const [fromCountry, setFromCountry] = useState('')

  return (
    <div className="locationView">
      <div className="locationRow">
        <h4>From</h4>
        <div className="locationSelectView">
          <FormControl className={classes.select}>
            <InputLabel id="">Country</InputLabel>
            <Select
              value={fromCountry}
              labelId="title"
              id="title-select"
              onChange={(e) => {
                onChange("from_country", e.target.value);
                setFromCountry(e.target.value)
              }}
            >
              <MenuItem value={0}>
                <span className={`${classes.code}`}>93</span>
                <span className={`country`}>Afghanistan</span>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.select}>
            <InputLabel id="title">Country Code</InputLabel>
            <Select
              // value={countryCode}
              labelId="title"
              id="title-select"
              onChange={(e) => {
                // setCountryCode(e.target.value);
                // onChangeCode(e.target.value);
              }}
            >
              <MenuItem value={0}>
                <span className={`${classes.code}`}>93</span>
                <span className={`country`}>Afghanistan</span>
              </MenuItem>
            </Select>
          </FormControl>
          {/* <select className="locationSelect" onChange={(e) => onChangeFromC(e.target.value)}>
            <option value="" disabled selected>Country</option>
            <option value="91">India</option>
            <option value="90">USA</option>
          </select>
          <select className="locationSelect" onChange={(e) => onChangeFromS(e.target.value)}>
            <option value="" disabled selected>State</option>
            <option value="90">Delhi</option>
            <option value="80">Assam</option>
          </select> */}
        </div>
      </div>
      <div className="locationRow">
        <h4>Living In</h4>
        <div className="locationSelectView">
          <FormControl className={classes.select}>
            <InputLabel id="title">Country Code</InputLabel>
            <Select
              // value={countryCode}
              labelId="title"
              id="title-select"
              onChange={(e) => {
                // setCountryCode(e.target.value);
                // onChangeCode(e.target.value);
              }}
            >
              <MenuItem value={0}>
                <span className={`${classes.code}`}>93</span>
                <span className={`country`}>Afghanistan</span>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.select}>
            <InputLabel id="title">Country Code</InputLabel>
            <Select
              // value={countryCode}
              labelId="title"
              id="title-select"
              onChange={(e) => {
                // setCountryCode(e.target.value);
                // onChangeCode(e.target.value);
              }}
            >
              <MenuItem value={0}>
                <span className={`${classes.code}`}>93</span>
                <span className={`country`}>Afghanistan</span>
              </MenuItem>
            </Select>
          </FormControl>
          {/* <select
            className="locationSelect"
            onChange={(e) => onChangeLivingC(e.target.value)}
          >
            <option value="" disabled selected>
              Country
            </option>
            <option value="91">India</option>
            <option value="90">USA</option>
          </select> */}
          {/* <select
            className="locationSelect"
            onChange={(e) => onChangeLivingS(e.target.value)}
          >
            <option value="" disabled selected>
              State
            </option>
            <option value="90">Delhi</option>
            <option value="80">Assam</option>
          </select> */}
        </div>
      </div>
    </div>
  );
};

export default LocationForm;
