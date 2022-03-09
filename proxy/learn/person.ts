type Person = {
  name: string;
  age: number;
  nationality: string;
}

const person: Person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American'
}

const personProxy = new Proxy(person, {
  get: (obj: Person, prop) => {
    console.log(`The value of ${String(prop)} is ${obj[prop]}`);
  },
  set: (obj: Person, prop, value: string | number) => {
    console.log(`Changed ${String(prop)} from ${obj[prop]} to ${value}`);
    obj[prop] = value;
    return true;
  }
});

personProxy.name;
personProxy.age = 43;