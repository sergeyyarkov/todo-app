import React from 'react';
import useStyles from '../styles'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'


const UpdateCategoryModal = ({ isModalOpen, handleCloseModal, selectedCategory, setSelectedCategory }) => {
  const classes = useStyles()
  const handleFormSubmit = e => {
    e.preventDefault()
    const elements = e.target.elements
    const data = {
      id: elements.title.value,
    }
    handleCloseModal()
    console.log('Request on update category:', data)
  }

  console.log(selectedCategory)

  const handleFieldChange = e => {
    const target = e.target
    // setSelectedCategory({
    //   id: target.name === 'title' ? target.value : selectedTodo.title,
    // })
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
              value={selectedCategory.id}
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