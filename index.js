// テンプレート文字列
// const age = 30;
// const message = `I'm ${age} years old.`;
// console.log(message);

// アロー関数
// const func = (arg) => {
//     console.log(arg);
// }
// func("hello");

// 分割代入、デフォルト値
// const obj = {
//     name: "Tom",
//     age: 21
// };
// const { name, age = 20 } = obj;
// console.log(name);
// console.log(age);

// オブジェクトの省略記法
// const name = "Tom";
// const age = 30;
// const obj = {name, age};
// console.log(obj);

// 配列の展開
// const arr = [1, 2];
// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー
// const arr = [10, 20];
// const arr2 = [30, 40];
// const arr3 = [...arr, ...arr2];
// console.log(arr3);
// ダメな例
// const arr4 = arr; //同じものを参照することになってしまう
// arr4[0] = 100;
// console.log(arr);

// map
// const nameArr = ["tanaka", "yamada", "sato"];
// for (let index = 0; index < nameArr.length; index++) {
//     console.log(nameArr[index]);
// }
// nameArr.map((name) => {
//     console.log(name);
// });
// nameArr.map((name) => console.log(name));

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//     return num % 2 == 1;
// });
// console.log(newNumArr);

// インデックス番号を扱うmap
// const nameArr = ["tanaka", "yamada", "sato"];
// nameArr.map((name, index) => console.log(`${index + 1}番目の要素は${name}です。`));

// sato以外に”さん”を追加
// const nameArr = ["tanaka", "yamada", "sato"];
// const newNameArr = nameArr.map((name) => {
//     if(name == "sato"){
//         return name;
//     }else{
//         return `${name}さん`;
//     }
// });
// console.log(newNameArr);

