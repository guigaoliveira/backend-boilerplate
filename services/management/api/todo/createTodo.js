exports.createTodo = async (_, args, ctx) => {
	const { text, listId } = args
	console.log(text, listId)
	return {}
}
