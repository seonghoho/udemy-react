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

#### name : myName과 같은 형태로 적으면 변수의 이름을 바꾸어 할당할 수 있다.


## 6. spread 연산자

 ```js
 const cookie = {
    base : "cookie",
    madeIn : "korea"
 };

 const chocochipCookie = {
    base : "cookie",
    madeIn : "korea",
    toping : "chocochip"
 };

 const blueberryCookie = {
    base : "cookie",
    madeIn : "korea",
    toping : "blueberry"
 };

 const strawberryCookie = {
    base : "cookie",
    madeIn : "korea",
    toping : "strawberry"
 };
 
 ```

base와 madeIn이 겹친다.

```js
const cookie = {
base : "cookie",
madeIn : "korea"
};

const chocochipCookie = {
...cookie,
toping : "chocochip"
};

const blueberryCookie = {
...cookie,
toping : "blueberry"
};

const strawberryCookie = {
...cookie,
toping : "strawberry"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

```

spread 연산자를 이용해 객체의 중복되는 요소를 펼치는 효과를 사용할 수 있다.

```js
const noTopingCookies = ["촉촉한 쿠키", "안촉촉한 쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies, "함정쿠키", ...topingCookies];
console.log(allCookies);

```

<br>

## 7. 동기 & 비동기

```js
function taskA() {
    console.log("TASK A");
}

function taskB() {
    console.log("TASK B");
}

function taskC() {
    console.log("TASK C");
}

taskA();
taskB();
taskC();
```

### Thread 쓰레드 : 코드를 한 줄씩 실행시켜주는 친구


#### 자바스크립트의 싱글 스레드 작업 수행 방식

자바스크립트는 코드가 작성된 순서대로 작업을 처리한다.

이전 작업이 진행중 일 때는 다음 작업을 수행하지 않고 기다린다.

먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다.

=> 동기 방식의 처리

동기적 처리의 단점은 하나의 작업이 너무 오래 걸리게 될 경우, 모든 작업이 오래 걸리는 하나의 작업이 종료되기 전 까지 올 스탑되기 때문에 전반적인 흐름이 느려진다.

웹사이트에서 버튼 하나하나마다 30초씩 걸리면 속터진다.

=> 동기 처리 방식의 문제점

#### 멀티 쓰레드

코드를 실행하는 일꾼 쓰레드를 여러 개 사용하는 방식인 멀티 쓰레드 방식으로 작동시키면 이런 식으로 작업 분할 가능

오래 걸리는 일이 있어도 다른 일꾼 쓰레드에게 지시하면 되므로 괜찮다.

그러나 자바스크립트는 싱글 쓰레드로 동작한다. 멀티 쓰레드 사용 불가

싱글 쓰레드 방식을 이용하면서 동기적 작업의 단점을 극복하기 위해 여러 개의 작업을 동시에 실행시킨다.

즉, 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행한다. 

=> 비동기 작업

### 예시

```js
// 동기적 방식
function taskA() {
    console.log("A 작업 끝");
}

taskA();
console.log("코드 끝");
```

```js
// 비동기 방식
function taskA() {
    setTimeout(() => {
        console.log("A TASK END");
    }, 2000);
}

taskA();
console.log("코드 끝");

// 코드 끝
// A TASK END
```

```js
function taskA(a, b, cb) {
    setTimeout(() => {
        const res = a + b;
        cb(res); 
    }, 3000)
}

function taskB(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskC(a, cb) {
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}

taskA(3, 4, (res) => {
    console.log("A TASK RESULT : ", res);
});

taskB(7, (res) => {
    console.log("B TASK RESULT : ", res);
});


taskC(14, (res) => {
    console.log("C TASK RESULT : ", res);
});

console.log("코드 끝");

// 코드 끝
// B TASK RESULT : 14
// C TASK RESULT : -14
// A TASK RESULT : 7
```

### js Engine 작동 방식

Heap 공간과 Call Stack 공간이 있다.

Main Context가 Call Stack에 들어가는 순간이 프로그램 실행 순간이고, Call Stack에서 나가는 순간이 프로그램 종료 순간이다.

function은 생성만 하고 넘어가고, console.log가 실행되어 안에 함수를 실행한다.

동기적 작동에서는 순서대로 쌓이고, 쌓인 위 부터 하나씩 빠진다.

#### 비동기 방식에서는?

Event Loop, Callback Queue, Web APIs가 추가된다.

setTimeout 같은 것은 Web APIs로 보내고, 기다리게 만든다.

callback 함수는 Callback Queue로 보내 실행시킨다.

그리고 Event Loop로 보내져 다시 Call Stack 공간으로 보낸다.

#### 콜백지옥의 전조

```js
function taskA(a, b, cb) {
    setTimeout(() => {
        const res = a + b;
        cb(res); 
    }, 3000)
}

function taskB(a, cb) {
    setTimeout(() => {
        const res = a * 2;
        cb(res);
    }, 1000);
}

function taskC(a, cb) {
    setTimeout(() => {
        const res = a * -1;
        cb(res);
    }, 2000);
}

taskA(4, 5 (a_res)=> {
    console.log("A RESULT : ", a_res);
    taskB(a_res, (b_res)=> {
        console.log("B RESULT : ", b_res);
        taskC(b_res, (c_res)=> {
            console.log("C RESULT : ", c_res);
        });
    });
});

console.log("코드 끝");

// 코드 끝
// A RESULT : 9
// B RESULT : 18
// C RESULT : -18
```
#### 비동기 처리의 결과를 또 다른 비동기 처리의 결과로 이용하는 로직이 계속 이어지게 되면, Callback 함수 안에 Callback 함수가 끝도 없이 이어져, 콜백 지옥이 발생하게 된다. Promise가 우릴 구출할 것이다.

<br>

## 8. Promise 객체

- Promise를 활용하면 