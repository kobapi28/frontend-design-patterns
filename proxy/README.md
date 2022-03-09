# Proxy Pattern
> 特定のオブジェクトとのやりとりをより自由にコントロールできるようになる。<br>
> 値の取得やセットなど、オブジェクトの操作における挙動を決定することができる。

## 実際に書く
```ts
const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American'
}

const personProxy = new Proxy(person, {});
```
直接オブジェクトのプロパティの値を編集するのではなく、プロキシオブジェクトとやりとりする。
`Proxy`の第二引数はハンドラを表すオブジェクト。代表的なものは`get`, `set`。
他のものは[こちら](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

```ts
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
```

`get`, `set`を定義して実行してみる。
```bash
 > yarn tsc --lib dom,ES2015,ES2015.Proxy learn/person.ts
 # 参考: https://www.sqlpy.com/blogs/693747639
 > node learn/person.js 
The value of name is John Doe
Changed age from 42 to 43
```