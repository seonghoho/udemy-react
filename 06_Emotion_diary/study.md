## router 설치

```js
npm install react-router-dom@6
```

## React의 작동 방식

- Single Page Application, SPA
- Client Side Rendering, CSR

pages 라는 폴더를 만들어 컴포넌트들을 넣고, 

App.js에서 
```js
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/new' element={<New />}/>
          <Route path='/edit' element={<Edit />}/>
          <Route path='/diary' element={<Diary />}/>
        </Routes>
      <RouteTest/>
      </div>
    </BrowserRouter>
  );
}
```
위와 같이 경로를 지정하고, components 안에 RputeTest.js 파일에서 

```js
import {Link} from 'react-router-dom';

const RouteTest = () => {
    return <>
    <Link to={"/"}>HOME</Link>
    <br/>
    <Link to={"/diary"}>DIARY</Link>
    <br/>
    <Link to={"/new"}>NEW</Link>
    <br/>
    <Link to={"/edit"}>EDIT</Link>
    </>
}

export default RouteTest;
```
위와 같은 코드로 해당 위치로 이동한다. 

