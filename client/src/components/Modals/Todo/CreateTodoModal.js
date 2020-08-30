import React from 'react';
import useStyles from '../styles'
import { Dialog, DialogContent, DialogTitle, DialogActions, Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'

import { Query } from 'react-apollo'
import { useMutation } from '@apollo/react-hooks'

import CREATE_TODO from '../../../apollo/mutations/todos/createTodo';
import GET_TODOS from '../../../apollo/queries/todos/todos';
import GET_TODOS_BY_CATEGORY from '../../../apollo/queries/todos/todosByCategory'
import GET_CATEGORIES from '../../../apollo/queries/categories/categories'

const CreateTodoModal = ({ isModalOpen, handleCloseModal }) => {
  const classes = useStyles()
  const [fieldsData, setFieldsData] = React.useState({
    title: '',
    description: '',
    category: '',
    deadline: ''
  })

  // create todo mutation
  const [createTodo] = useMutation(CREATE_TODO, { 
    update(cache, { data: { createTodo } }) {
      const { todos } = cache.readQuery({ query: GET_TODOS })
      cache.writeQuery({
        query: GET_TODOS,
        data: { todos: todos.concat([createTodo]) }
      });

      try {
        const { category } = cache.readQuery({ query: GET_TODOS_BY_CATEGORY, variables: { id: fieldsData.category } })
        cache.writeQuery({
          query: GET_TODOS_BY_CATEGORY,
          variables: { id: fieldsData.category },
          data: { category: { title: category.title, todos: category.todos.concat([createTodo]), __typename: 'Category' } }
        })
      } catch {
        return null
      }      
    }
   })

  const handleFormSubmit = e => {
    try {
      e.preventDefault()
      const elements = e.target.elements

      if (!elements.title.value.trim() || !elements.description.value.trim() || !elements.category.value.trim() || !elements.deadline.value.trim()) {
        window.alert('Проверьте правильность введенных данных!')
        return
      }

       createTodo({
         variables: {
           title: elements.title.value.trim(),
           description: elements.description.value.trim(),
           categoryId: elements.category.value.trim(),
           deadline: elements.deadline.value.trim()
         }
       })
      handleCloseModal()
      setFieldsData({
        title: '',
        description: '',
        category: '',
        deadline: ''
      })
    } catch (error) {
      console.log(error)
    }
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
    <Query query={GET_CATEGORIES}>
      {({ loading, error, data }) => {
        if (loading) return null;
        if (error) return `Error! ${error.message}`;

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
                      {data.categories.map((category, i) => <MenuItem key={i} value={category.id}>{category.title}</MenuItem>)}
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
      }}
    </Query>
  )
}

export default CreateTodoModal