import React from 'react';
import Fab from '../../../components/Fab/Fab'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  dialog: {
    width: 500
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  textField: {
    margin: '10px 0px'
  },
  selectField: {
    margin: '10px 0px'
  }
}))

const TodosModal = () => {
  const classes = useStyles()
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [selectedCategory, setSelectedCategory] = React.useState('');

  const handleSelectChange = e => {
    setSelectedCategory(e.target.value);
  };

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
    console.log(data)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div>
      <Fab typeIcon='add' color="secondary" size='large' ariaLabel="add" handleOpenModal={handleOpenModal} />
      <Dialog fullWidth={true} open={isModalOpen} onClose={handleCloseModal} color='default'>
        <DialogTitle> 
          Добавить новую запись
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
                value={selectedCategory}
                onChange={handleSelectChange}
                label="Категория"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value='Категория 1'>Категория 1</MenuItem>
                <MenuItem value='Категория 2'>Категория 2</MenuItem>
                <MenuItem value='Категория 3'>Категория 3</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name='deadline'
              label="Дедлайн"
              variant="outlined"
              type="datetime-local"
              className={classes.textField}
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

export default TodosModal