import React from 'react';
import { Grid, Typography } from '@material-ui/core'

const Trash = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>
        <span role='img' aria-label="cross mark">❌</span> Ошибка! Такого маршрута не существует.
        </Typography> 
      </Grid> 
    </Grid>
  )
}

export default Trash