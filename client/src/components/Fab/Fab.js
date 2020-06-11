import React from 'react';
import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    margin: 30,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const renderIcon = (typeIcon) => {
  switch(typeIcon) {
    case 'add':
      return <AddIcon />
    case 'edit':
      return <EditIcon />
    default:
      break;
  }
}

const FabComponent = ({ typeIcon, color, secondary, size, ariaLabel }) => {
  const classes = useStyles()
  return (
    <Fab className={classes.fab} color={color} size={size} secondary={secondary} aria-label={ariaLabel}>
      {renderIcon(typeIcon)}
    </Fab>
  )
}

export default FabComponent