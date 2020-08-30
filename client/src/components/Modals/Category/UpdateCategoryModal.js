import React from 'react';
import useStyles from '../styles'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks'
import EditIcon from '@material-ui/icons/Edit'

import UPDATE_CATEGORY from '../../../apollo/mutations/categories/updateCategory'

const UpdateCategoryModal = ({ isModalOpen, handleCloseModal, selectedCategory, setSelectedCategory }) => {
  const classes = useStyles()

  // update category mutation
  const [updateCategory] = useMutation(UPDATE_CATEGORY)

  const handleFormSubmit = e => {
    try {
      e.preventDefault()
      const elements = e.target.elements

      if (!elements.title.value.trim()) {
        window.alert('Проверьте правильность введенных данных!')
        return
      }

      updateCategory({
        variables: {
          id: selectedCategory.id,
          title: elements.title.value
        }
      })
      handleCloseModal()
    } catch (error) {
      console.log(error)
    }
  }

  const handleFieldChange = e => {
    const target = e.target
    setSelectedCategory({
      id: selectedCategory.id,
      title: target.name === 'title' ? target.value : selectedCategory.title
    })
  }

  return (
    <div>
      <Dialog fullWidth={true} open={isModalOpen} onClose={handleCloseModal} color='default'>
        <DialogTitle className={classes.heading}> 
          <EditIcon className={classes.headingIcon} />
          Изменить категорию
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit} noValidate autoComplete="off" className={classes.form}>
            <TextField 
              name='title'
              label="Название вашей категории"
              margin="normal"
              placeholder='Название вашей категории'
              variant="outlined"
              className={classes.textField}
              value={selectedCategory.title}
              onChange={handleFieldChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <DialogActions>
              <Button type='submit' color="default">
                Обновить
              </Button>
              <Button onClick={handleCloseModal} color="secondary">
                Закрыть
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateCategoryModal