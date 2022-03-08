import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { carouselItems } from '../../../constants/carouselItems.js';

const useStyles = makeStyles({
    carouselItem: {
        height: '70vh',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        fontFamily: 'Great Vibes',
    },
    carouselButton: {
        backgroundColor: "#C9AB81",
        fontFamily: "Roboto Slab",
        fontWeight: "bold",
        '&:hover': {
            color: '#C9AB81',
            backgroundColor: 'white',
        }
    }
})

function CarouselPage() {

    const classes = useStyles();

    function Item(props) {
        return (
            <Paper
                className={classes.carouselItem}
                style={{ backgroundImage: `url(${props.item.imageUrl})` }}
            >
                <Typography
                    sx={{ fontSize: { md: "6rem", xs: "3rem" } }}
                    fontFamily="Great Vibes"
                >
                    {props.item.name}
                </Typography>

                <Button
                    variant="contained"
                    className={classes.carouselButton}
                    size="large"
                >
                    View More
                </Button>
            </Paper>
        )
    }

    return (
        <div>
            <Carousel
                sx={{ height: '70vh' }}
                navButtonsAlwaysVisible="true"
            >
                {
                    carouselItems.map((item, i) => <Item key={i} item={item} />)
                }
            </Carousel>
        </div>
    )
}

export default CarouselPage