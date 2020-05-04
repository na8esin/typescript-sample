"use strict";
// @flow strict
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const graphql_2 = require("graphql");
const graphql_3 = require("graphql");
const starWarsData_1 = require("./starWarsData");
/**
 * This is designed to be an end-to-end test, demonstrating
 * the full GraphQL stack.
 *
 * We will create a GraphQL schema that describes the major
 * characters in the original Star Wars trilogy.
 *
 * NOTE: This may contain spoilers for the original Star
 * Wars trilogy.
 */
/**
 * Using our shorthand to describe type systems, the type system for our
 * Star Wars example is:
 *
 * enum Episode { NEW_HOPE, EMPIRE, JEDI }
 *
 * interface Character {
 *   id: String!
 *   name: String
 *   friends: [Character]
 *   appearsIn: [Episode]
 * }
 *
 * type Human implements Character {
 *   id: String!
 *   name: String
 *   friends: [Character]
 *   appearsIn: [Episode]
 *   homePlanet: String
 * }
 *
 * type Droid implements Character {
 *   id: String!
 *   name: String
 *   friends: [Character]
 *   appearsIn: [Episode]
 *   primaryFunction: String
 * }
 *
 * type Query {
 *   hero(episode: Episode): Character
 *   human(id: String!): Human
 *   droid(id: String!): Droid
 * }
 *
 * We begin by setting up our schema.
 */
/**
 * The original trilogy consists of three movies.
 *
 * This implements the following type system shorthand:
 *   enum Episode { NEW_HOPE, EMPIRE, JEDI }
 */
const episodeEnum = new graphql_3.GraphQLEnumType({
    name: "Episode",
    description: "One of the films in the Star Wars Trilogy",
    values: {
        NEW_HOPE: {
            value: 4,
            description: "Released in 1977."
        },
        EMPIRE: {
            value: 5,
            description: "Released in 1980."
        },
        JEDI: {
            value: 6,
            description: "Released in 1983."
        }
    }
});
/**
 * Characters in the Star Wars trilogy are either humans or droids.
 *
 * This implements the following type system shorthand:
 *   interface Character {
 *     id: String!
 *     name: String
 *     friends: [Character]
 *     appearsIn: [Episode]
 *     secretBackstory: String
 *   }
 */
const characterInterface = new graphql_3.GraphQLInterfaceType({
    name: "Character",
    description: "A character in the Star Wars Trilogy",
    fields: () => ({
        id: {
            type: graphql_3.GraphQLNonNull(graphql_2.GraphQLString),
            description: "The id of the character."
        },
        name: {
            type: graphql_2.GraphQLString,
            description: "The name of the character."
        },
        friends: {
            type: graphql_3.GraphQLList(characterInterface),
            description: "The friends of the character, or an empty list if they have none."
        },
        appearsIn: {
            type: graphql_3.GraphQLList(episodeEnum),
            description: "Which movies they appear in."
        },
        secretBackstory: {
            type: graphql_2.GraphQLString,
            description: "All secrets about their past."
        }
    }),
    resolveType(character) {
        if (character.type === "Human") {
            return humanType;
        }
        if (character.type === "Droid") {
            return droidType;
        }
        // Not reachable. All possible types have been considered.
        //invariant(false);
    }
});
/**
 * We define our human type, which implements the character interface.
 *
 * This implements the following type system shorthand:
 *   type Human : Character {
 *     id: String!
 *     name: String
 *     friends: [Character]
 *     appearsIn: [Episode]
 *     secretBackstory: String
 *   }
 */
const humanType = new graphql_3.GraphQLObjectType({
    name: "Human",
    description: "A humanoid creature in the Star Wars universe.",
    fields: () => ({
        id: {
            type: graphql_3.GraphQLNonNull(graphql_2.GraphQLString),
            description: "The id of the human."
        },
        name: {
            type: graphql_2.GraphQLString,
            description: "The name of the human."
        },
        friends: {
            type: graphql_3.GraphQLList(characterInterface),
            description: "The friends of the human, or an empty list if they have none.",
            resolve: human => starWarsData_1.getFriends(human)
        },
        appearsIn: {
            type: graphql_3.GraphQLList(episodeEnum),
            description: "Which movies they appear in."
        },
        homePlanet: {
            type: graphql_2.GraphQLString,
            description: "The home planet of the human, or null if unknown."
        },
        secretBackstory: {
            type: graphql_2.GraphQLString,
            description: "Where are they from and how they came to be who they are.",
            resolve() {
                throw new Error("secretBackstory is secret.");
            }
        }
    }),
    interfaces: [characterInterface]
});
/**
 * The other type of character in Star Wars is a droid.
 *
 * This implements the following type system shorthand:
 *   type Droid : Character {
 *     id: String!
 *     name: String
 *     friends: [Character]
 *     appearsIn: [Episode]
 *     secretBackstory: String
 *     primaryFunction: String
 *   }
 */
const droidType = new graphql_3.GraphQLObjectType({
    name: "Droid",
    description: "A mechanical creature in the Star Wars universe.",
    fields: () => ({
        id: {
            type: graphql_3.GraphQLNonNull(graphql_2.GraphQLString),
            description: "The id of the droid."
        },
        name: {
            type: graphql_2.GraphQLString,
            description: "The name of the droid."
        },
        friends: {
            type: graphql_3.GraphQLList(characterInterface),
            description: "The friends of the droid, or an empty list if they have none.",
            resolve: droid => starWarsData_1.getFriends(droid)
        },
        appearsIn: {
            type: graphql_3.GraphQLList(episodeEnum),
            description: "Which movies they appear in."
        },
        secretBackstory: {
            type: graphql_2.GraphQLString,
            description: "Construction date and the name of the designer.",
            resolve() {
                throw new Error("secretBackstory is secret.");
            }
        },
        primaryFunction: {
            type: graphql_2.GraphQLString,
            description: "The primary function of the droid."
        }
    }),
    interfaces: [characterInterface]
});
/**
 * This is the type that will be the root of our query, and the
 * entry point into our schema. It gives us the ability to fetch
 * objects by their IDs, as well as to fetch the undisputed hero
 * of the Star Wars trilogy, R2-D2, directly.
 *
 * This implements the following type system shorthand:
 *   type Query {
 *     hero(episode: Episode): Character
 *     human(id: String!): Human
 *     droid(id: String!): Droid
 *   }
 *
 */
const queryType = new graphql_3.GraphQLObjectType({
    name: "Query",
    fields: () => ({
        hero: {
            type: characterInterface,
            args: {
                episode: {
                    description: "If omitted, returns the hero of the whole saga. If provided, returns the hero of that particular episode.",
                    type: episodeEnum
                }
            },
            resolve: (_source, { episode }) => starWarsData_1.getHero(episode)
        },
        human: {
            type: humanType,
            args: {
                id: {
                    description: "id of the human",
                    type: graphql_3.GraphQLNonNull(graphql_2.GraphQLString)
                }
            },
            resolve: (_source, { id }) => starWarsData_1.getHuman(id)
        },
        droid: {
            type: droidType,
            args: {
                id: {
                    description: "id of the droid",
                    type: graphql_3.GraphQLNonNull(graphql_2.GraphQLString)
                }
            },
            resolve: (_source, { id }) => starWarsData_1.getDroid(id)
        }
    })
});
/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
exports.StarWarsSchema = new graphql_1.GraphQLSchema({
    query: queryType,
    types: [humanType, droidType]
});
//# sourceMappingURL=starWarsSchema.js.map