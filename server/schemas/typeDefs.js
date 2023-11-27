const typeDefs = `
    type User {
            _id: ID
            username: String
            email: String
            password: String
            savedBooks: [Book]
            bookCount: Int

        }

    type Book {
            authors: [String]
            description: String
            bookId: String
            image: String
            link: String
            title: String
        }

    type Auth {
            token: ID!
            user: User
        }

    input BookDataInput {
            authors: [String]
            description: String!
            title: String!
            bookId: String!
            image: String
            link: String
        }

    type Query {
            me: User
        }

    type Mutation {
            addUser(username: String!, email: String!, password: String!): Auth
            login(email: String!, password: String!): Auth
            saveBook(input: BookDataInput!): User
            removeBook(bookId: String!): User
        }
    
`;

module.exports =  typeDefs ;