const { ApolloServer, gql } = require('apollo-server')

let recipes = [
  {
    name: "Lihapullat ja muusi",
    ingredients: [
      '2 rkl voita',
      '8 kpl perunoita',
      'ripaus suolaa',
      '1 prk ruokakermaa',
      '2 dl vettä',
      '150 g varsiparsakaalia',
      '400 g jauhelihaa',
      '125 g juustoa',
      '1 kananmuna',
      '1/2 dl korppujauhoja',
      '1/2 tl suolaa'
    ]
  }
]

const typeDefs = gql`
  type Recipe {
    name: String!,
    ingredients: [String!]!
  }

  type Query {
    recipeCount: Int!
    allRecipes: [Recipe!]!
    findRecipe(name: String!): Recipe
  }
`

const resolvers = {
  Query: {
    recipeCount: () => recipes.length,
    allRecipes: () => recipes,
    findRecipe: (root, args) =>
      recipes.find(r => r.name === args.name)
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`)
})