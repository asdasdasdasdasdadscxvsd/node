// const node = {
//   loc:{
//     start:{
//       line:1,
//       colun:5
//     }
//   }
// };
// let {loc,loc:{start},loc:{start:{line}}} = node;
// console.log(loc,start,line);


// loc = {
//   start: {
//     line: 1,
//     colun: 5
//   }
// };
//  let { start } = {
//   line: 1,
//     colun: 5
// }

// let { line } = {
//   line: 1,
//     colun: 5
// }









// const obj = {
//   "name": 'zs',
//   "age":19
// }
//赋值
//1写法
// let obj1 = {};
// obj1 = obj;
// console.log(obj1);
//2写法
// const obj1= {name:s,age:n} = obj;
// const obj1 = {name,age} = obj;
// console.log(obj1);

// let arr = [1,2,3,4,5];
// let arr1 = [];
// arr1 = arr;
// let arr1 = [a=100,b,c,d,e] = arr;
//  console.log(arr1);


// let arr = new Set([1,2,3,1,4,1]);
// console.log(arr);


// includes() 是否找到对应的字符串
let s = 'Helloworld!';
console.log(s.includes('o')) // true
//str.startswidth()找到字符串中第一个字符是否是这个字符
console.log(s.startsWith('H'))// true
//endsWidth()判断以恶搞字符是否在字符串尾部
console.log(s.endsWith('!')) // true



//字符串模板 ··
let str =  `<div>${s}</div>`
console.log(str);



