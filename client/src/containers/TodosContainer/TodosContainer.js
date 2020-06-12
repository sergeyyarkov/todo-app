import React from 'react';
import Todos from '../../components/Todos/Todos'
import CreateTodoModal from '../../components/Modals/Todo/CreateTodoModal'
import { Typography, Grid } from '@material-ui/core'

const TodosContainer = () => {
  return (
    <>
      <CreateTodoModal />
      <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>
              Создавайте, редактируйте или удаляйте ваши повседневные дела.
            </Typography> 
          </Grid>     
          <Todos data={[1,2,3,4,5,6]} />
      </Grid>
    </>
  )
}

export default TodosContainer