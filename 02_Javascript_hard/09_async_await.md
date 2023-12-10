# async, await

## async

```js
function hello(){
    return 'hello';
}

async function helloAsync(){
    return 'hello Async';
}

console.log(hello());
console.log(helloAsync());

// hello
// Promise {<pending>}

// helloAsync는 promise 객체를 반환하고 있다.
helloAsync().then((res)=>{
    console.log(res);
});
// hello Async
```

### async는 함수에 옵션 붙이듯 붙여서 해당 함수가 promise를 반환하도록 만든다.

<br> 

## await

### await을 사용하기 전

```js
function delay (ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// 3초 뒤 hello Async를 반환하는 코드. 거창하게 길기에 await으로 줄일 수 있다.

async function helloAsync(){
    return delay(3000).then(()=>{
        return 'hello Async';
    });
}


helloAsync().then((res)=>{
    console.log(res);
});

// hello Async
```


### await을 사용하면

```js
function delay (ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function helloAsync(){
    await delay(3000);
    return "hello Async";
}

helloAsync().then((res)=>{
    console.log(res);
});
```

- await을 비동기 함수의 호출 앞에 붙이면 비동기 함수가 동기 함수처럼 작동한다.
- await 키워드가 붙은 함수의 호출은 이 뒤에 있는 함수가 끝나기 전까지 아래 있는 코드를 수행하지 않고, 동기적으로 작동하게 만든다.
- await은 async 키워드가 붙은 함수에서만 사용할 수 있다.


```js
function delay (ms){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

async function helloAsync(){
    await delay(3000);
    return "hello Async";
}

async function main () {
    const res = await helloAsync()
    console.log(res);
}

main();
```