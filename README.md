# es-class.ts
## typescriptのclassフィールドってトランスパイルしたら消えない？の実験
- tsconfig.jsonに`"useDefineForClassFields": true`を追加したら大丈夫
- babelを使わなくてもtscで大丈夫