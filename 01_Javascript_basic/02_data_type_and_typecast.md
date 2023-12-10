# 2. 자료형과 형 변환

- 자료형은 값을 성질에 따라 변형한 것이다.
- Primateve Type (원시형 타입)
  - ```
    let number = 12;
    ```
  - 한번에 하나의 값만 가질 수 있음
  - 하나의 고정된 저장 공간 이용
  
- 숫자형
  - ```javascript
    let age = 25; // 정수
    let tall = 175.9; // 실수
    let inf = Infinity;
    let minusinf = -Infinity;
    let nan = NaN;
    console.log(age * tall);
    ```
- 문자형
  - ```javascript
    let name = "seonghoho";
    let name2 = "최성호";
    let name3 = `seonghoho ${name2}`;
    console.log(name3);
    ```

- boolean형
  - ```javascript
    let isSwitchOff = false;
    ```

- null형
  - 이 값은 아무 값도 가지지 않는다고 실제로 할당해줘야 한다.  
  - ```javascript
    let a = null;
    comsole.log(a);
    ``` 

- undefined형
  - 아무것도 할당하지 않았을 때 설정된다.
  - ```javascript
    let variable;
    comsole.log(variable);
    ``` 

## 명시적 형변환

parseInt를 사용하여 문자형을 숫자형으로 변환한다.

```javascript
let numberA = 12;
let numberB = "2";
console.log(numberA + parseInt(numberB));
```