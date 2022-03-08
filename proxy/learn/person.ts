const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American'
}

const personProxy = new Proxy(person, {});