"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const util = require("util");
var schema = new graphql_1.GraphQLSchema({
    query: new graphql_1.GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            hello: {
                type: graphql_1.GraphQLString,
                resolve() {
                    return "world";
                }
            }
        }
    })
});
var query = "{ hellos }";
graphql_1.graphql(schema, query).then(result => {
    // Prints
    // {
    //   data: { hello: "world" }
    // }
    console.log(util.inspect(result, { showHidden: true, colors: true, depth: null }));
});
//# sourceMappingURL=index.js.map