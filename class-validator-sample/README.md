```
> ts-node .\index.ts
validation failed. errors:  [
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 'Hello',
    property: 'title',
    children: [],
    constraints: { length: 'title must be longer than or equal to 10 characters' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 'this is a great post about hell world',
    property: 'text',
    children: [],
    constraints: { contains: 'text must contain a hello string' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 11,
    property: 'rating',
    children: [],
    constraints: { max: 'rating must not be greater than 10' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 'google.com',
    property: 'email',
    children: [],
    constraints: { isEmail: 'email must be an email' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 'googlecom',
    property: 'site',
    children: [],
    constraints: { isFqdn: 'site must be a valid domain name' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: undefined,
    property: 'createDate',
    children: [],
    constraints: { isDate: 'createDate must be a Date instance' }
  }
]
Promise rejected (validation failed). Errors:  [
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 'Hello',
    property: 'title',
    children: [],
    constraints: { length: 'title must be longer than or equal to 10 characters' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 'this is a great post about hell world',
    property: 'text',
    children: [],
    constraints: { contains: 'text must contain a hello string' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 11,
    property: 'rating',
    children: [],
    constraints: { max: 'rating must not be greater than 10' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 'google.com',
    property: 'email',
    children: [],
    constraints: { isEmail: 'email must be an email' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: 'googlecom',
    property: 'site',
    children: [],
    constraints: { isFqdn: 'site must be a valid domain name' }
  },
  ValidationError {
    target: Post {
      title: 'Hello',
      text: 'this is a great post about hell world',
      rating: 11,
      email: 'google.com',
      site: 'googlecom'
    },
    value: undefined,
    property: 'createDate',
    children: [],
    constraints: { isDate: 'createDate must be a Date instance' }
  }
]
```