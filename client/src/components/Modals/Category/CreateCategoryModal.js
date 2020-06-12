import React from 'react';
import useStyles from '../styles'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField } from '@material-ui/core'

import CategoryIcon from '@material-ui/icons/Category';

const CreateCategoryModal = ({ isModalOpen, handleCloseModal }) => {
  const classes = useStyles()
  const [fieldsData, setFieldsData] = React.useState({
    title: '',
  })

  const handleFormSubmit = e => {
    e.preventDefault()
    const elements = e.target.elements
    const data = {
      title: elements.title.value,
    }
    handleCloseModal()
    setFieldsData({
      title: '',
    })
    console.log('Request on create category:', data)
  }

  const handleFieldChange = e => {
    const target = e.target 
    setFieldsData({
      title: target.name === 'title' ? target.value : fieldsData.title,
    })
  }

  return (
    <div>
      <Dialog fullWidth={true} open={isModalOpen} onClose={handleCloseModal} color='default'>
        <DialogTitle> 
          <CategoryIcon className={classes.headingIcon} /> Добавить новую категорию
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleFormSubmit} noValidate autoComplete="off" className={classes.form}>
            <TextField 
              name='title'
              label="Название категории"
              margin="normal"
              placeholder='Название вашей категории'
              variant="outlined"
              className={classes.textField}
              value={fieldsData.title}
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

export default CreateCategoryModal