import React from 'react';
import Cards from '../../components/Cards/Cards'
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
          Сортируйте свои повседневные задачи используя категории
        </Typography> 
      </Grid> 
      <Cards data={[1,2,3]} />
    </Grid>
  )
}

export default Category