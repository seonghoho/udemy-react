# 8. Promise 객체

- Promise를 활용하면 콜백 지옥을 해결할 수 있다.

## 비동기 작업이 가질 수 있는 3가지 상태

1. Pending (대기 상태)
   - 현재 비동지 작업이 진행중이거나 시작할 수 없는 문제가 생겼음을 의미한다.
2. Fulfilled (성공)
   - 이행, 성공 상태로, 비동기 작업이 원하는 대로 정상적으로 진행됨을 의미한다.
   - 해결이 되면 resolve 되었다고 표현한다.
3. Rejected (실패)
   - 거부, 실패 상태로, 모종의 이유로 실패했음을 의미한다. 
   - 서버가 응답하지 않거나, 시간이 오래걸려 취소되는 경우가 해당된다.
   - 거부되면 reject 되었다고 표현한다. 

## callback 함수를 이용한 처리

```js
function isPositive(number, resolve, reject) {
    setTimeout(()=>{
        if(typeof number === 'number') {
            // 성공 -> resolve
            resolve(number >=0? "양수":"음수")
        } else {
            // 실패 -> reject
            reject("주어진 값이 숫자형 값이 아닙니다");
        }
    }, 2000);
};

isPositive(
    10, 
    (res)=>{
        console.log("성공적으로 수행됨 : ", res);
    },
    (err)=>{
        console.log("실패 하였음 : ", err);
    }
);

// 성공적으로 수행됨 : 양수
```

## promise를 이용한 처리

```js
function isPositive(number, resolve, reject) {
    setTimeout(()=>{
        if(typeof number === 'number') {
            // 성공 -> resolve
            resolve(number >=0 ? "양수":"음수")
        } else {
            // 실패 -> reject
            reject("주어진 값이 숫자형 값이 아닙니다");
        }
    }, 2000);
};

// executor : 비동기 작업을 실질적으로 수행하는 함수라고 생각하자.

function isPositiveP(number){
    const executor = (resolve, reject)=> { 
        // 실행자
        setTimeout(()=> {
            if(typeof number === 'number') {
                // 성공 -> resolve
                resolve(number >=0 ? "양수":"음수")
            } else {
                // 실패 -> reject
                reject("주어진 값이 숫자형 값이 아닙니다");
            }   
        }, 2000);
    };

    const asyncTask = new Promise(executor);
    return asyncTask;
}

const res = isPositiveP(101);

res
    .then((res)=>{
        console.log("작업 성공 : ", res)
    })
    .catch((err)=>{
        console.log("작업 실패 : ", err)
    });

// resolve와 reject로 받아오던 값을 then과 catch로 받아서 사용할 수 있다.
```

## 이전 시간에 만들었던 코드

```js
function taskA(a, b, cb) {
    setTimeout(() => {
        const res = a + b;
        cb(res);
    }, 3000);
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

taskA(3,4,(a_res)=>{
    console.log("task A : ", a_res);
    taskB(a_res, (b_res)=>{
        console.log("task B :",b_res);
        teskC(b_res, (c_res)=>{
            console.log("task C : ", c_res)
        })
    })
})

// task A : 7
// task B : 14
// task C : -14
```

## 이전 시간에 만들었던 코드를 promise를 사용해서 작성해보자.

```js
function taskA(a, b) {
    // 위의 executor 함수를 간소화해서 한번에 적은 것이니 헷갈리지 말자.
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const res = a + b;
            resolve(res);
        }, 3000);
    });
}

function taskB(a) {    
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const res = a * 2;
            resolve(res);
        }, 1000);
    });
}

function taskC(a) {    
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            const res = a * -1;
            resolve(res);
        }, 2000);
    });
}

// 이러면 callback hell 형식과 같다. 그럼 어떻게 바꾸어야 하는가?

taskA(5,1).then((a_res)=>{
    console.log("A RESULT : ", a_res);
    taskB(a_res).then((b_res)=>{
        console.log("B RESULT : ", b_res);
        taskC(b_res).then((c_res)=> {
            console.log("C RESULT : ", c_res);
        });
    });
});


// then chaining (then 체이닝 이라 부른다.)
taskA(5,1).then((a_res)=>{
    console.log("A RESULT : ", a_res);
    return taskB(a_res);
}).then((b_res)=>{
    console.log("B RESULT : ", b_res);
    return taskC(b_res);
}).then((c_res)=>{
    console.log("C RESULT : ", c_res);
});
```

### promise 함수를 사용하면! 
#### 비동기 처리를 호출하는 코드와 결과를 처리하는 코드를 분리할 수 있어서 callback 함수를 피하고 좀 더 가독성있고 깔끔한 비동기 처리를 할 수 있도록 도와준다.