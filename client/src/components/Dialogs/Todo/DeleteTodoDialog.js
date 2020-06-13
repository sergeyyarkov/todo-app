import React from 'react';
import useStyles from '../styles'
import WarningIcon from '@material-ui/icons/Warning';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

const DeleteTodoDialog = ({ isOpenDialog, handleCloseDialog, selectedTodo }) => {
  const classes = useStyles()
  const handleClickDelete = () => {
    console.log('Request on delete todo:', selectedTodo.id, selectedTodo.title)
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
          Удалить запись?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Запись будет перемещена в корзину, вы сможете её легко восстановить.
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

export default DeleteTodoDialog