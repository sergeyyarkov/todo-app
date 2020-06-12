import React from 'react';
import Fab from '../../components/Fab/Fab'
import Todos from '../../components/Todos/Todos'
import CreateTodoModal from '../../components/Modals/Todo/CreateTodoModal'
import { Typography, Grid } from '@material-ui/core'

import todosData from '../../db/todos.json'

const TodosContainer = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)
  return (
    <>
      <CreateTodoModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
      <Fab typeIcon='add' color="secondary" size='large' ariaLabel="add" handleOpenModal={handleOpenModal} />
      <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              Создавайте, редактируйте или удаляйте ваши повседневные дела.
            </Typography> 
          </Grid>     
          <Todos data={todosData} />
      </Grid>
    </>
  )
}

export default TodosContainer