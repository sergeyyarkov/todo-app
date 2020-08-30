import React from 'react';
import useStyles from '../styles'
import WarningIcon from '@material-ui/icons/Warning';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks'

import GET_TODOS from '../../../apollo/queries/todos/todos'
import GET_TODOS_BY_CATEGORY from '../../../apollo/queries/todos/todosByCategory'
import DELETE_TODO from '../../../apollo/mutations/todos/deleteTodo'

const DeleteTodoDialog = ({ isOpenDialog, handleCloseDialog, selectedTodo }) => {
  const classes = useStyles()

  const [deleteTodo] = useMutation(DELETE_TODO, { 
    update(cache, { data: { deleteTodo } }) {
      try {
        try {
          const { todos } = cache.readQuery({ query: GET_TODOS })
          cache.writeQuery({
            query: GET_TODOS,
            data: { todos: todos.filter(todo => todo.id !== deleteTodo.id) }
          })
        } catch {
          console.log()
        }
        const { category } = cache.readQuery({ query: GET_TODOS_BY_CATEGORY, variables: { id: deleteTodo.category.id } })
        cache.writeQuery({
          query: GET_TODOS_BY_CATEGORY,
          variables: { id: deleteTodo.category.id },
          data: { category: { title: category.title, todos: category.todos.filter(todo => todo.id !== deleteTodo.id), __typename: 'Category' } }
        })
      } catch {
        return null
      }
    }
   })

  const handleClickDelete = () => {
    try {
      deleteTodo({
        variables: {
          id: selectedTodo.id
        }
      })
      handleCloseDialog()
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
          <Button onClick={handleClickDelete} color="secondary">
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default DeleteTodoDialog