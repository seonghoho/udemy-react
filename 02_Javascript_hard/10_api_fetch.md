# API & fetch

## API

1. 손님이 웨이터(서버)에 `주문`
2. 웨이터(서버)가 냉장고에서 `찾기`
3. 냉장고에서 웨이터로 `가져오기`
4. 웨이터(서버)가 손님에게 `음식 서빙`

이 방식이 웹사이트의 로직과 비슷하다.

1. BROUSER(CLIENT)가 SERVER에 `데이터 요청` `Request` 
2. SERVER에서 DATABASE에 `데이터 검색 (질의)` `Query` 
3. DATABASE에서 SERVER로 `데이터 찾기` `Query Result`
4. SERVER에서 BROUSER(CLIENT)로 `요청 데이터를 전달 (응답)` `Response` 

- api는 웹브라우저와 같은 클라이언트와 서버간의 연결다리, 대화할 수 있는 방법이다.
- api호출은 어떤 데이터를 반환받기 위해서 사용한다.
- 함수와의 차이점은 응답을 언제 받을 지 모른다는 점이다.

```js
// API호출 - 인증받은 사용자에게만 응답한다.

async function getData (){
    let rawResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
    let jsonResponse = await rawResponse.json();
    console.log(jsonResponse);
}

getData();

// 100개의 json이 출력된다.
```