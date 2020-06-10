import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import AlarmIcon from '@material-ui/icons/Alarm';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  alarmIcon: {
    marginRight: 10
  },
  card: {
    margin: 10,
  },
  cardActions: {
    justifyContent: 'flex-end'
  },
  cardHeading: {
    marginBottom: 10
  },
  cardCategoryHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14
  },
  cardAlarm: {
    display: 'flex',
    alignItems: 'center'
  },
  fab: {
    position: 'fixed',
    margin: 30,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
}))

const Main = () => {
  const classes = useStyles()
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Fab className={classes.fab} color="secondary" size='large' aria-label="add">
        <AddIcon />
      </Fab> 
      <Grid container>     
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardContent>
              <Typography className={classes.cardCategoryHeading} color="textSecondary" gutterBottom>
                Категория 1
                <span className={classes.cardAlarm}>
                  <AlarmIcon className={classes.alarmIcon} color='action' />
                  18:00
                </span>
              </Typography>
              <Typography className={classes.cardHeading} variant="h5" component="h2">
                Todo 1
              </Typography>
              <Typography variant="body2" component="p">
                But I must explain to you how all this mistaken idea of denouncing pleasure and praising.
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              <IconButton aria-label="delete">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="delete" color='secondary'>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card> 
        </Grid>
      </Grid>
      </main>
  )
}

export default Main