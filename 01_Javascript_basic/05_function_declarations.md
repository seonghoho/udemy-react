# 5. 함수

## 함수를 사용하지 않는다면?

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

## 함수 선언식

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

## 함수에 할당

```js
function getArea(width, height) {
    let area = width * height;
    return area;
}

let ara1 = getArea(40, 200);
console.log("area : ", area1);
console.log("함수 실행 완료");
```