"use strict";
// @flow strict
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const util = require("util");
const starWarsSchema_1 = require("./starWarsSchema");
/**
 * Helper function to test a query and the expected response.
 */
function validationErrors(query) {
    const source = new graphql_1.Source(query, "StarWars.graphql");
    const ast = graphql_1.parse(source);
    return graphql_1.validate(starWarsSchema_1.StarWarsSchema, ast);
}
const query = `
  query NestedQueryWithFragment {
    hero {
      ...NameAndAppearances
      friends {
        ...NameAndAppearances
        friends {
          ...NameAndAppearances
        }
      }
    }
  }

  fragment NameAndAppearances on Character {
    name
    appearsIn
  }
`;
const query2 = `
  query HeroSpaceshipQuery {
    hero {
      favoriteSpaceship
    }
  }
`;
const query3 = `
  query HeroNoFieldsQuery {
    hero
  }
`;
const query4 = `
  query HeroFieldsOnScalarQuery {
    hero {
      name {
        firstCharacterOfName
      }
    }
  }
`;
const query5 = `
  query DroidFieldOnCharacter {
    hero {
      name
      primaryFunction
    }
  }
`;
const query6 = `
  query DroidFieldInFragment {
    hero {
      name
      ...DroidFields
    }
  }

  fragment DroidFields on Droid {
    primaryFunction
  }
`;
const query7 = `
  query DroidFieldInFragment {
    hero {
      name
      ... on Droid {
        primaryFunction
      }
    }
  }
`;
async function main() {
    console.log("**********Basic Queries********************");
    await outputGQL(query);
    validationErrorsOUtPut(query);
    console.log("\n**********Notes that non-existent fields are invalid********************");
    validationErrorsOUtPut(query2);
    console.log("\n**********Requires fields on objects********************");
    validationErrorsOUtPut(query3);
    console.log("\n**********Disallows fields on scalars********************");
    validationErrorsOUtPut(query4);
    console.log("\n**********Disallows object fields on interfaces********************");
    validationErrorsOUtPut(query5);
    console.log("\n**********Allows object fields in fragments********************");
    await outputGQL(query6);
    validationErrorsOUtPut(query6);
    console.log("\n**********Allows object fields in inline fragments********************");
    await outputGQL(query7);
    validationErrorsOUtPut(query7);
}
async function outputGQL(query) {
    await graphql_1.graphql(starWarsSchema_1.StarWarsSchema, query).then(async (result) => {
        console.log(result);
    });
}
function validationErrorsOUtPut(query) {
    console.log(util.inspect(validationErrors(query), {
        showHidden: true,
        colors: true,
        depth: null
    }));
}
main();
//# sourceMappingURL=starWarsValidation-test.js.map