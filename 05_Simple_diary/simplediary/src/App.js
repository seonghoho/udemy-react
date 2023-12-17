import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import {useRef, useState} from 'react';

// const dummyList= [
//   {
//     id:1,
//     author: "최성호",
//     content: "하이 1",
//     emotion:5,
//     created_date: new Date().getTime()
//   },
//   {
//     id:2,
//     author: "최승호",
//     content: "하이 2",
//     emotion:1,
//     created_date: new Date().getTime()
//   },
//   {
//     id:3,
//     author: "최선호",
//     content: "하이 3",
//     emotion:2,
//     created_date: new Date().getTime()
//   },
//   {
//     id:4,
//     author: "최석호",
//     content: "하이 4",
//     emotion:4,
//     created_date: new Date().getTime()
//   },
// ]


function App() {

  const [data, setData] = useState([]);

  const dateId = useRef(0);

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
  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };


  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      {/* <DiaryList diaryList={dummyList} /> */}
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
