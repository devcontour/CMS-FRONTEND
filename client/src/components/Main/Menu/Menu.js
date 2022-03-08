import React from 'react';
import MenuCard from './MenuCard.js';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { menuItems } from '../../../constants/menuConstants.js';
import { topdishesItems } from '../../../constants/topdishesConstants.js';

function Menu() {

    return (
        <Box sx={{ margin: '20px 10px 20px 10px', boxSizing: 'content-box' }}>

            <Typography
                sx={{
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: 'Great Vibes',
                    color: '#7A7A7A'
                }}
                variant="h2"
            >
                Top Dishes
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent='center' alignItems="center" mb={3}>

                {
                    topdishesItems.map(topdishesItem =>
                        <Box sx={{
                            '&:hover': {
                                cursor: 'pointer'
                            }
                        }}>
                            <img
                                src={topdishesItem.imageUrl}
                                alt="dish"
                                style={{
                                    borderRadius: '50%',
                                    height: '200px',
                                    width: '220px',
                                    objectFit: 'cover',
                                    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px'
                                }}
                            />
                            <Typography
                                variant="h5"
                                align="center"
                                sx={{ fontFamily: 'Roboto Slab', color: '#964B00' }}
                            >
                                {topdishesItem.dishName}
                            </Typography>
                        </Box>
                    )
                }

            </Stack>

            <Typography
                sx={{
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: 'Great Vibes',
                    color: '#7A7A7A'
                }}
                variant="h2"
            >
                Our Menu
            </Typography>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} alignItems="stretch">
                {
                    menuItems.map((menuItem) =>
                        <Grid item xs={6} lg={3}>
                            <MenuCard imageUrl={menuItem.imageUrl} foodType={menuItem.foodType} />
                        </Grid>
                    )
                }

            </Grid>
        </Box>

    )
}

export default Menu