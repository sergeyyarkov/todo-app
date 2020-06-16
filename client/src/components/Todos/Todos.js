import React from 'react';
import useStyles from './styles'
import UpdateTodoModal from '../Modals/Todo/UpdateTodoModal'
import DeleteTodoDialog from '../Dialogs/Todo/DeleteTodoDialog'
import { Card, CardActions, CardContent, Typography, Grid, IconButton } from '@material-ui/core'

import DeleteIcon from '@material-ui/icons/Delete'
import AlarmIcon from '@material-ui/icons/Alarm';
import EditIcon from '@material-ui/icons/Edit';

const Todos = ({ data }) => {
  const classes = useStyles()
  const [selectedTodo, setSelectedTodo] = React.useState({
    title: '',
    description: '',
    category: '',
    deadline: ''
  })
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isOpenDialog, setIsOpenDialog] = React.useState(false);

  const handleOpenModal = todo => {
    const selectedTodo = {
      id: todo.id,
      title: todo.title,
      description: todo.description,
      category: todo.category.id,
      deadline: todo.deadline
    }

    setSelectedTodo(selectedTodo)
    setIsModalOpen(true)
  }
  const handleCloseModal = () => setIsModalOpen(false)

  const handleOpenDialog = todo => {
    setSelectedTodo({
      id: todo.id,
      title: todo.title,
      description: todo.description,
      category: todo.category,
      deadline: todo.deadline
    })
    setIsOpenDialog(true)
  }
  const handleCloseDialog = () =>  setIsOpenDialog(false)

  return (
    <>
      <UpdateTodoModal isModalOpen={isModalOpen} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} />
      <DeleteTodoDialog isOpenDialog={isOpenDialog} handleCloseDialog={handleCloseDialog} selectedTodo={selectedTodo} />
      {data.map((todo, i) => {
        if (todo.category) {
           return (
            <Grid key={i} item xs={12} md={4} lg={3}>
            <Card>
              <CardContent>
                <Typography className={classes.cardCategoryHeading} color="textSecondary" gutterBottom>
                  {todo.category.title}
                  <span className={classes.cardAlarm}>
                    <AlarmIcon className={classes.alarmIcon} color='action' />
                    {new Date(todo.deadline).toLocaleString()}
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
                  <IconButton onClick={() => handleOpenModal(todo)} aria-label="update">
                    <EditIcon />
                  </IconButton> 
                <IconButton onClick={() => handleOpenDialog(todo)} aria-label="delete" color='secondary'>
                  <DeleteIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
           )
        } else {
          return null
        }
      })}
    </>
  )
}

export default Todos