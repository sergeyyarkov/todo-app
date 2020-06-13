import React from 'react';
import { Fab, makeStyles } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete'

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    zIndex: 9999,
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
    case 'delete':
      return <DeleteIcon />
    default:
      break;
  }
}

const FabComponent = ({ typeIcon, color, secondary, size, ariaLabel, onClick, style }) => {
  const classes = useStyles()
  return (
    <Fab className={classes.fab} style={style} onClick={onClick} color={color} size={size} secondary={secondary} aria-label={ariaLabel}>
      {renderIcon(typeIcon)}
    </Fab>
  )
}

export default FabComponent