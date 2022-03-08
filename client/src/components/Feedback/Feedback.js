import React from 'react';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { makeStyles } from '@mui/styles';
import { Box, Button, TextField, Typography } from '@mui/material';

const useStyles = makeStyles({
    feedbackContainer: {
        margin: '0px 10px 20px 10px',
        boxSizing: 'content-box',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    feedbackBox: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    feedbackHeading: {
        fontFamily: "Satisfy"
    },
    iconContainer: {
        display: 'flex',
        width: '32%',
        justifyContent: "space-evenly"
    },
    feedbackTextField: {
        '& label.Mui-focused': {
            color: '#7A7A7A',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#7A7A7A',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#7A7A7A',
            },
            '&:hover fieldset': {
                borderColor: '#7A7A7A',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#7A7A7A',
            },
        },
        marginTop: '20px',
    },
    submitButton: {
        marginTop: '10px',
        backgroundColor: '#C9AB81',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: 'Robotica Slab',
        '&:hover': {
            backgroundColor: '#7A7A7A',
        }
    },
    iconItem: {
        '&:hover': {
            cursor: 'pointer',
            color: '#ff7961'
        }
    }
});

function Feedback() {

    const classes = useStyles();

    return (
        <Box className={classes.feedbackContainer}>
            <Box className={classes.feedbackBox}>
                <Typography
                    className={classes.feedbackHeading}
                    sx={{ fontSize: { md: "4rem", xs: "2.5rem" } }}
                >
                    Tell us about our food
                </Typography>
                <Box className={classes.iconContainer}>
                    <SentimentVeryDissatisfiedIcon sx={{ fontSize: "50px" }} className={classes.iconItem} />
                    <SentimentDissatisfiedIcon sx={{ fontSize: "50px" }} className={classes.iconItem} />
                    <SentimentNeutralIcon sx={{ fontSize: "50px" }} className={classes.iconItem} />
                    <SentimentSatisfiedAltIcon sx={{ fontSize: "50px" }} className={classes.iconItem} />
                    <SentimentVerySatisfiedIcon sx={{ fontSize: "50px" }} className={classes.iconItem} />
                </Box>
                <TextField
                    label="Enter your feedback"
                    multiline
                    mt={2}
                    rows={7}
                    maxRows={10}
                    className={classes.feedbackTextField}
                    sx={{ width: { md: "34%", xs: "100%" } }}
                />
                <Button variant="contained" className={classes.submitButton}>Submit</Button>

            </ Box>
        </Box>
    )
}

export default Feedback