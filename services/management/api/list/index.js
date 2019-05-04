const { createList } = require('./createList')
const { updateList } = require('./updateList')
const { deleteList } = require('./deleteList')
const { getList } = require('./getList')
const { getLists } = require('./getLists')

module.exports = {
	Query: { getList, getLists },
	Mutation: { createList, updateList, deleteList },
}
