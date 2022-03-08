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