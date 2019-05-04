const { ForbiddenError } = require('apollo-server')

exports.deleteList = async (_, args, ctx) => {
	const { id } = args
	const owner = await ctx.prisma.list({ id }).owner()
	if (owner.id !== ctx.sessionUser.id)
		throw new ForbiddenError(`you do not have permission for this list`)
	return await ctx.prisma.deleteList({ id })
}
