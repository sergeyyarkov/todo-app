import React from 'react';
import Todos from '../../components/Todos/Todos'
import UpdateCategoryModal from '../../components/Modals/Category/UpdateCategoryModal'
import DeleteCategoryDialog from '../../components/Dialogs/Category/DeleteCategoryDialog'
import Fab from '../../components/Fab/Fab'
import { Grid, Typography, LinearProgress } from '@material-ui/core'
import { Query } from 'react-apollo'
import { useParams } from 'react-router-dom'

import GET_TODOS_BY_CATEGORY from '../../apollo/queries/todos/todosByCategory'

const Category = () => {
  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [isOpenDialog, setIsOpenDialog] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState({ id: '', title: '' })

  React.useEffect(() => {
    setSelectedCategory({ id, title: '' })
  }, [id]);
  
  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleOpenDialog = () => setIsOpenDialog(true)
  const handleCloseDialog = () =>  setIsOpenDialog(false)
  
  return (
    <Query query={GET_TODOS_BY_CATEGORY} variables={{ id }}>
      {({ loading, error, data }) => {
        if (loading) return <LinearProgress />
        if (error) return `Error! ${error.message}`;
        if (data.category.todos <= 0) return 'В этой категории задач пока что нету'
        return (
          <>
            <UpdateCategoryModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <DeleteCategoryDialog isOpenDialog={isOpenDialog} handleCloseDialog={handleCloseDialog} />
            <Fab style={{ marginRight: '6.5rem' }} size='large' ariaLabel='add' typeIcon='edit' onClick={handleOpenModal} />
            <Fab size='large' color="secondary" ariaLabel='delete' typeIcon='delete' onClick={handleOpenDialog} />  
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography>
                  Сортируйте свои повседневные дела используя категории.
                </Typography>
              </Grid>
              {/* Здесь берем значение slug из query и передаем полученные данные в prop data !!!!  */}
              <Todos data={data.category.todos} />
            </Grid>
          </>
        )
      }}
    </Query>
  )
}

export default Category