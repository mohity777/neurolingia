import React from 'react';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './index.css';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import CloudUploadOutlinedIcon from '@material-ui/icons/CloudUploadOutlined';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        margin: theme.spacing(4),
        width: 250,
    },
}));

export default function SimpleSelect({ onChange }) {
    const classes = useStyles();
    const [title, setTitle] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [docName, setDocName] = React.useState('');

    const titleHandleChange = (event) => {
        onChange("title", event.target.value);
        setTitle(event.target.value);
    };
    const locationHandleChange = (event) => {
        onChange("location", event.target.value);
        setLocation(event.target.value)
    }

    return (
        <div>
            <div className="resumeForm">
                <div className="resumeFormSide">
                    <FormControl className={classes.formControl}>
                        <InputLabel id="title">Title</InputLabel>
                        <Select
                            labelId="title"
                            id="title-select"
                            value={title}
                            onChange={titleHandleChange}
                        >
                            <MenuItem value={1}>Title 1</MenuItem>
                            <MenuItem value={2}>Title 2</MenuItem>
                            <MenuItem value={3}>Title 3</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="location">Location</InputLabel>
                        <Select
                            labelId="location"
                            id="location-select"
                            value={location}
                            onChange={locationHandleChange}
                        >
                            <MenuItem value={1}>Location 1</MenuItem>
                            <MenuItem value={2}>Location 2</MenuItem>
                            <MenuItem value={3}>Location 3</MenuItem>
                        </Select>
                    </FormControl>
                    <form className={classes.container} noValidate>
                        <Input
                            id="date"
                            defaultValue="Start (Year)"
                            type="date"
                            className={classes.textField}
                            onChange={e => onChange('from',e.target.value)}
                        />
                    </form>
                </div>
                <div className="resumeFormSide">
                    <FormControl className={classes.formControl}>
                        <InputLabel>Institution</InputLabel>
                        <Input id="institution" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel>Description</InputLabel>
                        <Input id="description" />
                    </FormControl>
                    <form className={classes.container} noValidate>
                        <Input
                            id="date"
                            defaultValue="End (Year)"
                            label="End (Year)"
                            type="date"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={e => onChange('to',e.target.value)}
                        />
                    </form>
                </div>
            </div>
            <br></br>
            <div className="uploadFile">
                <input
                    type="file"
                    accept="*"
                    style={{ display: 'none' }}
                    id="contained-button-file"
                    onChange={e=> {
                        onChange("certificateData", e.target.files[0]);
                        setDocName(e.target.files[0].name)
                    }}
                />
                <FormControl>
                    <label htmlFor="contained-button-file">
                        <Input
                            id="file-upload"
                            endAdornment={<InputAdornment position="end"><CloudUploadOutlinedIcon /></InputAdornment>}
                            placeholder="Upload Certificate"
                            disabled={true}
                            value={docName}
                        />
                        <FormHelperText id="file-upload-helper-text">To Get Verified Checkmark</FormHelperText>
                    </label>
                </FormControl>
            </div>
            <div >
                <Button style={{ float: "right", backgroundColor: "white", color: "black", fontSize: "10px", margin: "5px" }} variant="contained">+ New Certificate Course</Button>
            </div>
        </div>
    );
}
