const { ForbiddenError } = require('apollo-server')
const { getListFragment } = require('./fragments')

exports.getList = async (_, args, ctx) => {
	const { id } = args

	const listRequest = await ctx.prisma.list({ id }).$fragment(getListFragment)

	if (!listRequest) throw new ForbiddenError(`this list does not exist`)

	const { owner, ...list } = listRequest

	if (owner && owner.id !== ctx.sessionUser.id)
		throw new ForbiddenError(`you do not have permission for this list`)

	return list
}
