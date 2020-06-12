import React from 'react';
import useStyles from './styles'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'

import categories from '../../../db/categories.json'

const UpdateTodoModal = ({ isModalOpen, handleCloseModal, selectedTodo, setSelectedTodo }) => {
  const classes = useStyles()
  const handleFormSubmit = e => {
    e.preventDefault()
    const elements = e.target.elements
    const data = {
      title: elements.title.value,
      description: elements.description.value,
      category: elements.category.value,
      deadline: elements.deadline.value
    }
    handleCloseModal()
    console.log('Request on update:', data)
  }

  const handleFieldChange = e => {
    const target = e.target
    setSelectedTodo({
      title: target.name === 'title' ? target.value : selectedTodo.title,
      description: target.name === 'description' ? target.value : selectedTodo.description,
      category: target.name === 'category' ? target.value : selectedTodo.category,
      deadline: target.name === 'deadline' ? target.value : selectedTodo.deadline
    })
  }

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
                {categories.map((category, i) => <MenuItem key={i} value={category._id.$oid}>{category._id.$oid}</MenuItem>)}
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