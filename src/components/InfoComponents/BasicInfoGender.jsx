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
    },
    card: {
        height: "10rem",
        width: "10rem",
        backgroundColor: "white",
        borderRadius: "10%",
        margin: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    img: {
        height: "9rem",
        width: "8rem",
        padding: "0",
        marginTop: "1.75rem",
        marginBottom: "-1rem"
    }
}));
function BasicInfoGender() {
    const classes = useStyles();
    return (
        <div className={classes.main, classes.root} >
            <h1 style={{ textAlign: "center" }}>Gender</h1>
            <div className={classes.cardContainer}>
                <div className={classes.card}>
                    <Button>
                        <img className={classes.img} src={process.env.PUBLIC_URL + '/assets/img/male.png'} alt="Gender-Male" />
                    </Button>
                </div>
                <div className={classes.card}>
                    <Button>
                        <img className={classes.img} src={process.env.PUBLIC_URL + '/assets/img/female.png'} alt="Gender-Female" />
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default BasicInfoGender
