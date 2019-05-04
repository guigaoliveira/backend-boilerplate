const GraphQLJSON = require("graphql-type-json");
const { Query: UserQueries, Mutation: UserMutations } = require("./user");
const { Query: ListQueries, Mutation: ListMutations } = require("./list");
const { Query: TodoQueries, Mutation: TodoMutations } = require("./todo");

exports.resolvers = {
  Query: {
    ...UserQueries,
    ...ListQueries,
    ...TodoQueries
  },
  Mutation: {
    ...UserMutations,
    ...ListMutations,
    ...TodoMutations
  },
  //Subscription: {},
  JSON: GraphQLJSON
};
