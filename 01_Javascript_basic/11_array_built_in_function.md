# 11. 배열 내장함수


## 배열 내장함수를 사용하지 않았을 때
```js
const arr = [1,2,3,4];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

## 1. forEach

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

## 2. map

### map은 원본 배열의 모든 요소를 순회하여 어떤 연산을 진행해서 return 된 값을 따로 추려 반환하는 함수이다.
```js
const arr = [1,2,3,4];
const newArr = arr.map((elm) => {
    return elm * 2;
});

console.log(newArr); // [2, 4, 6, 8]
```

## 3. includes 

### 배열에서 인자로 받은 값이 존재하는지 확인하는 함수이다.

```js
const arr = [1, 2, 3, 4];

let number = 3;

console.log(arr.includes(number)); // true
```

## 4. indexOf

### 배열에서 인자로 받은 값의 인덱스를 반환하는 함수이다. (없다면 -1 반환한다.)

```js
const arr = [1, 2, 3, 4];

let number = "3";

console.log(arr.indexOf(number)); // -1
```

## 5. findIndex

### 배열에서 내가 찾고자 하는 값이 처음 발견된 index 값을 출력한다.

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

## 6. find

### element를 그대로 반환한다.

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

## 7. filter

### 조건에 해당하는 값 filtering한다.
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

## 8. slice

### 원하는 index의 값을 잘라 호출한다.

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

## 9. concat

### 두 배열을 합친다.

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

## 10. sort

### 원본 배열의 순서를 정렬해준다.

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

## 11. join

### 지정한 문자를 구분자로 해서 하나의 문자열로 만들어 출력한다.

```js
const arr = ["최성호", "님", "안녕하세요", "뭐하십니까"];

console.log(arr.join(" "));
// 최성호 님 안녕하세요 뭐하십니까
```