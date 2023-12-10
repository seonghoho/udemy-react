# 9. 배열 Array

```js
let arr = new Array(); // 새 배열 할당

let arr1 = []; // 배열 리터럴 생성

// 자료형이 달라도 모두 가질 수 있다.
let arr = [1, "2", true, null, undefined, {}, [], function () {}];
console.log(arr);
```

```js
let arr = [1,2,3,4,5];
console.log(arr[0]); // 1
console.log(arr[1]); // 2
console.log(arr[2]); // 3

// 추가
arr.push({ key : "value" });
console.log(arr);

// 배열의 길이

console.log(arr.length);
```