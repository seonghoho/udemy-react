# 10. 반복문


```js
for (let i = 1; i <= 100; i++) {
    // 반복 수행할 명령
    console.log("seonghoho");
}

// for (초기식 ; 조건식 ; 연산식){
//     반복수행할 명령
// }
```

```js
let person = {
    name: "최성호",
    age: 27,
    tall: 171
};

const personKeys = Objecy.keys(person);

for (let i = 0; i < personKeys.length; i++) {
    const curKey = personKeys[i];
    const curValue = person[curKey];

    console.log(`${curKey} : ${curValue}`);
}
```