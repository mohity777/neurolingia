import React, { useState } from 'react';
// import DateFnsUtils from "@date-io/date-fns";
// import {
//     DatePicker,
//     MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
import { createMuiTheme } from "@material-ui/core";
// import { ThemeProvider } from "@material-ui/styles";
import { makeStyles } from '@material-ui/core/styles';
import './Styles/Calendar.css';

const materialTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: "#ff004c",
                display: "none"
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                // backgroundColor: "white",
                // color: "#ff004c",
            },
        },
    },
});



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '15rem',
        },

    },

    main: {
        height: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        // justifyContent: "space-around",
        alignItems: "center"
    },

}));
export default function CustomCalendar() {
    const classes = useStyles();
    const [selectedDate, handleDateChange] = useState(new Date());
    return (
        <div className={classes.root, classes.main}>
            <h1>Date of Birth</h1>
            {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <ThemeProvider theme={materialTheme}>
                    <DatePicker
                        value={selectedDate}
                        onChange={handleDateChange}
                        variant="static"
                    ></DatePicker>
                </ThemeProvider>
            </MuiPickersUtilsProvider> */}
        </div>
    );
}
