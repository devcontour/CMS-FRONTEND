import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    footerContainer: {
        display: 'flex',
        backgroundColor: '#36454F',
        color: 'white',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    headingText: {
        fontWeight: 'bold',
        fontFamily: 'Satisfy',
        color: '#C9AB81',
    },
    addressText: {
        fontSize: '20px',
        fontFamily: 'Roboto Slab'
    },
    subscribeBox: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: '10px',
    },
    emailInputBox: {
        fontFamily: 'Roboto Slab',
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'white',
            },
        },
    },
    subscribeButton: {
        color: 'white',
        fontFamily: 'Roboto Slab',
        border: '2px solid white',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '10px',
        '&:hover': {
            border: '2px solid white',
            backgroundColor: 'white',
            color: '#7A7A7A',
        }
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    iconItem: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
})


function Footer() {

    const classes = useStyles();

    return (
        <Box className={classes.footerContainer} sx={{ padding: { md: '36px', xs: '20px' } }}>
            <Box>
                <Typography variant="h4" className={classes.headingText}>CMS</Typography>
                <Typography className={classes.addressText}>2005 Grand Avenue</Typography>
                <Typography className={classes.addressText}>Maitland</Typography>
                <Typography className={classes.addressText}>FL, Florida</Typography>
            </Box>
            <form>
                <Typography variant="h5" className={classes.headingText} textAlign="center">Join our mailing list</Typography>
                <Box className={classes.subscribeBox}>
                    <TextField
                        label="Email Address"
                        type="email"
                        className={classes.emailInputBox}
                        size="small"
                    />
                    <Button variant="outlined" className={classes.subscribeButton}>Subscribe</Button>
                </Box>
            </form>
            <Box>
                <Typography variant="h5" className={classes.headingText} textAlign="center">Follow Us</Typography>
                <Box className={classes.iconContainer} sx={{ flexDirection: { md: 'row', xs: 'column' } }}>
                    <InstagramIcon className={classes.iconItem} />
                    <FacebookIcon className={classes.iconItem} />
                    <TwitterIcon className={classes.iconItem} />
                </Box>
            </Box>
        </Box>
    )
}

export default Footer