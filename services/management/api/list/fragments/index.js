const gql = require('graphql-tag')

const ownerIdPart = `owner{ id }`
const idNameDescriptionUpdatedAtPart = `id name description updatedAt createdAt`
const todoPart = `todos{ id text marked updatedAt createdAt }`

exports.getListFragment = gql`
	fragment getListFragment on List {
		${idNameDescriptionUpdatedAtPart}
		${ownerIdPart}
		${todoPart}
	}
`

exports.getListsFragment = gql`
	fragment getListsFragment on List {
		${idNameDescriptionUpdatedAtPart}
	}
`
exports.updateListWithOwnerFragment = gql`
	fragment updateListWithOwnerFragment on List {
		${ownerIdPart}
	}
`

exports.updateListFragment = gql`
	fragment updateListFragment on List {
		${idNameDescriptionUpdatedAtPart}
	}
`
