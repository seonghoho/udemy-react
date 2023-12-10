# 6. 함수 표현식 & 화살표 함수

## 함수 표현식

```js
console.log(helloFunc()); 
//호이스팅으로 인해 아래에서 선언한 함수가 위에서 사용 가능하다. (별로 안좋음)

let hello = function () {
    return "안녕하세요";
}; // 함수 표현식
// 변수가 함수를 담고 있다. 

function helloFunc() {
    return "안녕하시렵니까";
} // 함수 선언식

const helloText = hello();
console.log(helloText);
```

## 화살표 함수

```js
// 기본 선언식은 이런 형태입니다.
function helloFunc() {
    return "안녕하시렵니까";
} 

// 화살표 함수를 사용하면 이렇게 됩니다.
let hello = () => {
    return "안녕하시렵니까";
}

// 한 개만 return 한다면 이렇게 줄일 수 있어요!
let hello = () => "안녕하시렵니까";
```