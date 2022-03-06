# Singleton Pattern
> 1度だけインスタンス化でき、グローバルにアクセスできるようなクラスのこと。<br>
> 単一のインスタンスをアプリケーション全体で共有できることから、グローバルな状態を管理することに適する。

## 実際に書く
※learnディレクトリではReactアプリとは関係ないコードが書かれている。
```
> yarn tsc learn/counter.ts
> node learn/counter.js

throw new Error("You can only create one instance!");
```
commit: [90c879a](https://github.com/shoma3571/frontend-design-patterns/commit/90c879a8fbdd940c4b57ea0c4f3a97e48bd3d0ca)

このクラスをエクスポートするときに`Object.freeze()`を用いることで利用者側から変更できなくする。

https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

