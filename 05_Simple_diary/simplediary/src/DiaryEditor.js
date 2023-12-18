import React, { useContext, useRef, useState, useEffect } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {

    const {onCreate} = useContext(DiaryDispatchContext)

    useEffect(() => {
        // console.log("DiaryEditor 렌더")
    })

    const authorInput = useRef();
    const contentInput = useRef();

    // 기존 useState 사용 방식에서 하나로 줄인다면?
    // const [author, setAuthor] = useState("");
    // const [content, setContent] = useState("");

    const [state, setState] = useState({
        author: "",
        content: "",
        // 각각의 프로퍼티를 생성한 것이다.
        emotion: 1,
    });

    const handleChangeState = (e) => {
        // console.log(e.target.value);
        // console.log(e.target.name);

        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if(state.author.length < 1){
            // alert("작성자는 최소 1글자 이상 입력해주세요");
            // focus
            authorInput.current.focus();
            return;
        };

        if(state.content.length < 5){
            // alert("일기 본문은 최소 5글자 이상 입력해주세요");
            // focus
            contentInput.current.focus();
            return;
        };

        onCreate(state.author, state.content, state.emotion);
        // console.log(state);
        alert("저장 성공");

        // 저장 후 입력창 초기화
        setState({
            author: "",
            content: "",
            emotion: 1,
        });
    };


    return (
        <div className="DiaryEditor">
            <h2>오늘의 일기</h2>
            <div>
                <input 
                    ref={authorInput}
                    name="author"
                    value={state.author} 
                    onChange={handleChangeState}
                />
            </div>
            <div>
                <textarea 
                    ref={contentInput}
                    value={state.content}
                    name="content"
                    // onChange={(e) => {
                    //     setState({
                    //         ...state,
                    //         author: e.target.value,
                    //     });
                    onChange={handleChangeState}
                />
            </div>

            {/* 감정 점수 */}
            <div>
                오늘의 감정점수 : 
                <select 
                    name="emotion" 
                    value={state.emotion} 
                    onChange={handleChangeState}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
            </div>

            <div>
                <button onClick={handleSubmit}>일기 저장하기</button>
            </div>
        </div>
    );
};

export default React.memo(DiaryEditor);
