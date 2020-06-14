import React from 'react';
import Fab from '../../components/Fab/Fab'
import Todos from '../../components/Todos/Todos'
import CreateTodoModal from '../../components/Modals/Todo/CreateTodoModal'
import { Query } from 'react-apollo'
import { Typography, Grid, LinearProgress } from '@material-ui/core'

import GET_TODOS from '../../apollo/queries/todos/todos'

const TodosContainer = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <Query query={GET_TODOS}>
      {({ loading, error, data }) => {
        if (loading) return <LinearProgress />
        if (error) return `Error! ${error.message}`;
        return (
          <>
            <CreateTodoModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} />
            <Fab typeIcon='add' color="secondary" size='large' ariaLabel="add" onClick={handleOpenModal} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography>
                    Создавайте, редактируйте или удаляйте ваши повседневные дела.
                  </Typography> 
                </Grid>     
                <Todos data={data.todos} />
            </Grid>
          </>
        )
      }}
    </Query>
  )
}

export default TodosContainer