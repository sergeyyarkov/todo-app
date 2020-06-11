import React from 'react';
import Todos from '../../components/Todos/Todos'
import Fab from '../../components/Fab/Fab'
import { Grid, Typography } from '@material-ui/core'

// import { useParams } from 'react-router-dom'

const Category = () => {
  // const { slug } = useParams()
  return (
    <Grid container spacing={2}>
      <Fab size='large' ariaLabel='add' typeIcon='edit'/>
      <Grid item xs={12}>
        <Typography>
          Сортируйте свои повседневные дела используя категории.
        </Typography> 
      </Grid> 
      <Todos data={[1,2,3]} />
    </Grid>
  )
}

export default Category