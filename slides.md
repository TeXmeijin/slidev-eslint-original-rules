---
theme: ./theme
class: text-center
highlighter: shiki
lineNumbers: true
drawings:
  persist: false
title: ESLintの独自ルール作成に<br>チャレンジした話
---

<style lang="scss">
.slidev-layout.slidev-layout li,
.slidev-layout.slidev-layout p {
  line-height: 2.2;
}
.slidev-layout.slidev-layout h1 + p {
  opacity: 1;
}
.slidev-layout .list-none {
  list-style-type: none;

  li {
    margin-left: 0;
  }
}
.slidev-layout.slidev-layout h1 {
  margin-top: 24px;
  margin-bottom: 32px;
}
</style>

# ESLintの独自ルール作成に<br>チャレンジした話

## 株式会社NoSchool meijin

---

# 目次

1. 自己紹介
2. 独自ルールを作ろうと思ったきっかけ
3. 作って適用する手順
4. 独自ルールの作りかた
5. テストの書きかた
6. 補足① ASTについて
7. 補足② TypeScript対応

---

# 自己紹介

- ニックネームは「名人」
- Twitter: <span class="ml-2 text-[#1d9bf0] font-bold">@Meijin_garden</span>
- Webエンジニア6年目
- 株式会社NoSchool CTO
  - オンライン家庭教師マナリンク -> https://manalink.jp
- 好きな分野はWebフロントエンド
  - 最近は趣味でWYSIWYGエディタを作ってます
- 趣味は将棋（アマチュア二段くらい）

---

# 独自ルールを作ろうと思ったきっかけ

- ESLintのルールって字句解析の知識とかないと作るの大変そうやけど、みんな知識がある上で作っているの？
- 業務上で、「今後はこのライブラリは使わないで欲しい」とか「この便利関数作ったからみんな使ってね」といったローカルルールを、レビューではなくLintで縛れたらいいな〜と思った

---

# 作って適用する手順

ざっくりいうと、以下の手順で独自ルールを動作させることができた

1. 独自ルールを作成して、`rules`などの決まったディレクトリに置く
2. npm scriptsで`"lint": "eslint --rulesdir rules"`のように、rulesdirを指定する

---
layout: section
---

# 独自ルールの作りかた

---

# 本家のドキュメント

「Working with Rules」

https://eslint.org/docs/developer-guide/working-with-rules

英語かつものすごく長く、（個人的には）理解に時間がかかるので、日本語の文献や巷のライブラリのコードを読みつつ進めるのが良いと思う。ある程度理解すると、公式ドキュメントが割と手にとるようにわかる（当社比）。

以後、これを分かっていれば公式ドキュメントの言っていることがなんとなくわかると思う知識をザッと書いていきます。

---

# 各ルールの構造

- `meta`と`create`から構成される大きなオブジェクトをexportするJS（or TS）ファイルが実態

```js
module.exports = {
    meta: {
        type: "suggestion",
        // ...
    },

    create(context) {
        return {
            VariableDeclaration(node) {
                // ...
            }
        };

    }
};
```