import React from 'react';
import Cards from '../../components/Cards/Cards'
import { Grid, Typography } from '@material-ui/core'

const Trash = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>
          Здесь находятся ваши недавно удаленные записи, вы можете их легко восстановить.
        </Typography> 
      </Grid> 
      <Cards data={[1,2]} />
    </Grid>
  )
}

export default Trash