import React from 'react';
import useStyles from '../styles'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField } from '@material-ui/core'
import { useMutation } from '@apollo/react-hooks'
import CategoryIcon from '@material-ui/icons/Category';

import CREATE_CATEGORY from '../../../apollo/mutations/categories/createCategory'
import GET_CATEGORIES from '../../../apollo/queries/categories/categories';

const CreateCategoryModal = ({ isModalOpen, handleCloseModal }) => {
  const classes = useStyles()

  // create category mutation
  const [createCategory] = useMutation(CREATE_CATEGORY, { 
    update(cache, { data: { createCategory } }) {
      const { categories } = cache.readQuery({ query: GET_CATEGORIES })
      cache.writeQuery({
        query: GET_CATEGORIES,
        data: { categories: categories.concat([createCategory]) }
      });
    }
   })

  const [fieldsData, setFieldsData] = React.useState({
    title: '',
  })

  const handleFormSubmit = e => {
    try {
      e.preventDefault()
      const elements = e.target.elements
      createCategory({
        variables: {
          title: elements.title.value
        }
      })
      handleCloseModal()
      setFieldsData({
        title: '',
      })
    } catch (error) {
      console.log(error)
    }
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