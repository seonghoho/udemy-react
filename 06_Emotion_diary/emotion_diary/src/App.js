import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RouteTest from './components/RouteTest';


import Home from './pages/Home'
import New from './pages/New'
import Edit from './pages/Edit'
import Diary from './pages/Diary'

function App() {

  // 이미지가 뜨지 않을 경우
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";

  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        {/* process.env.PUBLIC_URL로 적으면 public 폴더 안으로 들어간다 */}
        {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} alt="" />
        <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} alt="" /> */}
        
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/new' element={<New />}/>
          <Route path='/edit' element={<Edit />}/>
          <Route path='/diary/:id' element={<Diary />}/>
        </Routes>
      {/* <RouteTest/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
