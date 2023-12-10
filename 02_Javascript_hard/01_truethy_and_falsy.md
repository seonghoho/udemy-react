# 1. Truethy & Falsy


```js
let a = ""; // FALSE
let b = "string"; // TRUE

if (a) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}
```

- true
  - 숫자, 문자열, Infinity 등등 참이 아니어도 true로 판단
- false
  - null, undefined, 숫자 0, -0, NaN, "" 등 false가 아니어도 false로 판단


```js
const getName = (person) => {
    // if (person === undefined || person === null) {
    // !false == true 를 사용하여 짧게 변환
    if (!person) { 
        return "객체가 아닙니다";
    } // 예외처리
    return person.name;
};

let person = { name: "최성호" }
const name = getName(person);
console.log(name);
```