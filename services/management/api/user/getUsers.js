const { getUsersFragment } = require('./fragments')

exports.getUsers = async (_, args, ctx) => {
	const { emailOrUsername } = args
	const users = emailOrUsername
		? await ctx.prisma
				.users({
					where: {
						id_not: ctx.sessionUser.id,
						OR: [
							{ email_starts_with: emailOrUsername },
							{ username_starts_with: emailOrUsername },
						],
					},
					first: 5,
				})
				.$fragment(getUsersFragment)
		: []
	return users
}
