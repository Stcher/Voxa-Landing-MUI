import * as React from 'react';
import Suc from './Suc';
import { useState } from 'react';
import handleOpenSuc from './Suc'
import { Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { green } from "@mui/material/colors";
import Box from '@mui/system/Box';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import MemoVoxLogo from './VoxLogo';
import MemoCustomCloseIcon from './CloseIcon';
import girl from "../img/girlBack.png"
import back from '../img/img Comm.png'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});



const useStyles = makeStyles({
    root: {
        "& .css-2y464i-MuiInputBase-root-MuiFilledInput-root": {
            background: "white !important",
            boxShadow: "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
            borderRadius: "15px",
            backgroundColor: "white"
        },
        "& .css-2y464i-MuiInputBase-root-MuiFilledInput-root::before, .css-2y464i-MuiInputBase-root-MuiFilledInput-root::after": {
            border: "none !important"
        },
        "& .css-1ady8eb-MuiContainer-root": {
            height: '20px !important',
            fontWeight: 800,
            paddingLeft: "0 !important",
            paddingRight: "0 !important",
        },
        
    },

    btns: {
        fontSize: "15px",
        background: `linear-gradient(to right, ${green.A700}, ${green[800]})`,
        marginTop: "15px",
        width: "-moz-available !important",
        boxShadow: "2px !important",
        borderRadius: "15px !important",
        backgroundColor: "white !important",
    },

    title: {
        fontSize: 50,
        fontFamily: 'Lexend',
        fontWeight: 800,
        textAlign: 'left',
        width: "90%",
        color: "black"
    },

    subtitle: {
        fontSize: 15,
        fontFamily: 'Lexend',
        textAlign: 'left',
        width: "70%",
        color: "black"
    }
})


function LandingPage() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState('');
    const [isValid, setValid] = useState(true);
    const classes = useStyles()

    // Open dialogs buttons
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Email validation
    const validateEmail = (input) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(input);
    };

    const handleChange = (event) => {
        const inputValue = event.target.value;
        setEmail(inputValue);
        if (inputValue.trim() !== '') {
            setValid(validateEmail(inputValue));
        } else {
            setValid(true);
        }
    };

    return (

        <Container>
            <Box component="section" sx={{ marginTop: 5 }}>
                <MemoVoxLogo />
            </Box>
            <Grid
                container
                spacing={2}
                sx={{
                    flexDirection: {
                        xs: "column-reverse",
                        md: "row"
                    }
                }}
            >

                <Grid item xs={12} md={6}>
                    <Box component="section" sx={{
                        marginTop: {
                            xs: 2,
                            sm: 2,
                            md: 20,
                            lg: 20,
                            xl: 20,
                        }
                    }}>
                        <Typography
                            className={classes.title}
                            gutterBottom
                            variant="h1" 
                            sx={{
                                fontSize: {
                                    xs: 30,
                                    sm: 30,
                                    md: 50,
                                    lg: 50,
                                    xl: 50,
                                }
                            }}
                        >
                            Pinnacle of Business Telephony
                        </Typography>
                        <Typography
                            className={classes.subtitle}
                            variant="subtitle2"
                            gutterBottom
                            sx={{
                                fontSize: {
                                    xs: 14,
                                    sm: 14,
                                    md: 15,
                                    lg: 15,
                                    xl: 15,
                                }
                            }}
                        >
                            Effortlessly manage all conversations and interact with clients
                            and teams using one powerful and user-friendly solution.
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={handleClickOpen}
                            className={classes.btns}
                            >
                            Get started
                        </Button>

                        <Dialog
                            fullScreen
                            open={open}
                            onClose={handleClose}
                            TransitionComponent={Transition}
                        >
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{
                                    position: 'absolute',
                                    right: 8,
                                    top: 8,
                                    zIndex: 99999,
                                    color: (theme) => theme.palette.grey[500],
                                }}
                            >
                                <MemoCustomCloseIcon />
                            </IconButton>
                            <DialogContent sx={{
                                paddingLeft: {
                                    xs: 3,
                                    sm: 80,
                                    md: 80,
                                    lg: 80,
                                    xl: 80,
                                },
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "contain",
                                backgroundImage: {
                                    xs: `none`,
                                    sm: `none`,
                                    md: `url(${girl})`,
                                    lg: `url(${girl})`,
                                    xl: `url(${girl})`,
                                },
                                paddingTop: 10,
                                paddingRight: {
                                    xs: 3,
                                    sm: 15,
                                    md: 15,
                                    lg: 15,
                                    xl: 15,
                                },
                            }}>
                                <DialogContentText>
                                    <Typography sx={{
                                        fontSize: {
                                            xs: 40,
                                            sm: 40,
                                            md: 50,
                                            lg: 50,
                                            xl: 50,
                                        }
                                    }} className={classes.title} variant="h1" gutterBottom>
                                        Pinnacle of Business Telephony is in your hands
                                    </Typography>
                                </DialogContentText>
                                <DialogContentText>
                                    <Typography className={classes.subtitle} variant="subtitle2" gutterBottom>
                                        Start your journey to confident and fearless growth with Voxago
                                    </Typography>
                                </DialogContentText >
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={6} >
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="firstName"
                                            label="First Name"
                                            type="text"
                                            fullWidth
                                            className={classes.root}
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="lastName"
                                            label="Last Name"
                                            type="text"
                                            className={classes.root}
                                            fullWidth
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="phone"
                                            className={classes.root}
                                            label="Phone"
                                            type="phone"
                                            fullWidth
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={12}>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="text"
                                            type="Email"
                                            className={classes.root}
                                            variant="filled"
                                            label="Email"
                                            fullWidth
                                            value={email}
                                            onChange={handleChange}
                                            error={!isValid}
                                            helperText={!isValid && email.trim() !== '' ? 'Please enter a valid email address' : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="text"
                                            className={classes.root}
                                            label="Company name"
                                            type="text"
                                            fullWidth
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="employees"
                                            className={classes.root}
                                            label="Number Of Employees"
                                            type="text"
                                            fullWidth
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Suc onClick={handleOpenSuc} />
                                    </Grid>
                                </Grid>

                            </DialogContent>
                        </Dialog>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{
                        width: {
                            xs: "400px",
                            sm: "450px",
                            md: "auto",
                            lg: "auto",
                            xl: "auto",
                        },
                        paddingTop: 10
                    }}>
                        <img
                            src={back}
                            style={{
                                width: "inherit"
                            }}
                        />
                    </Box>

                </Grid>
            </Grid>
        </Container >

    );
}

export default LandingPage;