# 8. 객체

## 객체 방식

```js
// 1. 객체 생성자 방식
let person = new Object();

// 2. 객체 리터럴 방식
let person = {}; 
```

## 객체의 프로퍼티에 접근하는 방법

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

## 괄호 표기법 사용 예시
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

## 괄호 표기법 추가, 수, 삭제
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

## 메서드

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
