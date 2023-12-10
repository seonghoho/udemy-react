# 7. 동기 & 비동기

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

## Thread 쓰레드 : 코드를 한 줄씩 실행시켜주는 친구


### 자바스크립트의 싱글 스레드 작업 수행 방식

자바스크립트는 코드가 작성된 순서대로 작업을 처리한다.

이전 작업이 진행중 일 때는 다음 작업을 수행하지 않고 기다린다.

먼저 작성된 코드를 먼저 다 실행하고 나서 뒤에 작성된 코드를 실행한다.

=> 동기 방식의 처리

동기적 처리의 단점은 하나의 작업이 너무 오래 걸리게 될 경우, 모든 작업이 오래 걸리는 하나의 작업이 종료되기 전 까지 올 스탑되기 때문에 전반적인 흐름이 느려진다.

웹사이트에서 버튼 하나하나마다 30초씩 걸리면 속터진다.

=> 동기 처리 방식의 문제점

### 멀티 쓰레드

코드를 실행하는 일꾼 쓰레드를 여러 개 사용하는 방식인 멀티 쓰레드 방식으로 작동시키면 이런 식으로 작업 분할 가능

오래 걸리는 일이 있어도 다른 일꾼 쓰레드에게 지시하면 되므로 괜찮다.

그러나 자바스크립트는 싱글 쓰레드로 동작한다. 멀티 쓰레드 사용 불가

싱글 쓰레드 방식을 이용하면서 동기적 작업의 단점을 극복하기 위해 여러 개의 작업을 동시에 실행시킨다.

즉, 먼저 작성된 코드의 결과를 기다리지 않고 다음 코드를 바로 실행한다. 

=> 비동기 작업

## 예시

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

## js Engine 작동 방식

Heap 공간과 Call Stack 공간이 있다.

Main Context가 Call Stack에 들어가는 순간이 프로그램 실행 순간이고, Call Stack에서 나가는 순간이 프로그램 종료 순간이다.

function은 생성만 하고 넘어가고, console.log가 실행되어 안에 함수를 실행한다.

동기적 작동에서는 순서대로 쌓이고, 쌓인 위 부터 하나씩 빠진다.

### 비동기 방식에서는?

Event Loop, Callback Queue, Web APIs가 추가된다.

setTimeout 같은 것은 Web APIs로 보내고, 기다리게 만든다.

callback 함수는 Callback Queue로 보내 실행시킨다.

그리고 Event Loop로 보내져 다시 Call Stack 공간으로 보낸다.

### 콜백지옥의 전조

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
### 비동기 처리의 결과를 또 다른 비동기 처리의 결과로 이용하는 로직이 계속 이어지게 되면, Callback 함수 안에 Callback 함수가 끝도 없이 이어져, 콜백 지옥이 발생하게 된다. Promise가 우릴 구출할 것이다.