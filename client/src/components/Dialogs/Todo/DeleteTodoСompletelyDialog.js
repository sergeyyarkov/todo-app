import React from 'react';
import useStyles from '../styles'
import WarningIcon from '@material-ui/icons/Warning';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

const DeleteTodoСompletelyDialog = ({ isOpenDialog, handleCloseDialog, selectedTodo }) => {
  const classes = useStyles()
  const handleClickDelete = () => {
    console.log('Request on delete completely todo:', selectedTodo.id, selectedTodo.title)
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
          <WarningIcon className={classes.headingIcon} />
          Удалить запись навсегда?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Запись будет удалена навсегда, вы не сможете её восстановить.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="default">
            Отменить
          </Button>
          <Button onClick={handleClickDelete} color="secondary" autoFocus>
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteTodoСompletelyDialog