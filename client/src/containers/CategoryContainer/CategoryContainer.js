import React from 'react';
import Todos from '../../components/Todos/Todos'
import UpdateCategoryModal from '../../components/Modals/Category/UpdateCategoryModal'
import Fab from '../../components/Fab/Fab'
import { Grid, Typography } from '@material-ui/core'

import todos from '../../db/todos.json'
import categories from '../../db/categories.json'

import { useParams } from 'react-router-dom'

const Category = () => {
  const findCategoryById = id => categories.find(category => category._id.$oid === id)

  const { id } = useParams()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState({ id: '', title: '' })

  React.useEffect(() => {
    setSelectedCategory({ id, title: findCategoryById(id).title })
  }, [id]);
  
  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)
  
  return (
    <>
      <UpdateCategoryModal isModalOpen={isModalOpen} handleCloseModal={handleCloseModal} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Fab size='large' ariaLabel='add' typeIcon='edit' handleOpenModal={handleOpenModal} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography>
            Сортируйте свои повседневные дела используя категории.
          </Typography>
        </Grid>
        {/* Здесь берем значение slug из query и передаем полученные данные в prop data !!!!  */}
        <Todos data={todos} />
      </Grid>
    </>
  )
}

export default Category