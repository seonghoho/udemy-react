# JavaScript 기본

## 1. 변수와 상수

```javascript
let age = 25;

console.log(age); // 25

age = 30;

console.log(age); // 30
```


### 변수명 규칙

1. 기호를 적을 수 없다. (언더바('_'), 달러('$')는 사용 가능)
2. 문자로 시작해야 한다.
3. 예약어를 피해야 한다. (ex/ if, let 등)


- let, const는 반복사용 불가
- const는 상수를 선언한다.

<br>

## 2. 자료형과 형 변환

- 자료형은 값을 성질에 따라 변형한 것이다.
- Primateve Type (원시형 타입)
  - ```
    let number = 12;
    ```
  - 한번에 하나의 값만 가질 수 있음
  - 하나의 고정된 저장 공간 이용
  
- 숫자형
  - ```javascript
    let age = 25; // 정수
    let tall = 175.9; // 실수
    let inf = Infinity;
    let minusinf = -Infinity;
    let nan = NaN;
    console.log(age * tall);
    ```
- 문자형
  - ```javascript
    let name = "seonghoho";
    let name2 = "최성호";
    let name3 = `seonghoho ${name2}`;
    console.log(name3);
    ```

- boolean형
  - ```javascript
    let isSwitchOff = false;
    ```

- null형
  - 이 값은 아무 값도 가지지 않는다고 실제로 할당해줘야 한다.  
  - ```javascript
    let a = null;
    comsole.log(a);
    ``` 

- undefined형
  - 아무것도 할당하지 않았을 때 설정된다.
  - ```javascript
    let variable;
    comsole.log(variable);
    ``` 

### 명시적 형변환

parseInt를 사용하여 문자형을 숫자형으로 변환한다.

```javascript
let numberA = 12;
let numberB = "2";
console.log(numberA + parseInt(numberB));
```

<br>

## 3. 연산자

```js
let a = 1;
let b = 2;

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a - b);
```

### 복합연산자
```js
let a = 10;
a += 10;

console.log(a); // 20
```

### 증감연산자
```js
let a = 10;

console.log(--a); // 전위연산자, 9
console.log(a--); // 후위연산자, 10
```

### 피연산자

```js
console.log(!false) // true
console.log(true && true) // true and true 둘 다 트루여야 트루
console.log(true || false) // 둘 중 하나만 true이면 true
```

### 비교형

```js
let compareA = 1 == '1';
// ==은 값만 비교하기 때문에 true

let compareB = 2 === '2';
// ===는 값과 형도 비교해서 false

let compareB = 2 >= 3; // false
// 대소비교 가능
```

### typeof
```js
let compareC = 1;

console.log(typeof compareC); // number
// typeof는 형을 출력한다.
```

### null 변환 연산자
```js
let a;
a = a ?? 10;
console.log(a); // 10
// a가 null이면 뒤의 값을 출력하는 연산자 
```

<br>

## 4. 조건문

```js
let a = 3;
if(a >= 5) {
    console.log("5이상입니다.");
}
else if(a >= 3) {
    console.log("3이상입니다.");
} else {
    console.log("3미만입니다.");
}
```

```js
let country = "ko";

switch(country){
    case 'ko':
        console.log("한국");
        break;
    case "cn":
        console.log("중국");
        break;
    case "jp":
        console.log("일본");
        break;
}
```

<br>

## 5. 함수

### 함수를 사용하지 않는다면?

```js
// 사용할 때마다 반복하면 불편하니 함수를 만들자.
let width1 = 10;

let height1 = 20;

let area1 = width1 * height1;
console.log(area1);

let width2 = 30;

let height2 = 20;

let area2 = width2 * height2;
console.log(area2);

```

### 함수 선언식

```js
function getArea() {
    let width = 10;
    let height = 20;

    let area = width * height;
    console.log(area);
} // 함수 선언식, 함수 선언 방식의 함수 생성

getArea();
console.log("함수 실행 완료");
```

### 함수에 할당

```js
function getArea(width, height) {
    let area = width * height;
    return area;
}

let ara1 = getArea(40, 200);
console.log("area : ", area1);
console.log("함수 실행 완료");
```

<br>

## 6. 함수 표현식 & 화살표 함수

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

<br>

## 7. 콜백함수

```js
function checkMood (mood, goodCallback, badCallback) {
    if(mood === "good") {
        // 기분 좋을 때 하는 동작
        goodCallback();
    } else {
        // 기분 안좋을 때 하는 동작
        badCallback();
    }
}

function cry() {
    console.log("ACTION :: CRY");
}
function sing() {
    console.log("ACTION :: SING");
}
function dance() {
    console.log("ACTION :: DANCE");
}

checkMood("sad", sing, cry);
```

## 8. 객체

### 객체 방식

```js
// 1. 객체 생성자 방식
let person = new Object();

// 2. 객체 리터럴 방식
let person = {}; 
```

### 객체의 프로퍼티에 접근하는 방법

```js
let person = {
    key: "value", // 프로퍼티 (객체 프로퍼티)
    key1: "value2",
    key2: true,
    key3: undefined,
    key4: [1, 2],
    key5: function() {}
};

console.log(person);

// 1. 점 표기법
console.log(person.key1);

// 2. 괄호 표기법 (반드시 문자열 형태로 적기)
// 함수에서 value값을 얻을 때 유용하다.
console.log(person["key2"])
```

### 괄호 표기법 사용 예시
```js
let person = {
    name: "최성호",
    age: 27
};

console.log(getPropertyValue("name"));

function getPropertyValue(key) {
    return person[key];
}
```

