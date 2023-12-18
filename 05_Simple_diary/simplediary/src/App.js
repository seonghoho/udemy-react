import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import React, {useCallback, useEffect, useMemo, useReducer, useRef } from 'react';
// import OptimizeTest from './OptimizeTest';
// import Lifecycle from './Lifecycle';

// https://jsonplaceholder.typicode.com/comments

  // const [data, setData] = useState([]);

  const reducer = (state, action) => {
    switch(action.type){
      case 'INIT': {
        return action.data
      }

      case 'CREATE': {
        const created_date = new Date().getTime();
        const newItem = {
          ...action.data,
          created_date
        }
        return [newItem, ...state];
      }

      case 'REMOVE': {
        return state.filter((it)=> it.id !== action.targetId);
      }

      // action이 발생하면 targetId와 newContent가 전달된다.
      // 기존 state에서 map함수를 사용해 targetId와 일치하는 요소를 찾은 다음, 
      // 그 요소의 값은 content만 new content로 수정해주고, 나머지는 다시 돌려주고 
      // 그 요소를 합쳐서 새로운 배열을 만들어서 새로운 state에 보내기 때문에 정상적으로 수행할 수 있다.

      case "EDIT": {
        return state.map((it)=> 
        it.id === action.targetId ? 
        {...it, content:action.newContent} : it
        );
      }
      default :
      return state;
    }
  };

export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

const App = () => {
  const [data, dispatch] = useReducer(reducer, [])


  const dataId = useRef(0);

  const getData = async()=> {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    ).then((res)=>res.json());
    
    const initData = res.slice(0, 20).map((it)=>{
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5)+1,
        created_date : new Date().getTime(),
        id : dataId.current++
      };
    });

    dispatch({type:"INIT", data:initData});
    // setData(initData);
  };

  useEffect(()=>{
    getData();
  },[]);

  // 게시글 생성
  const onCreate = useCallback(
    (author, content, emotion) => {
    dispatch({
      type:'CREATE', 
      data: {author, content, emotion, id:dataId.current},
    });
    
    // const created_date = new Date().getTime();
    // const newItem = {
    //   author,
    //   content,
    //   emotion,
    //   created_date,
    //   id : dataId.current
    // }
    dataId.current += 1;

    // newItem을 먼저 적으면 작성한 게시글이 위로 가게 만들 수 있다.
    // 인자로 데이터를 받아서 아이템을 추가한 데이터를 리턴하는 콜백함수를 setData에 전달할 것이다.
    
    // setData((data)=>[newItem, ...data])
  }, 
  
  []
  );

  // 게시글 삭제
  const onRemove = useCallback((targetId) => {
    dispatch({type: "REMOVE", targetId})

    // console.log(`${targetId}가 삭제되었습니다.`);
    // setData(data => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {

    dispatch({type: "EDIT", targetId, newContent})

    // setData((data) =>
    //   data.map((it)=>
    //     it.id === targetId ? {...it, content:newContent } : it
    //   )
    // );
  }, []);


  //useMemo를 사용해서 재사용되어도 재생성되지 않게 만든다.
  // 최적화가 풀리지 않게 한다.
  const memoizedDispatches = useMemo(()=>{
    return {onCreate, onRemove, onEdit}
  }, [])


  const getDiaryAnalysis = useMemo(
    () => {
    // console.log("일기 분석 시작");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;

    return {goodCount, badCount, goodRatio};
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        <div className="App">
          {/* <Lifecycle /> */}
          {/* <OptimizeTest/> */}
          <DiaryEditor />
          <div>전체 일기 : {data.length}</div>
          <div>기분 좋은 일기 개수 : {goodCount}</div>
          <div>기분 나쁜 일기 개수 : {badCount}</div>
          <div>기분 좋은 일기 비율 : {goodRatio}</div>
          <DiaryList />
        </div>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
