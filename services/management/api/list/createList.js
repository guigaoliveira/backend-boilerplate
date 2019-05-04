exports.createList = async (_, args, ctx) => {
	const { name, description } = args
	return ctx.prisma.createList({
		name,
		description,
		owner: {
			connect: { id: ctx.sessionUser.id },
		},
	})
}