### 괄호 표기법 추가, 수, 삭제
```js
let person = {
    name: "최성호",
    age: 27
};

// 추가
person.location = "한국";
person["gender"] = "남성";

// 수정
person.name = "최성호 라고!";
person["age"] = 30;

console.log(person);

// 삭제
// delete는 메모리에서 값을 지우지 않아서, 값을 null로 바꾸는게 낫다.
delete person["name"];
person.name = null;

console.log(person);

```
- const에서도 프로퍼티는 수정 가능하다. key는 수정 불가.

### 메서드

객체의 프로퍼티로 함수를 받는 것을 메서드라고 한다.

```js
let person = {
    name: "최성호", // 멤버
    age: 27 // 멤버
    say: function () {
        console.log(`안녕 나는 ${person["name"]}`);
    } // 메서드 => 방법
};

person["say"]();

console.log(`name : ${"name" in person}`); // name : true
console.log(`age : ${"age" in person}`); // age : true
console.log(`gender : ${"gender" in person}`); // gender : false
```

<br>

## 9. 배열 Array

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

## 10. 반복문


```js
for (let i = 1; i <= 100; i++) {
    // 반복 수행할 명령
    console.log("seonghoho");
}

// for (초기식 ; 조건식 ; 연산식){
//     반복수행할 명령
// }
```

```js
let person = {
    name: "최성호",
    age: 27,
    tall: 171
};

const personKeys = Objecy.keys(person);

for (let i = 0; i < personKeys.length; i++) {
    const curKey = personKeys[i];
    const curValue = person[curKey];

    console.log(`${curKey} : ${curValue}`);
}
```

<br>

## 11. 배열 내장함수


### 배열 내장함수를 사용하지 않았을 때
```js
const arr = [1,2,3,4];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

### 1. forEach

```js
const arr = [1,2,3,4];

// 줄였을 때의 식
arr.forEach((elm) => console.log(elm));

// 풀어쓸 때의 식
arr.forEach(function (elm) {
    console.log(elm);
});
```

```js
const arr = [1,2,3,4];
const newArr = [];

arr.forEach(function (elm) {
    newArr.push(elm * 2);
});

console.log(newArr); // [2, 4, 6, 8]
```

### 2. map

#### map은 원본 배열의 모든 요소를 순회하여 어떤 연산을 진행해서 return 된 값을 따로 추려 반환하는 함수이다.
```js
const arr = [1,2,3,4];
const newArr = arr.map((elm) => {
    return elm * 2;
});

console.log(newArr); // [2, 4, 6, 8]
```

### 3. includes 

#### 배열에서 인자로 받은 값이 존재하는지 확인하는 함수이다.

```js
const arr = [1, 2, 3, 4];

let number = 3;

console.log(arr.includes(number)); // true
```

### 4. indexOf

#### 배열에서 인자로 받은 값의 인덱스를 반환하는 함수이다. (없다면 -1 반환한다.)

```js
const arr = [1, 2, 3, 4];

let number = "3";

console.log(arr.indexOf(number)); // -1
```

### 5. findIndex

#### 배열에서 내가 찾고자 하는 값이 처음 발견된 index 값을 출력한다.

```js
const arr = [
    {color: "red" },
    {color: "black" },
    {color: "green" },
    {color: "blue" }
];

let number = 3;

console.log(arr.findIndex((elm) => elm.color === "green" )); // 2

console.log(arr.findIndex((elm) => {
    return elm.color === "red";
  })
); // 0

// 이렇게 바꿀 수 있다.
const idx = arr.findIndex((elm) => {
    return elm.color === "blue";
});

console.log(idx);
```

### 6. find

#### element를 그대로 반환한다.

```js
const arr = [
    {color: "red" },
    {color: "black" },
    {color: "green" },
    {color: "blue" }
];

let number = 3;

const element = arr.find((elm) => {
    return elm.color === "blue";
});

console.log(element);
```

### 7. filter

#### 조건에 해당하는 값 filtering한다.
```js
const arr = [
    { num: 1, color: "red" },
    { num: 2, color: "black" },
    { num: 3, color: "blue" },
    { num: 4, color: "green" },
    { num: 5, color: "blue" },
];

console.log(arr.filter((elm) => elm.color === "blue"));
```

### 8. slice

#### 원하는 index의 값을 잘라 호출한다.

```js
const arr = [
    { num: 1, color: "red" },
    { num: 2, color: "black" },
    { num: 3, color: "blue" },
    { num: 4, color: "green" },
    { num: 5, color: "blue" },
];

console.log(arr.slice(0,2));
```

### 9. concat

#### 두 배열을 합친다.

```js
const arr1 = [
    { num: 1, color: "red" },
    { num: 2, color: "black" },
    { num: 3, color: "blue" }
];

const arr2 = [
    { num: 4, color: "green" },
    { num: 5, color: "blue" }
];

console.log(arr1.concat(arr2));
```

### 10. sort

#### 원본 배열의 순서를 정렬해준다.

```js
let chars = ["나", "다", "가"];

chars.sort();

console.log(chars);


let numbers = [0,1,3,2,6,10,20,15];

numbers.sort();

console.log(numbers);
// sort는 문자열 형태로 정렬해서 사전적으로 앞자리 기준으로 정렬해서 이상하다.
// 수의 크기별로 하기 위해서는 두 수를 비교해서 정렬해야한다.

const compare = (a, b) => {
    // 1. 같다.
    // 2. 크다.
    // 3. 작다.

    if (a > b) {
        // 크다
        return 1;
    }

    if (a < b) {
        // 작다
        return -1;
    }

    // 같다
    return 0;
};

numbers.sort(compare);

console.log(numbers);

```

### 11. join

#### 지정한 문자를 구분자로 해서 하나의 문자열로 만들어 출력한다.

```js
const arr = ["최성호", "님", "안녕하세요", "뭐하십니까"];

console.log(arr.join(" "));
// 최성호 님 안녕하세요 뭐하십니까
```