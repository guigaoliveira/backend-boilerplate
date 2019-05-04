const { getListsFragment } = require('./fragments')

exports.getLists = async (_, args, ctx) => {
	const { skip, first, orderBy = 'updatedAt_DESC' } = args
	const where = { owner: { id: ctx.sessionUser.id } }
	const [lists, count] = await Promise.all([
		ctx.prisma
			.lists({
				where,
				skip,
				first,
				orderBy,
			})
			.$fragment(getListsFragment),
		ctx.prisma
			.listsConnection({ where })
			.aggregate()
			.count(),
	])

	return { lists, count }
}
