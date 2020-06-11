import React from 'react';
import { Card, CardActions, CardContent, Typography, Grid, IconButton, makeStyles } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import AlarmIcon from '@material-ui/icons/Alarm';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  alarmIcon: {
    marginRight: 10
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
}))

const Cards = ({ data }) => {
  const classes = useStyles()
  return data.map((e, i) => 
    <Grid key={i} item xs={12} md={4} lg={3}>
      <Card>
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
  )
}

export default Cards