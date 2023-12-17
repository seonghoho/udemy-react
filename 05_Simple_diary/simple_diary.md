## onChange

### 사용자의 행동한 것 (ex 이벤트) - 값이 바뀌었을 때.

## useState 하나로 묶어서 관리하기

### 기존 useState 사용 방식에서 하나로 줄인다면?

```js
    const [author, setAuthor] = useState("");
    const [content, setContent] = useState("");

    const DiaryEditor = () => {
        return (
            <div>
            <input 
                name="author"
                value={author} 
                onChange={(e) => {
                    state.setAuthor(e.target.value);
                }}; 
            />
        </div>
        )
    }
```

### useState를 하나로 묶는다면

```js
    const [state, setState] = useState({
        author: "",
        content: "",
    });

    const DiaryEditor = () => {
        return (
            <div>
                <input 
                    name="author"
                    value={state.author} 
                    onChange={(e) => {
                        setState({
                            ...state,
                            author: e.target.value,
                        });
                    }}
                />
            </div>
        )
    }
```

## 내용 길이 제한 걸기

```js
const handleSubmit = () => {
    if(state.author.length < 1){
        alert("작성자는 최소 1글자 이상 입력해주세요");
        return;
    };

    if(state.content.length < 5){
        alert("일기 본문은 최소 5글자 이상 입력해주세요");
        return;
    };

    console.log(state);
    alert("저장 성공");
};
```

## useRef 

### useRef 사용하지 않고 alert 사용하는 방법

```js
import { useRef } from "react";

const handleSubmit = () => {
    if(state.author.length < 1){
        alert("작성자는 최소 1글자 이상 입력해주세요");
        // focus
        return;
    };

    if(state.content.length < 5){
        alert("일기 본문은 최소 5글자 이상 입력해주세요");
        // focus
        return;
    };

    console.log(state);
    alert("저장 성공");
};

```

### useRef 사용하는 방법

```js
import { useRef } from "react";

const DiaryEditor = () => {

    const authorInput = useRef();


    const handleSubmit = () => {
        if(state.author.length < 1){
            // 조건문이 만족하면 해당 부분에 focus 된다. 
            authorInput.current.focus();
            return;
        };

        console.log(state);
        alert("저장 성공");
    };

    return (
        <div>
            <input 
                // ref를 통해 input 태그에 접근할 수 있게 된다
                ref={authorInput}
                name="author"
                value={state.author} 
                onChange={handleChangeState}
            />
        </div>
)};

```

