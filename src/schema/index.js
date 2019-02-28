const typeDefs = `
  type Query {
    questions(query: Pagination!): [Question]
    questionCount: Int
    question(id: ID!): Question
    user(id: ID!): User
  }
  
  type Mutation {
    createQuestion(input: QuestionInput!): Question
    createAnswer(input: PostInput!): Post
    createUser(input: UserInput!): User
    createVote(input: VoteInput!): Vote
  }
  
  type Question {
    _id: ID!
    title: String
    firstPost: Post
    answers: [Post]
  }
  
  type Post {
    _id: ID!
    content: String
    createdAt: String
    author: User
    votes: [Vote]
    voteCount: Int
    question: Question
    isQuestion: Boolean
  }
  
  type User {
    _id: ID!
    username: String
    posts(query: Pagination!): [Post]
    postCount: Int
  }
  
  type Vote {
    _id: ID!
    author: User
    type: String
  }
  
  input Pagination {
    offset: Int
    limit: Int    
  }
  
  input QuestionInput {
    title: String!
    content: String!
    authorId: ID!
  }
  
  input PostInput {
    questionId: ID!
    content: String!
    authorId: ID!
  }
  
  input UserInput {
    username: String!
  }
  
  input VoteInput {
    postId: ID!
    type: String
  }
`;