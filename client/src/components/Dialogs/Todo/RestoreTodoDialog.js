import React from 'react';
import useStyles from '../styles'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

import RestoreIcon from '@material-ui/icons/Restore';

const DeleteTodoDialog = ({ isOpenDialog, handleCloseDialog, selectedTodo }) => {
  const classes = useStyles()
  const handleClickDelete = () => {
    console.log('Request on restore todo:', selectedTodo.id, selectedTodo.title)
    handleCloseDialog()
  }

  return (
    <>
      <Dialog
          open={isOpenDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          <RestoreIcon className={classes.headingIcon} />
          Восстановить запись?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Запись будет восстановлена в прежнее состояние.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="default">
            Отменить
          </Button>
          <Button onClick={handleClickDelete} color="primary">
            Восстановить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteTodoDialog