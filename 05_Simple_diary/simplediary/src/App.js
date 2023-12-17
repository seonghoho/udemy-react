import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import {useEffect, useRef, useState} from 'react';
// import Lifecycle from './Lifecycle';

// https://jsonplaceholder.typicode.com/comments

function App() {

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
  const onCreate = (author, content, emotion) => {
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
    setData([newItem, ...data])
  };

  // 게시글 삭제
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it)=>
        it.id === targetId ? {...it, content:newContent } : it
      )
    );
  };

  return (
    <div className="App">
      {/* <Lifecycle /> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
