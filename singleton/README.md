# Singleton Pattern
> 1度だけインスタンス化でき、グローバルにアクセスできるようなクラスのこと。<br>
> 単一のインスタンスをアプリケーション全体で共有できることから、グローバルな状態を管理することに適する。

## 実際に書く
※learnディレクトリではReactアプリとは関係ないコードが書かれている。
### シンプルなクラスの作成
```
> yarn tsc learn/counter.ts
> node learn/counter.js

throw new Error("You can only create one instance!");
```
commit: [90c879a8fbdd940c4b57ea0c4f3a97e48bd3d0ca](https://github.com/shoma3571/frontend-design-patterns/commit/90c879a8fbdd940c4b57ea0c4f3a97e48bd3d0ca)

このクラスをエクスポートするときに`Object.freeze()`を用いることで利用者側から変更できなくする。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

commit: [e17ae69b3a2e142f249363c0567b8bafb882291c](https://github.com/shoma3571/frontend-design-patterns/commit/e17ae69b3a2e142f249363c0567b8bafb882291c)


### Counterを実装したアプリケーションを考える
index.tsを以下のように作成。
```ts
import counter from "./counter";

const redButton = counter.getInstance();
redButton.increment();

const blueButton = counter.getInstance();
blueButton.increment();

console.log(redButton.getCount());
console.log(blueButton.getCount());
```

```
> yarn tsc learn/counter.ts
> node learn/counter.js

2
2
```
更新されるのは`Counter`クラスの`counter`プロパティなので、同じ値がそれぞれのインスタンスで共有される形になる。

commit: [a28107b2764221cba4e66f7b650a9cd83452a300](https://github.com/shoma3571/frontend-design-patterns/commit/a28107b2764221cba4e66f7b650a9cd83452a300)


## 利点と欠点
- インスタンス化を1度に限定できるので、使用されるメモリ容量を大幅に削減できる。

しかし、実はシングルトンはアンチパターンと考えられている...

上でクラスを作って実装した動作は通常のオブジェクトを使って実装可能。
```ts
let count = 0;

const counter = {
  increment () {
    return ++count;
  },
  decrement () {
    return --count;
  },
  getCount () {
    return count;
  }
}

Object.freeze(counter);
export default counter;
```

- テストの際に毎回新しいインスタンスを作成できないため、グローバルインスタンスに対する変更に依存する所が欠点。
- どのモジュールでシングルトンをインポートしているかが不透明。

### Reactではどうか

- ReactではReduxやContextを使うことでグローバルな状態を管理することが一般的。シングルトンのようなミュータブルな状態ではなくリードオンリーな状態を提供する。(Reduxならdispatcherを介してactionを送信した後にreducerが状態更新をする)

- これによってコンポーネントが直接値を更新できないことで、意図したように変更できる要因ある。