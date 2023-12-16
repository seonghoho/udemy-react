# React app 설치하기

npx와 node를 설치 완료했다면, 아래 코드를 적어 app을 설치한다.

```
npx create-react-app reactexam1
```

참고로 npx는 패키지를 로컬에 설치하지 않고, 한 번만 사용할 때 사용하는 명령어다.


## ES 모듈 시스템

```
export default App;
```

위의 코드를 사용해 function App을 내보낼 수 있고,

```
import App from './App';
```

이 코드로 불러와 사용할 수 있다.


## 컴포넌트

React에서는 Vue와 마찬가지로, 기능별로 컴포넌트를 만들어 사용한다.


## React Fragment

```
import React from 'react';

<React.Fragment>
```

fragment 태그 안에 넣은 내용은 최상위 태그에 적용되지 않는다.

<></> 빈 태그로 작성해도 문제되지 않는다.

## css 적용하는 방법

### 별도의 css 파일 적용하는 방법

```js
<div className="App">
    <MyHeader/>
    <h2>안녕 리액트
    <p>{name} 입니다.</p>
    </h2>
    <b id='bold_text'>React.js</b>
    <MyFooter/>
</div>
```

### 인라인 스타일 적용하는 법

```js
<div style={style.App}>
    <MyHeader/>
    <h2 style={style.h2}>안녕 리액트
    <p>{name} 입니다.</p>
    </h2>
    <b style={style.bold_text}>React.js</b>
    <MyFooter/>
</div>
```

#### jsx의 중괄호에는 숫자나 문자, 식을 포함할 수 있다.


## clone 후 다시 실행하는 방법

### 패키지를 생성한다.

```
$ npm init
```

### pakage-lock에 있는 필요한 모듈을 설치한다.

```
$ npm i
```
### 서버를 실행한다.

```
$ npm run start
```


## useState 

- React의 메서드
- import React, { useState } from "react" 로 불러온다.

### 어떤 컴포넌트에서 불러 온 함수의 상태(state)가 변경되면 해당 컴포넌트는 함수를 다시 불러온다. 


## Props

### 컴포넌트에 데이터를 전달하는 방법

### initialValue 값으로 초기 값을 전달할 수 있다.

```js
<Counter a={1} initialValue={5}/>
```

### 해당 컴포넌트의 함수에서 props를 받을 수 있다.

```js
const Counter = (props) => {
    console.log(props);

    // 이렇게 받으면 초기 값을 설정할 수 있다.
    const [count, setCount] = useState(props.initialValue);
    

}

```

### console에는 이런 형식으로 출력된다.

{a: 1, initialValue: 5}
    a:1
    initialValue:5
    [[Prototype]]:Object

### 객체에 스프레드 형식으로 props를 전달할 수 있다.

```js
function App() {
  const counterProps = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    initialValue:5,
  };

  return (
      <MyHeader/>
      <Counter {...counterProps}/>
  );
};
```

### defaultProps

#### 전달받지 않은 props의 default값을 따로 지정해 놓을 수 있다.

```js
Counter.defaultProps={
    initialValue:0
};
```

#### 컴포넌트가 리렌더(relender)되는 경우

- 본인이 관리하고 가진 state가 변경될 때마다, 
- 나에게 내려오는 props가 바뀔 때마다, 
- 부모가 리렌더 될 때마다 리렌더 된다.

