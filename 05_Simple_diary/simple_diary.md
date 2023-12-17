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
                }}  
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


