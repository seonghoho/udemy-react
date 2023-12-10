# 2. 삼항연산자

## 삼항연산자로 둘 중 참인 값을 출력하는 형식
```js
let a = 3;
if (a >= 0) {
    console.log("양수");
} else {
    console.log("음수");
}

// 위의 식을 삼항연산자를 사용해 짧고 쉽게 표현할 수 있다.

a >= 0 ? console.log("양수") : console.log("음수");
```

```js
let a = [];

if (a.length === 0){
    console.log("빈 배열")
} else {
    console.log("안 빈 배열")
}

a.length === 0 ? console.log("빈 배열") : console.log("안 빈 배열");
```

## 삼항연산자로 항에 값을 넣는 형식
```js
let a = [1, 23];

const arrayStatus = a.length === 0 ? "빈 배열" : "안 빈 배열";
console.log(arrayStatus);
```

```js
let a;

const result = a ? true : false;
console.log(result); // true
```

## TODO : 학점 계산 프로그램 / 중첩 삼항연산자

90이상 A+, 50이상 B+, 둘 다 아니면 F

```js
let score = 100;

score >= 90 
    ? console.log("A+") 
    : score >= 50 
    ? console.log("B+")
    : console.log("F");
```

조건문으로 적으면

```js
if (score >= 90) {
    console.log("A+");
} else if (score >= 50) {
    console.log("B+");
} else {
    console.log("F");
}
```