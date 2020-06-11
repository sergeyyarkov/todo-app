import React from 'react';
import { Grid, Typography, Fab } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit';
// import { useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    margin: 30,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const Category = () => {
  // const { slug } = useParams()
  const classes = useStyles()
  return (
    <Grid container spacing={2}>
      <Fab className={classes.fab} size='large' aria-label="add">
        <EditIcon />
      </Fab>
      <Grid item xs={12}>
        <Typography>
          {`Сортируйте свои повседневные задачи используя категории.`}
        </Typography> 
      </Grid> 
    </Grid>
  )
}

export default Category