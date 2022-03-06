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
