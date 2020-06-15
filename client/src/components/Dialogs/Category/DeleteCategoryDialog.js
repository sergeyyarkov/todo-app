import React from 'react';
import { useHistory } from "react-router-dom";
import useStyles from '../styles'
import WarningIcon from '@material-ui/icons/Warning';
import { useParams } from 'react-router-dom'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks'

import GET_CATEGORIES from '../../../apollo/queries/categories/categories'
import DELETE_CATEGORY from '../../../apollo/mutations/categories/deleteCategoty'

const DeleteCategoryDialog = ({ isOpenDialog, handleCloseDialog }) => {
  const classes = useStyles()
  const history = useHistory();
  const { id } = useParams()

  const [deleteCategory] = useMutation(DELETE_CATEGORY, { 
    update(cache, { data: { deleteCategory } }) {
      const { categories } = cache.readQuery({ query: GET_CATEGORIES })
      cache.writeQuery({
        query: GET_CATEGORIES,
        data: { categories: categories.filter(category => category.id !== deleteCategory.id) }
      })
    }
   })

  const handleClickDelete = () => {
    try {
      deleteCategory({
        variables: {
          id
        }
      })
      handleCloseDialog()
      history.push("/");
    } catch (error) {
      console.log(error)
    }
    
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