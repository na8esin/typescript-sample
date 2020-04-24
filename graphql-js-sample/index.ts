import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from "graphql";

import * as util from "util";

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        }
      }
    }
  })
});

var query = "{ hellos }";

graphql(schema, query).then(result => {
  // Prints
  // {
  //   data: { hello: "world" }
  // }
  console.log(
    util.inspect(result, { showHidden: true, colors: true, depth: null })
  );
});
