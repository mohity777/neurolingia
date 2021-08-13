import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
        marginTop: "-1rem"
    },
    card: {
        height: "11rem",
        width: "12.5rem",
        backgroundColor: "white",
        borderRadius: "10%",
        // margin: "5px",
        // display: "flex",
        // flexDirection: "column",
    },
    img: {
        height: "9rem",
        width: "8rem",
        padding: "0",
        marginTop: "1.5rem",
        marginBottom: "-1rem"
    }
}));
function BasicInfoGender() {
    const classes = useStyles();
    return (
        <div className={classes.main, classes.root} >
            <h1 style={{ textAlign: "center" }}>Which type best describes you?</h1>
            <div className={classes.cardContainer}>
                <div className={classes.card}>
                    <Button style={{ padding: "0" }}>
                        <img className={classes.img} src={process.env.PUBLIC_URL + '/assets/img/teacher.png'} alt="Gender-Male" />
                    </Button>
                    <h3 style={{ margin: "0" }}>Professional Teacher</h3>
                </div>
                <div className={classes.card}>
                    <Button style={{ padding: "0" }}>
                        <img className={classes.img} src={process.env.PUBLIC_URL + '/assets/img/teacher.png'} alt="Gender-Female" />
                    </Button>
                    <h3 style={{ margin: "0" }}>Community Teacher</h3>
                </div>
            </div>
        </div>
    )
}
export default BasicInfoGender
