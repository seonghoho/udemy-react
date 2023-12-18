import { useContext } from 'react';
import DiaryItem from './DiaryItem.js';
import { DiaryStateContext } from './App.js';

const DiaryList = () => {
    // console.log(diaryList);
    const diaryList = useContext(DiaryStateContext);

    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it} />
                ))}
            </div>
        </div>
    );
};

// undefined로 전달 될 수 있는 값을 defaultProps를 사용함으로써 에러를 방지할 수 있다.
DiaryList.defaultProps = {
    diaryList:[],
}

export default DiaryList;