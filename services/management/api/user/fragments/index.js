const gql = require('graphql-tag')

const idNameUsernameEmailPart = `id name username email`

exports.createUserFragment = gql`
	fragment createUserFragment on User {
		id
	}
`
exports.getOwnUserFragment = gql`
	fragment getOwnUserFragment on User {
		${idNameUsernameEmailPart}
		role
	}
`
exports.getUsersFragment = gql`
	fragment getUsersFragment on User {
		${idNameUsernameEmailPart}
	}
`
exports.loginUserFragment = gql`
	fragment loginUserFragment on User {
		id
		password
	}
`
