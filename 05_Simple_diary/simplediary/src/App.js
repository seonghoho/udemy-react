import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
// import OptimizeTest from './OptimizeTest';
// import Lifecycle from './Lifecycle';

// https://jsonplaceholder.typicode.com/comments

const App = () => {

  const [data, setData] = useState([]);

  const dateId = useRef(0);

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
        id : dateId.current++
      };
    });

    setData(initData);
  };

  useEffect(()=>{
    getData();
  },[]);

  // 게시글 생성
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

  // 게시글 삭제
  const onRemove = useCallback((targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    setData(data => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it)=>
        it.id === targetId ? {...it, content:newContent } : it
      )
    );
  }, []);

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
    <div className="App">
      {/* <Lifecycle /> */}
      {/* <OptimizeTest/> */}
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 좋은 일기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
