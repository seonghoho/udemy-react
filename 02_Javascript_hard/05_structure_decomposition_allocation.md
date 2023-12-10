# 5. 비 구조화 할당 (구조 분해 할당)

```js
let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three] = arr;

console.log(one, two, three0);

```

## 배열 선언 분리, 비 구조화 할당이라고 한다.

```js
let [one, two, three, four = "four"] = ["one", "two", "three"];
console.log(one, two, three);
// 출력값 : one two three four

//four = "four"로 기본값을 정해서 할당할 수 있다.
```

## a와 b의 값을 바꿀 때
```js
let a = 10;

let b = 20;

// a와 b의 값을 서로 바꾸려면 tmp라는 임시 변수를 사용하는 방법이 있으나, 
let tmp = 0;

[a, b] = [b, a]
console.log(a, b);

// 비 구조화 할당으로 쉽게 할당할 수 있다.
```

```js
let object = { one: "one", two: "two", three: "three" , name: "최성호"};

// let one = object["one"];
// let two = object.two;
// let three = object.three;

let { name: myName, one, two, three } = object;
console.log(one, two, three, myName );

// console.log(one, two, three);
```

### name : myName과 같은 형태로 적으면 변수의 이름을 바꾸어 할당할 수 있다.