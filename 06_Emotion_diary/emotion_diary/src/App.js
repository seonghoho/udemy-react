import React, { useRef, useReducer, useEffect } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import RouteTest from './components/RouteTest';

import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// COMPONENTS
// import MyButton from "./components/MyButton";
// import MyHeader from "./components/MyHeader";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }

  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

// const dummyData = [
//   {
//     id: 1,
//     emotion: 1,
//     content: "오늘의 일기 1번",
//     date: 1703596553817,
//   },
//   {
//     id: 2,
//     emotion: 2,
//     content: "오늘의 일기 2번",
//     date: 1703596553818,
//   },
//   {
//     id: 3,
//     emotion: 3,
//     content: "오늘의 일기 3번",
//     date: 1703596553819,
//   },
//   {
//     id: 4,
//     emotion: 4,
//     content: "오늘의 일기 4번",
//     date: 1703596553820,
//   },
//   {
//     id: 5,
//     emotion: 5,
//     content: "오늘의 일기 5번",
//     date: 1703596553821,
//   },
// ];

function App() {
  // useEffect(() => {
  //   const item1 = localStorage.getItem("item1");
  //   const item2 = localStorage.getItem("item2");
  //   const item3 = JSON.parse(localStorage.getItem("item3"));
  //   console.log({ item1, item2, item3 });
  // }, []);

  // 이미지가 뜨지 않을 경우
  // const env = process.env;
  // env.PUBLIC_URL = env.PUBLIC_URL || "";

  const [data, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort(
        (a, b) => parseInt(b.id) - parseInt(a.id)
      );

      if (diaryList.length >= 1) {
        dataId.current = parseInt(diaryList[0].id) + 1;

        // console.log(diaryList);
        // console.log(dataId);

        dispatch({ type: "INIT", data: diaryList });
      }
    }
  }, []);

  // 오늘의 날짜를 알아내는 방법
  // console.log(new Date().getTime())

  const dataId = useRef(0);
  //CREATE

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  //REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  //EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onEdit,
          onRemove,
        }}
      >
        <BrowserRouter>
          <div className="App">
            {/* <MyHeader
              headText={'Header'}
              leftChild={
                <MyButton
                  text={'왼쪽 버튼'}
                  onClick={() => alert('왼쪽 클릭')}
                />
              }
              rightChild={
                <MyButton
                  text={'오른쪽 버튼'}
                  onClick={() => alert('오른쪽 클릭')}
                />
              }
            />

            <h2>App.js</h2>

            <MyButton
              text={'버튼'}
              onClick={() => alert('버튼 클릭')}
              type={'positive'}
            />

            <MyButton
              text={'버튼'}
              onClick={() => alert('버튼 클릭')}
              type={'negative'}
            />

            <MyButton
              text={'버튼'}
              onClick={() => alert('버튼 클릭')}
              // default
              // type={"negative"}
            /> */}

            {/* process.env.PUBLIC_URL로 적으면 public 폴더 안으로 들어간다 */}
            {/* <img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} alt="" />
            <img src={process.env.PUBLIC_URL + `/assets/emotion2.png`} alt="" />
            <img src={process.env.PUBLIC_URL + `/assets/emotion3.png`} alt="" />
            <img src={process.env.PUBLIC_URL + `/assets/emotion4.png`} alt="" />
            <img src={process.env.PUBLIC_URL + `/assets/emotion5.png`} alt="" /> */}

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
            {/* <RouteTest/> */}
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
