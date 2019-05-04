exports.updateTodo = async (_, args, ctx) => {
	const { id, text } = args
	console.log(id, text)
	return {}
}
