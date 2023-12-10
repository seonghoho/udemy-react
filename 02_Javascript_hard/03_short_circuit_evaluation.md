# 3. 단락 회로 평가

## 논리 연산자

```js
console.log(true && true);

console.log(true || false);

console.log(!true);
```

```js
const getName = (person) => {
    if (!person) {
        return "객체가 아닙니다.";
    }
    return 
}
```

```js
const getName = (person) => {
    const name = person && person.name;
    return name || "객체가 아닙니다.";
};

let person = { name : "최성호" };
const name = getName(person);
console.log(name);
// 최성호
```