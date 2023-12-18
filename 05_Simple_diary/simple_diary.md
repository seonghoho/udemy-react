## onChange

### 사용자의 행동한 것 (ex 이벤트) - 값이 바뀌었을 때.

## useState 하나로 묶어서 관리하기

### 기존 useState 사용 방식에서 하나로 줄인다면?

```js
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const DiaryEditor = () => {
        return (
            <div>
            <input 
                name="author"
                value={author} 
                onChange={(e) => {
                    state.setAuthor(e.target.value);
                }}; 
            />
        </div>
        )
    }
```

### useState를 하나로 묶는다면

```js
    const [state, setState] = useState({
        author: "",
        content: "",
    });

    const DiaryEditor = () => {
        return (
            <div>
                <input 
                    name="author"
                    value={state.author} 
                    onChange={(e) => {
                        setState({
                            ...state,
                            author: e.target.value,
                        });
                    }}
                />
            </div>
        )
    }
```

## 내용 길이 제한 걸기

```js
const handleSubmit = () => {
    if(state.author.length < 1){
        alert("작성자는 최소 1글자 이상 입력해주세요");
        return;
    };

    if(state.content.length < 5){
        alert("일기 본문은 최소 5글자 이상 입력해주세요");
        return;
    };

    console.log(state);
    alert("저장 성공");
};
```

## useRef 

### useRef 사용하지 않고 alert 사용하는 방법

```js
import { useRef } from "react";

const handleSubmit = () => {
    if(state.author.length < 1){
        alert("작성자는 최소 1글자 이상 입력해주세요");
        // focus
        return;
    };

    if(state.content.length < 5){
        alert("일기 본문은 최소 5글자 이상 입력해주세요");
        // focus
        return;
    };

    console.log(state);
    alert("저장 성공");
};

```

### useRef 사용하는 방법

```js
import { useRef } from "react";

const DiaryEditor = () => {

    const authorInput = useRef();


    const handleSubmit = () => {
        if(state.author.length < 1){
            // 조건문이 만족하면 해당 부분에 focus 된다. 
            authorInput.current.focus();
            return;
        };

        console.log(state);
        alert("저장 성공");
    };

    return (
        <div>
            <input 
                // ref를 통해 input 태그에 접근할 수 있게 된다
                ref={authorInput}
                name="author"
                value={state.author} 
                onChange={handleChangeState}
            />
        </div>
)};

```

## Lifecycle

### 생애주기

- 일반적으로 시간에 흐름에 따라, 탄생부터 죽음에 이르는 순간에 따른 단계적인 과정

### React에서의 생애주기

- 탄생 : 화면에 나타나는 것, Mount
- 변화 : 업데이트, 리렌더, Update
- 죽음 : 화면에서 사라짐, UnMount\

### React의 생애주기 메서드

- ComponentDidMount
- ComponentDidUpdate
- ComponentWillUnmount


## React Hooks

### use 이펙트는 리액트의 lifecycle을 제어하는 메서드를 훔쳐올 수 있는 기능을 가진 도구라고 볼 수 있다.

### Class형 컴포넌트의 길어지는 코드 길이 문제, 중복 코드, 가독성 문제 등을 해결하기 위해 등장했다.

ex. useState, useEffect, useRef

```js
import React, { useEffect } from "react";

useEffect(()=>{
    // callback 함수

}, []);
```

1. 첫 번째 파라미터로는 callback함수를 전달한다.
2. Dependency Array (의존성 배열)을 전달한다.
   이 배열 내에 들어있는 값이 변화하면 콜백함수가 수행된다.

### 의존성 배열에 빈 배열을 넣을 경우

```js
// [] 빈 배열을 넣으면 callback함수가 mount되었을 때만 실행된다.
useEffect(()=>{
    console.log("Mount!");
}, []);
```

### 컴포넌트가 업데이트 되는 순간에 불러오는 상황

```js
// 업데이트 될 때만
useEffect(()=>{
    console.log("Update!");
});
```

### 어떤 부분이 업데이트될 때

```js
// count가 업데이트 될 때
useEffect(()=>{
    console.log(`count is update : ${count}`)
    if (count > 5) {
        alert("count가 5를 넘었습니다. 따라서 1로 초기화합니다.");
        setCount(1);
    }
}, [count]);

// text가 업데이트 될 때
useEffect(()=>{
    console.log(`text is update : ${text}`)
}, [text]);
```

## Memoization

- 이미 계산해 본 연산 결과를 기억 해 두었다가 
- 동일한 계산을 시키면, 다시 연산하지 않고 기억 해 두었던 데이터를 반환 시키게 하는 방법
- 마치 시험을 볼 때 이미 풀어본 문제는 다시 풀어보지 않아도 답을 알고 있는 것과 유사함

<br>

- 사람은 답을 외우기 보다는 해결할 수 있는 능력을 키우는 위주로 학습
- 컴퓨터는 나올 수 있는 모든 문제의 답을 외워버림 (Memoization)

## useMemo 

- 연산 최적화를 위한 함수
- https://ko.legacy.reactjs.org/docs/react-api.html#reactmemo

### 본인이 수정될 때만 수정된다. 고차 컴포넌트
```jsx
import React, {useState, useEffect} from 'react';

const Textview = React.memo(({text}) => {
    useEffect(()=>{
        console.log(`Update :: Text : ${text}`);
    });
    return <div>{text}</div>
});

const Countview = React.memo(({count})=> {
    useEffect(()=>{
        console.log(`Update :: Count : ${count}`);
    });
    return <div>{count}</div>
})

const OptimizeTest = () => {
    const [count, setCount] = useState(1);
    const [text, setText] = useState("");

    return (
        <div style={{ padding: 50 }}>
            <div>
                <h2>count</h2> 
                <Countview count={count}/>
                <button onClick={()=>setCount(count+1)}>+</button>
            </div>
            <div>
                <h2>text</h2>
                <Textview text={text}/>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
        </div>
    )
};

export default OptimizeTest;

```

### React.memo는 얕은 복사를 한다.

깊은 복사로 코드를 만들면 된다.

```js
const areEqual = (prevProps, nextProps)=>{
    // return true // 이전 프롭스 현재 프롭스가 같다는 뜻 => 리렌더링을 일으키지 않게 된다
    // return false // 이전과 현재가 다르다 => 리렌더링을 일으키라는 뜻

    if(prevProps.obj.count === nextProps.obj.count){
        return true;
    }
    return false;

    // return prevProps.obj.count === nextProps.obj.count; 이렇게 해도 된다.
}

const MemoizedCounterB = React.memo(CounterB, areEqual);
```


## useCallback

- https://ko.legacy.reactjs.org/docs/hooks-reference.html#usecallback
- 메모이제이션된  콜백함수를 반환한다.

### []를 넣어 mount될 때만 데이터를 전달하고, 다음부터는 그 함수를 재사용한다.
```js
  const onCreate = useCallback(
    (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id : dateId.current
    }
    dateId.current += 1;
    // newItem을 먼저 적으면 작성한 게시글이 위로 가게 만들 수 있다.
    // 인자로 데이터를 받아서 아이템을 추가한 데이터를 리턴하는 콜백함수를 setData에 전달할 것이다.
    setData((data)=>[newItem, ...data])
  }, 
  
  []);
```

