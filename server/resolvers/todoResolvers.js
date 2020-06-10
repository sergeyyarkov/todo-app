const { Todo, Category } = require('../models')

const todoResolvers = {
  Query: {
    todos: () => Todo.find({}),
    todo: (_, { id }) => Todo.findById(id),
  },
  Mutation: {
    createTodo: (_, { title, description, deadline, categoryId }) => {
      const todo = new Todo({
        title,
        description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'open',
        deadline,
        categoryId,
      })
      return todo.save()
    },
    deleteTodo: async (_, { id }) => {
      const deletedTodo = await Todo.findByIdAndRemove(id)
      return deletedTodo
    },
    updateTodo: (_, { id, title, description, status, deadline, categoryId }) => Todo.findByIdAndUpdate(id, { $set: { title, description, updatedAt: new Date().toISOString(), status, deadline, categoryId } }, { new: true }),
  },
  Todo: {
    category: ({ categoryId }) => Category.findById(categoryId),
  },
}

module.exports = {
  todoResolvers,
}
