# 6. spread 연산자

 ```js
 const cookie = {
    base : "cookie",
    madeIn : "korea"
 };

 const chocochipCookie = {
    base : "cookie",
    madeIn : "korea",
    toping : "chocochip"
 };

 const blueberryCookie = {
    base : "cookie",
    madeIn : "korea",
    toping : "blueberry"
 };

 const strawberryCookie = {
    base : "cookie",
    madeIn : "korea",
    toping : "strawberry"
 };
 
 ```

base와 madeIn이 겹친다.

```js
const cookie = {
base : "cookie",
madeIn : "korea"
};

const chocochipCookie = {
...cookie,
toping : "chocochip"
};

const blueberryCookie = {
...cookie,
toping : "blueberry"
};

const strawberryCookie = {
...cookie,
toping : "strawberry"
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

```

spread 연산자를 이용해 객체의 중복되는 요소를 펼치는 효과를 사용할 수 있다.

```js
const noTopingCookies = ["촉촉한 쿠키", "안촉촉한 쿠키"];
const topingCookies = ["바나나쿠키", "블루베리쿠키", "딸기쿠키", "초코칩쿠키"];

const allCookies = [...noTopingCookies, "함정쿠키", ...topingCookies];
console.log(allCookies);

```