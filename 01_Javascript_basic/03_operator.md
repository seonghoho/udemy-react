# 3. 연산자

```js
let a = 1;
let b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a - b);
```

## 복합연산자
```js
let a = 10;
a += 10;

console.log(a); // 20
```

## 증감연산자
```js
let a = 10;

console.log(--a); // 전위연산자, 9
console.log(a--); // 후위연산자, 10
```

## 피연산자

```js
console.log(!false) // true
console.log(true && true) // true and true 둘 다 트루여야 트루
console.log(true || false) // 둘 중 하나만 true이면 true
```

## 비교형

```js
let compareA = 1 == '1';
// ==은 값만 비교하기 때문에 true

let compareB = 2 === '2';
// ===는 값과 형도 비교해서 false

let compareB = 2 >= 3; // false
// 대소비교 가능
```

## typeof
```js
let compareC = 1;

console.log(typeof compareC); // number
// typeof는 형을 출력한다.
```

## null 변환 연산자
```js
let a;
a = a ?? 10;
console.log(a); // 10
// a가 null이면 뒤의 값을 출력하는 연산자 
```