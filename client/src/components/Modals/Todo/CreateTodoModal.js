import React from 'react';
import useStyles from './styles'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import categories from '../../../db/categories.json'

const CreateTodoModal = ({ isModalOpen, handleCloseModal }) => {
  const classes = useStyles()
  const [fieldsData, setFieldsData] = React.useState({
    title: '',
    description: '',
    category: '',
    deadline: ''
  })

  const handleFormSubmit = e => {
    e.preventDefault()
    const elements = e.target.elements
    const data = {
      title: elements.title.value,
      description: elements.description.value,
      categoryId: elements.category.value,
      deadline: elements.deadline.value
    }
    handleCloseModal()
    setFieldsData({
      title: '',
      description: '',
      category: '',
      deadline: ''
    })
    console.log('Request on create todo:', data)
  }

  const handleFieldChange = e => {
    const target = e.target 
    setFieldsData({
      title: target.name === 'title' ? target.value : fieldsData.title,
      description: target.name === 'description' ? target.value : fieldsData.description,
      category: target.name === 'category' ? target.value : fieldsData.category,
      deadline: target.name === 'deadline' ? target.value : fieldsData.deadline
    })
  }

  return (
    <div>
      <Dialog fullWidth={true} open={isModalOpen} onClose={handleCloseModal} color='default'>
        <DialogTitle> 
          <AddIcon className={classes.headingIcon} /> Добавить новую запись
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
              value={fieldsData.title}
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
              value={fieldsData.description}
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
                value={fieldsData.category}
                onChange={handleFieldChange}
                label="Категория"
              >
                {categories.map((category, i) => <MenuItem key={i} value={category._id.$oid}>{category.title}</MenuItem>)}
              </Select>
            </FormControl>
            <TextField
              name='deadline'
              label="Дедлайн"
              variant="outlined"
              type="datetime-local"
              className={classes.textField}
              value={fieldsData.deadline}
              onChange={handleFieldChange}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <DialogActions>
              <Button type='submit' color="default">
                Добавить
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

export default CreateTodoModal