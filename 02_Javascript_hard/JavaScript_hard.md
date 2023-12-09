# JavaScript 응용

## 1. Truethy & Falsy


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
<br>

## 2. 삼항연산자

### 삼항연산자로 둘 중 참인 값을 출력하는 형식
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

### 삼항연산자로 항에 값을 넣는 형식
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

### TODO : 학점 계산 프로그램 / 중첩 삼항연산자

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

## 3. 단락 회로 평가

### 논리 연산자

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
<br>

## 4. 조건문 Upgrade

```js
function isKoreanFood(food) {
    // if (food === "불고기" || food === "비빔밥" || food === "떡볶이") {
    if (["불고기", "비빔밥", "떡볶이"].includes(food)) {
        return true;
    }
    return false;
}

const food1 = isKoreanFood("불고기");
const food2 = isKoreanFood("파스타");
console.log(food1);
console.log(food2);
```

```js
const getMeal = (mealType) => {
    if(mealType === '한식') return "불고기";
    if(mealType === '양식') return "파스타";
    if(mealType === "중식") return "멘보샤";
    if(mealType === "일식") return "초밥";
    return "굶기";
};

console.log(getMeal("한식"));
console.log(getMeal("중식"));
console.log(getMeal());
```

```js
const meal = {
    한식 : "불고기",
    중식 : "멘보샤",
    일식 : "초밥",
    양식 : "스테이크",
    인도식 : "카레"
};

const getMeal = (mealType) => {
    return meal[mealType] || "굶기";
};

console.log(getMeal("중식"));
console.log(getMeal());
```

<br>

## 5. 비 구조화 할당 (구조 분해 할당)

```js
let arr = ["one", "two", "three"];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three] = arr;

console.log(one, two, three0);

```

### 배열 선언 분리, 비 구조화 할당이라고 한다.

```js
let [one, two, three, four = "four"] = ["one", "two", "three"];
console.log(one, two, three);
// 출력값 : one two three four

//four = "four"로 기본값을 정해서 할당할 수 있다.
```

### a와 b의 값을 바꿀 때
```js
let a = 10;

let b = 20;

// a와 b의 값을 서로 바꾸려면 tmp라는 임시 변수를 사용하는 방법이 있으나, 
let tmp = 0;

[a, b] = [b, a]
console.log(a, b);

//비 구조화 할당으로 쉽게 할당할 수 있다.
```

```js
let object = { one: "one", two: "two", three: "three" , name: "최성호"};

// let one = object["one"];
// let two = object.two;
// let three = object.three;

let { name, one, two, three } = object;
console.log(one, two, three, name );

// console.log(one, two, three);
```