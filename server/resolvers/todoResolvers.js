const { Todo, Category } = require('../models')

const todoResolvers = {
  Query: {
    todos: () => Todo.find({}),
    todo: (_, { id }) => Todo.findById(id),
  },
  Mutation: {
    createTodo: (_, { title, categoryId }) => {
      const todo = new Todo({
        title,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        status: 'open',
        categoryId,
      })
      return todo.save()
    },
    deleteTodo: async (_, { id }) => {
      const deletedTodo = await Todo.findByIdAndRemove(id)
      return deletedTodo
    },
    updateTodo: (_, { id, title, status, categoryId }) => Todo.findByIdAndUpdate(id, { $set: { title, updatedAt: new Date().toISOString(), status, categoryId } }, { new: true }),
  },
  Todo: {
    category: ({ categoryId }) => Category.findById(categoryId),
  },
}

module.exports = {
  todoResolvers,
}
