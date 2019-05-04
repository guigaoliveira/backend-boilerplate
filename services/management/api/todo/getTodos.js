exports.getTodos = async (_, args, ctx) => {
	const { listId, skip, first, orderBy } = args
	console.log(listId, skip, first, orderBy)
	return {}
}
