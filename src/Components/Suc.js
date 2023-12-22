// Success page
import React from 'react';
import { Container, Button, Dialog, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { green } from "@mui/material/colors";
import Slide from '@mui/material/Slide';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import succsess from "../img/tick-circle.png";
import succsess_mob from "../img/tick-circle_mob.png";

// Transition for dialog
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const useStyles = makeStyles({
    
    formBtns: {
        "& .css-tmesg1-MuiButtonBase-root-MuiButton-root": {
            width: "-moz-available",
            boxShadow: 2,
            borderRadius: "15px",
            backgroundColor: "white",
        },
        fontSize: "15px",
        background: `linear-gradient(to right, ${green.A700}, ${green[800]})`,
        marginTop: "15px",
        height: '20px',
        fontWeight: 800,
        paddingLeft: 0,
        paddingRight: 0,
        width: "-moz-available !important",
        boxShadow: "2px !important",
        borderRadius: "15px !important",
        backgroundColor: "white !important",
    },
    titleSuc: {
        fontSize: 50,
        fontFamily: 'Lexend',
        fontWeight: 800,
        textAlign: 'center',
        color: "black",
        opacity: 1,
    },
    subtitleSuc: {
        fontSize: 15,
        fontFamily: 'Lexend',
        textAlign: 'center',
        color: "black",
        opacity: 1,
    },
    zero: {
        paddingLeft: "0 !important",
        paddingRight: "0 !important",

    },
    dialogs: {
        backgroundColor: 'red',
        boxShadow: 'none',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
    }
});

function Suc() {
    const [open, setOpen] = React.useState(false);
    const [openSuc, setOpenSuc] = React.useState(false);
    const classes = useStyles()

    function refreshPage() {
        window.location.reload(false);
    }

    const handleOpenSuc = () => {
        setOpenSuc(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container className={classes.zero} sx={{ height: 100 }}>
            <Box component="section" >
                <Button
                    variant="contained"
                    className={classes.formBtns}
                    onClick={handleOpenSuc}
                >
                    Get started
                </Button>
                <Dialog
                    fullScreen
                    open={openSuc}
                    style={{ backgroundColor: 'transparent' }}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                    classes={{ paper: classes.dialogs }}
                >
                    <Box
                        component="img"
                        sx={{
                            content: {
                                xs: `url(${succsess_mob})`,
                                md: `url(${succsess})`,
                            },
                            width: "auto",
                            height: "300px"
                        }}
                        alt="Success-Mobile"
                    />
                    <Box
                        sx={{
                            textAlign: 'center',
                            display: 'flex',
                            margin: "60px auto auto auto",
                            justifyContent: 'center'
                        }}>
                        <DialogContent>
                            <DialogContentText>
                                <Typography
                                    className={classes.titleSuc}
                                    variant="h1"
                                    gutterBottom
                                    sx={{
                                        textAlign: 'center',
                                        width: "auto",
                                        paddingBottom: 1,
                                        fontSize: {
                                            xs: 30,
                                            sm: 30,
                                            md: 50,
                                            lg: 50,
                                            xl: 50,
                                        }
                                    }}
                                >
                                    Your application was <br></br>
                                    successfully received!
                                </Typography>
                            </DialogContentText>
                            <DialogContentText>
                                <Typography
                                    className={classes.subtitleSuc}
                                    variant="subtitle2"
                                    gutterBottom
                                    sx={{
                                        textAlign: 'center',
                                        width: "auto",
                                        paddingBottom: 2
                                    }}
                                >
                                    We will contact you shortly.
                                </Typography>
                            </DialogContentText>
                            <Button
                                variant="contained"
                                className={classes.formBtns}
                                onClick={refreshPage}
                            >
                                Go to Main Page
                            </Button>
                        </DialogContent>
                    </Box>
                </Dialog>
            </Box>
        </Container>
    );
}

export default Suc;