import React from 'react';
import useStyles from '../styles'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import { Query } from 'react-apollo'
import { useQuery } from '@apollo/react-hooks'
import GET_CATEGORIES from '../../../apollo/queries/categories/categories'

const UpdateTodoModal = ({ isModalOpen, handleCloseModal, selectedTodo, setSelectedTodo }) => {
  const classes = useStyles()
  const handleFormSubmit = e => {
    e.preventDefault()
    const elements = e.target.elements
    const data = {
      id: selectedTodo.id,
      title: elements.title.value,
      description: elements.description.value,
      categoryId: elements.category.value,
      deadline: elements.deadline.value
    }
    handleCloseModal()
    console.log('Request on update todo:', data)
  }

  const handleFieldChange = e => {
    const target = e.target
    setSelectedTodo({
      id: selectedTodo.id,
      title: target.name === 'title' ? target.value : selectedTodo.title,
      description: target.name === 'description' ? target.value : selectedTodo.description,
      category: target.name === 'category' ? target.value : selectedTodo.category,
      deadline: target.name === 'deadline' ? target.value : selectedTodo.deadline
    })
  }

  const { loading, error, data } = useQuery(GET_CATEGORIES)
  if (loading) return null
  if (error) return `Error: ${error}`
  return (
    <div>
      <Dialog fullWidth={true} open={isModalOpen} onClose={handleCloseModal} color='default'>
        <DialogTitle className={classes.heading}> 
          <EditIcon className={classes.headingIcon} />
          Изменить запись
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit} noValidate autoComplete="off" className={classes.form}>
            <TextField 
              name='title'
              label="Название вашей записи"
              margin="normal"
              placeholder='Название вашей записи'
              variant="outlined"
              className={classes.textField}
              value={selectedTodo.title}
              onChange={handleFieldChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField 
              name='description'
              label="Описание"
              margin="normal"
              placeholder='Описание'
              variant="outlined"
              className={classes.textField}
              value={selectedTodo.description}
              onChange={handleFieldChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <FormControl variant="outlined" className={classes.selectField}>
              <InputLabel id="category-outlined-label">Категория</InputLabel>
              <Select
                labelId="category-outlined-label"
                id="demo-simple-select-outlined"
                name='category'
                value={selectedTodo.category}
                onChange={handleFieldChange}
                label="Категория"
              >
                {data.categories.map((category, i) => <MenuItem key={i} value={category.id}>{category.title}</MenuItem>)}
              </Select>
            </FormControl>
            <TextField
              name='deadline'
              label="Дедлайн"
              variant="outlined"
              type="datetime-local"
              className={classes.textField}
              value={selectedTodo.deadline}
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

export default UpdateTodoModal