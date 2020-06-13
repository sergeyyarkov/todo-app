import React from 'react';
import useStyles from '../styles'
import WarningIcon from '@material-ui/icons/Warning';
import { useParams } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

const DeleteCategoryDialog = ({ isOpenDialog, handleCloseDialog }) => {
  const classes = useStyles()
  const { id } = useParams()
  const handleClickDelete = () => {
    console.log('Request on delete category:', id)
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
          Удалить категорию?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Все существующие в ней ваши задачи будут также удалены.
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

export default DeleteCategoryDialog