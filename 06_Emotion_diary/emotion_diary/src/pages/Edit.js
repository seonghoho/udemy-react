import { useNavigate, useSearchParams } from "react-router-dom";

const Edit = () => {

    // useNavigate() 함수는 경로를 옮기는 함수이다. 로그인 안했으면 로그인 페이지로 보내는 경우 사용
    const navigate = useNavigate();

    // 
    const [searchParams, setSearchParams] = useSearchParams();

    const id = searchParams.get('id');
    console.log("id : ", id);

    const mode = searchParams.get("mode");
    console.log("mode : ", mode);


    return (
        <div>
            <h1>Edit</h1>
            <p>이 곳은 일기 수정 페이지 입니다.</p>
            <button onClick={() => setSearchParams({ who : "winterlood" })}>QS 바꾸기</button>
            <button onClick={() => {
                navigate("/home");
            }}>
                HOME으로 가기
            </button>
            <button onClick={()=>{
                navigate(-1)
            }}>
                뒤로가기
            </button>
        </div>
    );
};

export default Edit;