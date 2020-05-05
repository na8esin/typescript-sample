# tsc
ってオプションを何もつけづに実行すると、tsconfig.jsonを見るけど、一つだけだと見ない。

1つだけでもみる方法ないの？

# es-class.ts
## typescriptのclassフィールドってトランスパイルしたら消えない？の実験
- tsconfig.jsonに`"useDefineForClassFields": true`を追加したら大丈夫
- babelを使わなくてもtscで大丈夫