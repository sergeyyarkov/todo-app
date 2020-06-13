import React from 'react';
import useStyles from './styles'
import UpdateTodoModal from '../Modals/Todo/UpdateTodoModal'
import DeleteTodoDialog from '../Dialogs/Todo/DeleteTodoDialog'
import DeleteTodoСompletelyDialog from '../Dialogs/Todo/DeleteTodoСompletelyDialog'
import RestoreTodoDialog from '../Dialogs/Todo/RestoreTodoDialog'
import { Card, CardActions, CardContent, Typography, Grid, IconButton } from '@material-ui/core'

import RestoreIcon from '@material-ui/icons/Restore';
import DeleteIcon from '@material-ui/icons/Delete'
import AlarmIcon from '@material-ui/icons/Alarm';
import EditIcon from '@material-ui/icons/Edit';

import categories from '../../db/categories.json'

const Todos = ({ data, fromTrashContainer }) => {
  const classes = useStyles()
  const [selectedTodo, setSelectedTodo] = React.useState({
    title: '',
    description: '',
    category: '',
    deadline: ''
  })
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isOpenDialog, setIsOpenDialog] = React.useState(false);
  const [isOpenRestoreDialog, setIsOpenRestoreDialog] = React.useState(false)

  const handleOpenModal = todo => {
    const selectedTodo = {
      id: todo._id.$oid,
      title: todo.title,
      description: todo.description,
      category: todo.categoryId,
      deadline: todo.deadline
    }

    setSelectedTodo(selectedTodo)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => setIsModalOpen(false)

  const handleOpenDialog = todo => {
    setSelectedTodo({
      id: todo._id.$oid,
      title: todo.title,
      description: todo.description,
      category: todo.categoryId,
      deadline: todo.deadline
    })
    setIsOpenDialog(true)
  }
  const handleCloseDialog = () =>  setIsOpenDialog(false)

  const handleOpenRestoreDialog = todo => {
    setSelectedTodo({
      id: todo._id.$oid,
      title: todo.title,
      description: todo.description,
      category: todo.categoryId,
      deadline: todo.deadline
    })
    setIsOpenRestoreDialog(true)
  }

  const handleCloseRestoreDialog = () => setIsOpenRestoreDialog(false)

  return (
    <>
      {!fromTrashContainer 
        ? <>
            <UpdateTodoModal isModalOpen={isModalOpen} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
            <DeleteTodoDialog isOpenDialog={isOpenDialog} handleCloseDialog={handleCloseDialog} selectedTodo={selectedTodo} />
          </>
        : <>
            <DeleteTodoСompletelyDialog isOpenDialog={isOpenDialog} handleCloseDialog={handleCloseDialog} selectedTodo={selectedTodo} />
            <RestoreTodoDialog isOpenDialog={isOpenRestoreDialog} handleCloseDialog={handleCloseRestoreDialog} selectedTodo={selectedTodo} />
          </>
      }
      {data.map((todo, i) => 
        <Grid key={i} item xs={12} md={4} lg={3}>
          <Card>
            <CardContent>
              <Typography className={classes.cardCategoryHeading} color="textSecondary" gutterBottom>
                {categories.find(category => category._id.$oid === todo.categoryId).title}
                <span className={classes.cardAlarm}>
                  <AlarmIcon className={classes.alarmIcon} color='action' />
                  {todo.deadline}
                </span>
              </Typography>
              <Typography className={classes.cardHeading} variant="h5" component="h2">
                {todo.title}
              </Typography>
              <Typography variant="body2" component="p">
                {todo.description}
              </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
              {!fromTrashContainer 
                ? <IconButton onClick={() => handleOpenModal(todo)} aria-label="update">
                    <EditIcon />
                  </IconButton> 
                : <IconButton onClick={() => handleOpenRestoreDialog(todo)} aria-label="restore">
                    <RestoreIcon />
                  </IconButton> 
               }
              <IconButton onClick={() => handleOpenDialog(todo)} aria-label="delete" color='secondary'>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      )}
    </>
  )
}

export default Todos