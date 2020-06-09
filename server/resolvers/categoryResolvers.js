const { Category, Todo } = require('../models')

const categoryResolvers = {
  Query: {
    categories: () => Category.find({}),
    category: (_, { id }) => Category.findById(id),
  },
  Mutation: {
    createCategory: (_, { title, description }) => {
      const category = new Category({
        title,
        description,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      })
      return category.save()
    },
    deleteCategory: async (_, { id }) => {
      const deletedCategory = await Category.findByIdAndRemove(id)
      return deletedCategory
    },
    updateCategory: (_, { id, title, description }) => Category.findByIdAndUpdate(id, { $set: { title, description, updatedAt: new Date().toISOString() } }, { new: true })
  },
  Category: {
    todos: ({ id }) => Todo.find({ categoryId: id }),
  },
}

module.exports = {
  categoryResolvers,
}
