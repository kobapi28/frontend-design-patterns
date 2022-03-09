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
    if (!obj[prop]) {
      console.log( `Hmm.. this property doesn't seem to exist on the target object`);
    } else {
      console.log(`The value of ${String(prop)} is ${obj[prop]}`);
    }
  },
  set: (obj: Person, prop, value: string | number) => {
    if (prop === 'age' && (typeof value !== 'number' || !(0 < value && value < 130))) {
      console.log(`Sorry, you can only pass numeric values for age.`);
      return false;
    } else if (prop === 'name' && (typeof value !== 'string' || !(0 < value.toString().length && value.toString().length < 20))) {
      console.log(`You need to provide a valid name.`);
      return false;
    } else {
      console.log(`Changed ${String(prop)} from ${obj[prop]} to ${value}`);
      obj[prop] = value;
      return true;
    }
  }
});

personProxy.name = '';
personProxy.age = 131;
personProxy['aiueo'];