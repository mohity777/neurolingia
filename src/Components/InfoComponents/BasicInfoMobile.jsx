import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(14),
        },
    },
    main: {
        height: "70vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
    button: {
        width: "15%",
        fontWeight: "300px",
    },
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    card: {
        height: "10rem",
        width: "10rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: "10rem",
        width: "9rem",
    }
}));
function BasicInfoName() {
    const classes = useStyles();
    return (
        <div className={classes.main, classes.root} >
            <h1 style={{ textAlign: "center" }}>Mobile Number</h1>
            <form className={classes.cardContainer}>
                <div className={classes.card}>
                    <TextField id="standard-basic" label="First Name" required />
                </div>
                <div className={classes.card}>
                    <TextField id="standard-basic" label="Last Name" required />
                </div>
            </form>
        </div>
    )
}
export default BasicInfoName
