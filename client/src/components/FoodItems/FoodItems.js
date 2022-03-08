import React from 'react';
import { Box, Card, CardMedia, CardContent, Button, Typography, CardActions } from '@mui/material';

function FoodItems({ item }) {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '10px'
            }}>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: { md: 'row', xs: 'column' },
                    width: { md: '55%', xs: '80%' },
                }}>
                <CardMedia
                    component="img"
                    height="140"
                    image={item.imageUrl}
                    alt="food"
                />
                <CardContent sx={{ width: { md: '100%' } }}>
                    <Typography gutterBottom variant="h5" component="div" fontFamily="Roboto Slab">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {item.description}
                    </Typography>
                    <Typography color="primary">₹{item.price}</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="contained" size="small">ADD</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default FoodItems