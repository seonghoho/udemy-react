let age = 25;

console.log(age); // 25

age = 30;

console.log(age); // 30

///////////////////////

// 2. 자료형과 형변환
let name = "seonghoho";
let name2 = "최성호";
let name3 = `seonghoho ${name2}`;
console.log(name3);

// 3. 연산자
let a;
a = a ?? 10;
console.log(a); // 10
// a가 null이면 뒤의 값을 출력하는 연산자

// 7. 콜백함수
function checkMood (mood, goodCallback, badCallback) {
    if(mood === "good") {
        // 기분 좋을 때 하는 동작
        goodCallback();
    } else {
        // 기분 안좋을 때 하는 동작
        badCallback();
    }
}

function cry() {
    console.log("ACTION :: CRY");
}
function sing() {
    console.log("ACTION :: SING");
}
function dance() {
    console.log("ACTION :: DANCE");
}

checkMood("sad", sing, cry);


// sort 

let numbers = [0,1,3,2,6,10,20,15];

numbers.sort();

console.log(numbers);
// sort는 문자열 형태로 정렬해서 사전적으로 앞자리 기준으로 정렬해서 이상하다.
// 수의 크기별로 하기 위해서는 두 수를 비교해서 정렬해야한다.

const compare = (a, b) => {
    // 1. 같다.
    // 2. 크다.
    // 3. 작다.

    if (a > b) {
        // 크다
        return 1;
    }

    if (a < b) {
        // 작다
        return -1;
    }

    // 같다
    return 0;
};

numbers.sort(compare);

console.log(numbers);