import React from 'react';
// import './App.css';

import MyHeader from './Myheader';
import MyFooter from './Myfooter';
import Counter from './Counter';

function App() {
  let name = '최성호';

  const style = {
    App: {
      backgroundColor: "white",
    },
    h2: {
      color:"red",
    },
    bold_text: {
      color:"green",
    },
  };

  const func = () => {
    return "func";
  };

  const number = 5;

  return (
    <React.Fragment>
    {/* css 파일을 사용해서 적용하는 방법 */}
    {/* <div className="App">
      <MyHeader/>
        <h2>안녕 리액트
        <p>{name} 입니다.</p>
        </h2>
        <b id='bold_text'>React.js</b>
      <MyFooter/>
    </div> */}

    {/* 인라인 스타일 적용하는 법 */}
    <div style={style.App}>
      <MyHeader/>
      <Counter/>

        <h2 style={style.h2}>안녕 리액트 {func()}
        <p>{name} 입니다.</p>
        </h2>
        <b style={style.bold_text}>React.js 
        <br></br>
        {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>

      <MyFooter/>
    </div>
  </React.Fragment>
  );
}

export default App;
