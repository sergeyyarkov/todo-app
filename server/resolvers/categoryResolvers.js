const { Category, Todo } = require('../models')

const categoryResolvers = {
  Query: {
    categories: () => Category.find({}),
    category: (_, { id }) => Category.findById(id),
  },
  Mutation: {
    createCategory: (_, { title }) => {
      const category = new Category({
        title,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      return category.save()
    },
    deleteCategory: async (_, { id }) => {
      const deletedCategory = await Category.findByIdAndRemove(id)
        await Todo.deleteMany({ categoryId: id })
        
      return deletedCategory
    },
    updateCategory: (_, { id, title }) => Category.findByIdAndUpdate(id, { $set: { title, updatedAt: new Date().toISOString() } }, { new: true })
  },
  Category: {
    todos: ({ id }) => Todo.find({ categoryId: id }),
  },
}

module.exports = {
  categoryResolvers,
}
