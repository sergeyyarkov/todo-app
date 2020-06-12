import React from 'react';
import Todos from '../../components/Todos/Todos'
import { Grid, Typography } from '@material-ui/core'

import todos from '../../db/todos.json'

const Trash = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography>
          Здесь находятся ваши недавно удаленные записи, вы можете их легко восстановить.
        </Typography> 
      </Grid> 
        {/* Здесь также выполняем нужный запрос на удаленные записи в БД !!!!!!!! */}
      <Todos data={todos} fromTrashContainer={true} />
    </Grid>
  )
}

export default Trash