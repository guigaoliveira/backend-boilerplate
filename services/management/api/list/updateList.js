const { ForbiddenError } = require('apollo-server')
const {
	updateListWithOwnerFragment,
	updateListFragment,
} = require('./fragments')

exports.updateList = async (_, args, ctx) => {
	const { id, name, description } = args
	const listRequest = await ctx.prisma
		.list({ id })
		.$fragment(updateListWithOwnerFragment)

	if (!listRequest) throw new ForbiddenError(`this list does not exist`)

	const { owner } = listRequest

	if (owner && owner.id !== ctx.sessionUser.id)
		throw new ForbiddenError(`you do not have permission for this list`)

	return ctx.prisma
		.updateList({
			data: {
				name,
				description,
			},
			where: { id },
		})
		.$fragment(updateListFragment)
}
