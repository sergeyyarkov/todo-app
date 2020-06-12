import React from 'react';
import UpdateTodoModal from '../Modals/Todo/UpdateTodoModal'
import { Card, CardActions, CardContent, Typography, Grid, IconButton, makeStyles } from '@material-ui/core'

import RestoreIcon from '@material-ui/icons/Restore';
import DeleteIcon from '@material-ui/icons/Delete'
import AlarmIcon from '@material-ui/icons/Alarm';
import EditIcon from '@material-ui/icons/Edit';


import categories from '../../db/categories.json'

const useStyles = makeStyles((theme) => ({
  alarmIcon: {
    marginRight: 10
  },
  cardActions: {
    justifyContent: 'flex-end'
  },
  cardHeading: {
    marginBottom: 10
  },
  cardCategoryHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: 14
  },
  cardAlarm: {
    display: 'flex',
    alignItems: 'center'
  },
  fab: {
    position: 'fixed',
    margin: 30,
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const Todos = ({ data, fromTrashContainer }) => {
  const classes = useStyles()
  const [selectedTodo, setSelectedTodo] = React.useState({
    title: '',
    description: '',
    category: '',
    deadline: ''
  })
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const handleOpenModal = todo => {
    setSelectedTodo({
      title: todo.title,
      description: todo.description,
      category: todo.categoryId,
      deadline: todo.deadline
    })
    setIsModalOpen(true)
  }
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <>
      {!fromTrashContainer ? <UpdateTodoModal isModalOpen={isModalOpen} handleOpenModal={handleOpenModal} handleCloseModal={handleCloseModal} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} /> : null}
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
                : <IconButton aria-label="restore">
                    <RestoreIcon />
                  </IconButton> 
               }
              <IconButton aria-label="delete" color='secondary'>
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