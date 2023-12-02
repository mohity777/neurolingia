import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EducationDetails from '../EducationDetailsForm';
import './index.css';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 20
    },
}));
export default function SimpleTabs({onChange}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <div className={classes.root}>

            <div>
                <EducationDetails onChange={onChange}/>
            </div>
        </div>
    );
}




