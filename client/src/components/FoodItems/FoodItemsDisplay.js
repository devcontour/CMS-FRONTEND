import React from 'react';
import FoodItems from './FoodItems.js';
import { indianFoods } from '../../constants/indianFood.js';
import { Box, Typography } from '@mui/material';

function FoodItemsDisplay() {
  return (
    <Box sx={{ width: '100%', marginTop: '90px', boxSizing: 'content-box' }}>
    <Typography variant="h2" textAlign="center" gutterBottom fontFamily="Great Vibes" color="#7A7A7A">Indian Foods</Typography>
      {
        indianFoods.map(item =>
          <FoodItems item={item} />
        )
      }
    </Box>
  )
}

export default FoodItemsDisplay