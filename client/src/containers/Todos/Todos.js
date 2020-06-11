import React from 'react';
import Cards from '../../components/Cards/Cards'
import Fab from '../../components/Fab/Fab'
import { Typography, Grid } from '@material-ui/core'

const Todos = () => {
  return (
    <Grid container spacing={2}>
      <Fab typeIcon='add' color="secondary" size='large' ariaLabel="add" />
        <Grid item xs={12}>
          <Typography>
            Создавайте, редактируйте или удаляйте ваши повседневные дела.
          </Typography> 
        </Grid>     
        <Cards data={[1,2,3,4,5,6]} />
    </Grid>
  )
}

export default Todos