import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

function MenuCard(props) {
    return (
        <Link to={`/foodItems/${props.foodType}`} style={{ textDecoration: 'none', }}>
            <Card sx={{ height: '100%' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="160"
                        image={props.imageUrl}
                        alt="food"
                    />
                    <CardContent>
                        <Typography variant="h5" component="div" sx={{ fontFamily: 'Roboto Slab', textAlign: 'center', }}>
                            {props.foodType}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}

export default MenuCard