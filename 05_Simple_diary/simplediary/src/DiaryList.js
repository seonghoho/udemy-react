import DiaryItem from './DiaryItem.js';

const DiaryList = ({ diaryList }) => {
    console.log(diaryList);
    return (
        <div className="DiaryList">
            <h2>일기 리스트</h2>
            <h4>{diaryList.length}개의 일기가 있습니다.</h4>
            <div>
                {diaryList.map((it) => (
                    <DiaryItem key={it.id} {...it}/>

                    // <div key={it.id}>
                    //     <div>작성자 : {it.author}</div>
                    //     <div>일기 : {it.content}</div>
                    //     <div>감정 : {it.emotion}</div>
                    //     <div>작성 시간(ms) : {it.created_date}</div>
                    // </div>
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