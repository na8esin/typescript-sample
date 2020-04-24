# 目的

基本の例外レスポンスを調べるため

ts-node starWarsValidation-test

# output

```
> ts-node starWarsValidation-test
**********Basic Queries********************
{
  data: [Object: null prototype] {
    hero: [Object: null prototype] {
      name: 'R2-D2',
      appearsIn: [Array],
      friends: [Array]
    }
  }
}
[ [length]: 0 ]

**********Notes that non-existent fields are invalid********************
[
  GraphQLError: Cannot query field "favoriteSpaceship" on type "Character".
      at Object.Field (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\validation\rules\FieldsOnCorrectType.js:53:31)
      at Object.enter (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:324:29)
      at Object.enter (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:375:25)
      at visit (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:242:26)
      at Object.validate (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\validation\validate.js:73:24)
      at validationErrors (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:13:10)
      at validationErrorsOUtPut (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:122:18)
      at main (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:93:3)
      at processTicksAndRejections (internal/process/task_queues.js:93:5) {
    message: 'Cannot query field "favoriteSpaceship" on type "Character".',
    locations: [ { line: 4, column: 7 }, [length]: 1 ],
    [path]: undefined,
    [nodes]: [
      {
        kind: 'Field',
        alias: undefined,
        name: {
          kind: 'Name',
          value: 'favoriteSpaceship',
          loc: { start: 47, end: 64 }
        },
        arguments: [ [length]: 0 ],
        directives: [ [length]: 0 ],
        selectionSet: undefined,
        loc: { start: 47, end: 64 }
      },
      [length]: 1
    ],
    [source]: Source {
      body: '\n' +
        '  query HeroSpaceshipQuery {\n' +
        '    hero {\n' +
        '      favoriteSpaceship\n' +
        '    }\n' +
        '  }\n',
      name: 'StarWars.graphql',
      locationOffset: { line: 1, column: 1 }
    },
    [positions]: [ 47, [length]: 1 ],
    [originalError]: undefined,
    [extensions]: undefined,
    [stack]: 'GraphQLError: Cannot query field "favoriteSpaceship" on type "Character".\n' +
      '    at Object.Field (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\validation\\rules\\FieldsOnCorrectType.js:53:31)\n' +
      '    at Object.enter (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:324:29)\n' +
      '    at Object.enter (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:375:25)\n' +
      '    at visit (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:242:26)\n' +
      '    at Object.validate (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\validation\\validate.js:73:24)\n' +
      '    at validationErrors (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:13:10)\n' +
      '    at validationErrorsOUtPut (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:122:18)\n' +
      '    at main (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:93:3)\n' +
      '    at processTicksAndRejections (internal/process/task_queues.js:93:5)'
  },
  [length]: 1
]

**********Requires fields on objects********************
[
  GraphQLError: Field "hero" of type "Character" must have a selection of subfields. Did you mean "hero { ... }"?
      at Object.Field (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\validation\rules\ScalarLeafs.js:45:31)
      at Object.enter (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:324:29)
      at Object.enter (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:375:25)
      at visit (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:242:26)
      at Object.validate (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\validation\validate.js:73:24)
      at validationErrors (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:13:10)
      at validationErrorsOUtPut (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:122:18)
      at main (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:95:3)
      at processTicksAndRejections (internal/process/task_queues.js:93:5) {
    message: 'Field "hero" of type "Character" must have a selection of subfields. Did you mean "hero { ... }"?',
    locations: [ { line: 3, column: 5 }, [length]: 1 ],
    [path]: undefined,
    [nodes]: [
      {
        kind: 'Field',
        alias: undefined,
        name: { kind: 'Name', value: 'hero', loc: { start: 33, end: 37 } },
        arguments: [ [length]: 0 ],
        directives: [ [length]: 0 ],
        selectionSet: undefined,
        loc: { start: 33, end: 37 }
      },
      [length]: 1
    ],
    [source]: Source {
      body: '\n  query HeroNoFieldsQuery {\n    hero\n  }\n',
      name: 'StarWars.graphql',
      locationOffset: { line: 1, column: 1 }
    },
    [positions]: [ 33, [length]: 1 ],
    [originalError]: undefined,
    [extensions]: undefined,
    [stack]: 'GraphQLError: Field "hero" of type "Character" must have a selection of subfields. Did you mean "hero { ... }"?\n' +
      '    at Object.Field (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\validation\\rules\\ScalarLeafs.js:45:31)\n' +
      '    at Object.enter (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:324:29)\n' +
      '    at Object.enter (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:375:25)\n' +
      '    at visit (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:242:26)\n' +
      '    at Object.validate (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\validation\\validate.js:73:24)\n' +
      '    at validationErrors (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:13:10)\n' +
      '    at validationErrorsOUtPut (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:122:18)\n' +
      '    at main (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:95:3)\n' +
      '    at processTicksAndRejections (internal/process/task_queues.js:93:5)'
  },
  [length]: 1
]

**********Disallows fields on scalars********************
[
  GraphQLError: Field "name" must not have a selection since type "String" has no subfields.
      at Object.Field (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\validation\rules\ScalarLeafs.js:42:33)
      at Object.enter (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:324:29)
      at Object.enter (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:375:25)
      at visit (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:242:26)
      at Object.validate (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\validation\validate.js:73:24)
      at validationErrors (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:13:10)
      at validationErrorsOUtPut (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:122:18)
      at main (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:97:3)
      at processTicksAndRejections (internal/process/task_queues.js:93:5) {
    message: 'Field "name" must not have a selection since type "String" has no subfields.',
    locations: [ { line: 4, column: 12 }, [length]: 1 ],
    [path]: undefined,
    [nodes]: [
      {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: undefined,
            name: {
              kind: 'Name',
              value: 'firstCharacterOfName',
              loc: { start: 67, end: 87 }
            },
            arguments: [ [length]: 0 ],
            directives: [ [length]: 0 ],
            selectionSet: undefined,
            loc: { start: 67, end: 87 }
          },
          [length]: 1
        ],
        loc: { start: 57, end: 95 }
      },
      [length]: 1
    ],
    [source]: Source {
      body: '\n' +
        '  query HeroFieldsOnScalarQuery {\n' +
        '    hero {\n' +
        '      name {\n' +
        '        firstCharacterOfName\n' +
        '      }\n' +
        '    }\n' +
        '  }\n',
      name: 'StarWars.graphql',
      locationOffset: { line: 1, column: 1 }
    },
    [positions]: [ 57, [length]: 1 ],
    [originalError]: undefined,
    [extensions]: undefined,
    [stack]: 'GraphQLError: Field "name" must not have a selection since type "String" has no subfields.\n' +
      '    at Object.Field (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\validation\\rules\\ScalarLeafs.js:42:33)\n' +
      '    at Object.enter (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:324:29)\n' +
      '    at Object.enter (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:375:25)\n' +
      '    at visit (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:242:26)\n' +
      '    at Object.validate (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\validation\\validate.js:73:24)\n' +
      '    at validationErrors (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:13:10)\n' +
      '    at validationErrorsOUtPut (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:122:18)\n' +
      '    at main (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:97:3)\n' +
      '    at processTicksAndRejections (internal/process/task_queues.js:93:5)'
  },
  [length]: 1
]

**********Disallows object fields on interfaces********************
[
  GraphQLError: Cannot query field "primaryFunction" on type "Character". Did you mean to use an inline fragment on "Droid"?
      at Object.Field (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\validation\rules\FieldsOnCorrectType.js:53:31)
      at Object.enter (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:324:29)
      at Object.enter (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:375:25)
      at visit (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\language\visitor.js:242:26)
      at Object.validate (C:\Users\t.watanabe\node\graphql-js-sample\node_modules\graphql\validation\validate.js:73:24)
      at validationErrors (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:13:10)
      at validationErrorsOUtPut (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:122:18)
      at main (C:\Users\t.watanabe\node\graphql-js-sample\starWarsValidation-test.ts:101:3)
      at processTicksAndRejections (internal/process/task_queues.js:93:5) {
    message: 'Cannot query field "primaryFunction" on type "Character". Did you mean to use an inline fragment on "Droid"?',
    locations: [ { line: 5, column: 7 }, [length]: 1 ],
    [path]: undefined,
    [nodes]: [
      {
        kind: 'Field',
        alias: undefined,
        name: {
          kind: 'Name',
          value: 'primaryFunction',
          loc: { start: 61, end: 76 }
        },
        arguments: [ [length]: 0 ],
        directives: [ [length]: 0 ],
        selectionSet: undefined,
        loc: { start: 61, end: 76 }
      },
      [length]: 1
    ],
    [source]: Source {
      body: '\n' +
        '  query DroidFieldOnCharacter {\n' +
        '    hero {\n' +
        '      name\n' +
        '      primaryFunction\n' +
        '    }\n' +
        '  }\n',
      name: 'StarWars.graphql',
      locationOffset: { line: 1, column: 1 }
    },
    [positions]: [ 61, [length]: 1 ],
    [originalError]: undefined,
    [extensions]: undefined,
    [stack]: 'GraphQLError: Cannot query field "primaryFunction" on type "Character". Did you mean to use an inline fragment on "Droid"?\n' +
      '    at Object.Field (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\validation\\rules\\FieldsOnCorrectType.js:53:31)\n' +
      '    at Object.enter (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:324:29)\n' +
      '    at Object.enter (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:375:25)\n' +
      '    at visit (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\language\\visitor.js:242:26)\n' +
      '    at Object.validate (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\node_modules\\graphql\\validation\\validate.js:73:24)\n' +
      '    at validationErrors (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:13:10)\n' +
      '    at validationErrorsOUtPut (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:122:18)\n' +
      '    at main (C:\\Users\\t.watanabe\\node\\graphql-js-sample\\starWarsValidation-test.ts:101:3)\n' +
      '    at processTicksAndRejections (internal/process/task_queues.js:93:5)'
  },
  [length]: 1
]

**********Allows object fields in fragments********************
{
  data: [Object: null prototype] {
    hero: [Object: null prototype] {
      name: 'R2-D2',
      primaryFunction: 'Astromech'
    }
  }
}
[ [length]: 0 ]

**********Allows object fields in inline fragments********************
{
  data: [Object: null prototype] {
    hero: [Object: null prototype] {
      name: 'R2-D2',
      primaryFunction: 'Astromech'
    }
  }
}
[ [length]: 0 ]
```
