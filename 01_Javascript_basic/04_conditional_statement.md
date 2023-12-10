# 4. 조건문

## IF
```js
let a = 3;
if(a >= 5) {
    console.log("5이상입니다.");
}
else if(a >= 3) {
    console.log("3이상입니다.");
} else {
    console.log("3미만입니다.");
}
```

## switch

```js
let country = "ko";

switch(country){
    case 'ko':
        console.log("한국");
        break;
    case "cn":
        console.log("중국");
        break;
    case "jp":
        console.log("일본");
        break;
}
```