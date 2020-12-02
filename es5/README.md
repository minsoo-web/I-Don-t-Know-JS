<p align="center">
    <img width="380"  alt="ECMAscript" src="../images/es5/es5.png" />
</p>

<h1 align="center">ECMAScript 5</h1>

<p align="center">
    <a href="https://img.shields.io">
        <img alt="tilbadge" src="https://img.shields.io/badge/%20%20%F0%9F%94%A5%20%20-%20TIL%20-%23ffd54f" /></a>
    <a href="https://img.shields.io">
        <img alt="mdbadge" src="https://img.shields.io/badge/markdown%20lint-pass-blue"></a>
    <a href="https://img.shields.io">
        <img alt="lovejs" src="https://img.shields.io/badge/love%20js%3F-yes-critical"></a>
    <a href="https://hits.seeyoufarm.com">
        <img alt="today" src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMinsoo-web%2Fes_features%2Ftree%2Fmaster%2Fes5&count_bg=%231BB47C&title_bg=%2330485C&icon=&icon_color=%23E7E7E7&title=today&edge_flat=false">
    </a>
</p>

## 🚀 Intro

`ES5`는 2009년도에 발표된 ECMAscript 5 의 줄임 표현으로,  
**IE9 🤪** 에서 `'use strict'`를 지원하지 않는 것을 제외하고는 대부분의 브라우저 버전에서 `ES5` 문법을 지원한다는 점이 특징입니다.

> _typescript_ 에서도 default target 이 `es5` 인 것을 볼 수 있습니다.

![ts_config](../images/es5/es5_1_tsconfig.png)

## 👀 ES5 주요 특징들

- ['use strict'](#use-strict)
- [String.trim()](#stringtrim)
- [Array.isArray()](#arrayisarray)
- [Array.forEach()](#arrayforeach)
- [Array.map()](#arraymap)
- [Array.filter()](#arrayfilter)
- [Array.reduce()](#arrayreduce)
- [Array.reduceRight()](#arrayreduceright)
- [Array.every()](#arrayevery)
- [Array.some()](#arraysome)
- [Array.indexOf()](#arrayindexof)
- [Array.lastIndexOf()](#arraylastindexof)
- [JSON.parse()](#jsonparse)
- [JSON.stringify()](#jsonstringify)
- [Date.now()](#datenow)
- [Function.bind()](#functionprototypebind)
- [call 과 apply](#call-apply)

### 'use strict'

#### What is strict-mode

🧐 말 그대로 엄격 모드입니다.  
반대 표현으로는 '느슨한 모드(sloppy mode)' 라고 부르기도 합니다.

기존의 느슨한 JS의 문법들을 엄격하게 검열한다고 생각하시면 될 것 같습니다.

1. 기존에는 **조용히** 무시되던 에러들을 _throwing_ 합니다.
2. _JavaScript_ 엔진의 최적화 작업을 어렵게 만드는 실수들을 바로 잡습니다.  
   가끔씩 **엄격모드**의 코드는 **비-엄격** 모드의 동일한 코드보다 더 빨리 작동하도록 만들어집니다.
3. 엄격 모드는 ECMAScript의 차기 버전들에서 정의 될 문법들을 금지합니다.

#### 엄격모드 적용하기

전체 스크립트를 엄격 모드로 적용하기 위해선  
script 최상단에 `'use strict';` 구문을 적어주면 됩니다.

```Javascript
'use strict';
// some code
```

함수에 엄격 모드를 적용하기 위해선  
함수 본문 처음에 `'use strict';`을 적어주면 됩니다.

```Javascript
function add(){
    'use strict';
    return "덧셈 안 해"
}
```

ES6 (ECMA2015)에 도입된 모듈에서는 엄격 모드 시작을 위한 구문 없이도  
자동으로 엄격모드입니다.

#### 조용한 에러들

> 엄격 모드와 비엄격 모드의 차이중 몇 개를 뽑아서 정리했습니다.  
> 더 많은 특징들은 [MDN 공식 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Strict_mode) 에서 확인하시기 바랍니다.

##### 1. 선언하지 않은 variable, object를 사용/수정/삭제 할 수 없다

🤪 느슨한 모드

```JavaScript
// "use strict";

이거_선언_되는_거였어 = 10;
console.log(이거_선언_되는_거였어); // 10
```

🧐 엄격 모드

```JavaScript
"use strict";

이거_선언_되는_거였어 = 10; // error
console.log(이거_선언_되는_거였어);
```

##### 2. `with` statement

엄격 모드에서는 `with` 를 사용하지 못하게 합니다.  
런타임중에 블록 안의 모든 이름이 전달된 객체의 프로퍼티나 (또는 전역) 스코프 내의 변수로 매핑 될 수 있다는 것입니다.

🤪 느슨한 모드

```JavaScript
function cos(number) {
    console.log(number);
}

with (Math) {
    x = cos(2 * PI);
}
console.log(x); // 1
```

🧐 엄격 모드

```JavaScript
"use strict";

function cos(number) {
    console.log(number);
}

// error
with (Math) {
    x = cos(2 * PI);
}
console.log(x);
```

[목록으로](#-es5-주요-특징들)

### string.trim()

양 끝에서 공백을 제거한 새로운 문자열을 반환합니다.  
인자로 받을 수 있는 것은 없습니다.

> 파이썬의 `strip()` 에게 공백을 인자로 준 것과 같은 역할입니다.

```Javascript

var a = " 누가 이렇게 저장을 해 "

console.log(a.trim()) // "누가 이렇게 저장을 해"
console.log(a) // " 누가 이렇게 저장을 해 "
```

[목록으로](#-es5-주요-특징들)

### Array.isArray()

이 메서드는 전달받은 인자가 Array인지 판별합니다.

#### 🏄‍♂️ Array.isArray() 예제

```Javascript
// Array.isArray(obj: Object): boolean

var a = Array;
var _a = Object;
var newArray = new Array();
var proto = Array.prototype;
var b = [];
var c = {};

console.log(Array.isArray(a)); // false
console.log(Array.isArray(_a)); // true
console.log(Array.isArray(newArray)); // true
console.log(Array.isArray(proto)); // true
console.log(Array.isArray(b));  // false
console.log(Array.isArray(c)); // false
```

[목록으로](#-es5-주요-특징들)

### Array.forEach()

```TypeScript
Array.prototype.forEach(
    callbackfn: (
        value: any,
        index: number,
        array: any[]
    ) => void, thisArg?: any): void
```

`forEach`를 사용할때는 `for문`을 길게 늘여서 쓰기 싫어서 사용하는 경우가 많은데,  
모를법한 다른 기능들도 있으니 소개하고 가겠습니다. ~~제가 몰랐던겁니다~~

#### 1. thisArg

callback 을 실행할 때 `this`로 사용할 값입니다.

##### 🏄‍♂️ thisArg 예제

```JavaScript
function Counter() {
    this.sum = 0;
    this.count = 0;
}

Counter.prototype.add = function (array) {
    array.forEach(function (entry) {
        this.sum += entry;
        ++this.count;
        console.log(this) // Counter 객체
    }, this);
    // thisarg 가 빠지게 된다면 this는 Counter를 바라보지 않습니다.
};

const obj = new Counter();
obj.add([2, 5, 9]);
console.log(obj.count); // 3
console.log(obj.sum); // 16
```

#### 2. forEach 빠져 나오기

`forEach`는 `break` 가 지원되지 않습니다. (대체 왜... 🤬)  
하지만 약간의 편법을 더해주면 break 처럼 사용할 수 있습니다.

##### 1. try-catch

```JavaScript
var myArr = [1, 2, 3];
var count = 0;
var Break = new Error("Break");

try {
    myArr.forEach(element => {
        if (element == 2) throw Break;
        count++;
    });
} catch (err) {
    if (err != Break) throw Break; // 이 코드는 없어도 됩니다.
}

console.log(count); // 1

```

##### 2. every, some 에 if-else 문 사용하기

이건 사용 가능한 방법이긴 하지만,  
`every`와 `some`의 사용 취지와 맞지 않는 것 같아 저는 크게 와닿진 않았습니다.

[목록으로](#-es5-주요-특징들)

### Array.map()

배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 _결과를 모아서_  
*새로운 배열을 반환*하는 메소드 입니다.

```JavaScript
Array.prototype.map(callbackfn: (
    value: any,
    index: number,
    array: any[]
)=>any,thisArg?:any): any[]

```

`forEach()` 메서드와 유사하지만

- 반환값이 있다는 점
- 그 반환 값이 `callback`의 결과들을 모은 배열이라는 점

위 두가지가 큰 차이 점입니다.

> ⚠️ 이에 따라 한가지 유의하셔야 할 점이 있습니다.  
> `callback` 의 결과들을 모은 배열을 반환하기 때문에  
> `callback` 내에서 `return` 을 해주어야 합니다.

[목록으로](#-es5-주요-특징들)

### Array.filter()

알고리즘 문제를 풀다보면 자주 쓰이는 메소드 중 하나입니다.  
주어진 함수의 _테스트를_ 통과하는 모든 요소를 모아 _새로운 배열로_ 반환합니다.

```JavaScript
Array.prototype.filter(callback:(
    value: any,
    index: number,
    array: any[],
) => meet the condition value , thisArg?: any): any[]
```

> ⚠️ `filter()` 는 호출되는 배열을 변화시키지(mutate) 않습니다.

#### Array.filter() 🏄‍♂️ 예제

```JavaScript
function isOdd(value){
    return (value % 2 ) == 1
}

// 셋 다 같은 결과 [1, 3, 5]
var filtered1 = [1, 2, 3, 4, 5].filter(isOdd);
var filtered2 = [1, 2, 3, 4, 5].filter(number => isOdd(number));
var filtered3 = [1, 2, 3, 4, 5].filter(number => {
    return isOdd(number);
});

```

[목록으로](#-es5-주요-특징들)

### Array.reduce()

> 👨🏼‍⚖️ MDN:  
> 배열의 각 요소에 대해 주어진 _리듀서_(reducer) 함수를 실행하고,  
> _하나의_ 결과값을 반환하는 메소드입니다.

```JavaScript
Array.prototype.reduce(callbackfn:( // 콜백함수 (reducer)
    previousValue: any, // 누산기 (accumulator) 콜백의 반환 값을 누적
    currentValue: any, // 처리할 현재 요소
    currentIndex: number, // 처리할 현재 요소의 index
    array: any[] // reduce 메소드를 호출한 배열
) => any, initValue: any): any // initValue: callback 첫번째 호출에서 첫 번째 인수에 제공하는값, 없을 시 배열의 첫번째 요소를 사용

```

제가 이해한 reduce 메소드는  
반환 값이 없는 forEach 에게 반환 값을 부여해 주고,
초기값을 지정할 수 없는 forEach 에게 초기값을 부여해 줄 수 있는 메소드라고 이해했습니다.

다시 말하면 reduce 메소드는 forEach로 쓰게 되면 여러 줄이 될 코드를  
간결하고 편하게 사용할 수 있게 된 느낌으로 받아들여졌습니다.

#### Array.reduce() 🏄‍♂️ 예제

reduce 검색하면 제일 먼저 나오는 가산기 예제 입니다.

```JavaScript

var result =[1,2,3,4].reduce(function(acc,cur){
    return acc + cur;
}, 0)

console.log(result); // 10

```

forEach로 구현해보겠습니다.

```JavaScript
var result = 0;

[1,2,3,4].forEach(function(el){
    result+=el;
})

console.log(result); // 10

```

reduce 메소드는 반환 값과 초깃값 설정이 있어 한줄 코딩이 가능하다는 점이  
강점인 것 같습니다.

> ⚠️ reduce 메소드에서 첫번째 배열의 요소를 `initValue` 로 사용하시더라도  
> `initValue` 를 명시적으로 적어주는 것이 좋습니다.

[목록으로](#-es5-주요-특징들)

### Array.reduceRight()

> 👨🏼‍⚖️ 내 피셜:  
> reduce 메소드 진행 방향이 왼 -> 오가 아닌  
> 왼 <- 오 로 바뀐 메소드

배열에 관한 메소드 진행시 역순으로 실행시키고 싶다면 ~~사용을 고려해봄직한~~

⚠️ 폴리필

reduceRight는 5 판에서 ECMA-262 표준에 추가되었습니다.  
표준의 모든 구현에 존재하지 않을 수도 있습니다.

MDN의 문서를 참조하여 스크립트 시작 부분에 코드를 삽입하여 사용에 문제가 없도록 하셔야 합니다.

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight#폴리필>

[목록으로](#-es5-주요-특징들)

### Array.every()

> 👨🏼‍⚖️ MDN:  
> 배열 안의 모든 요소가 주어진 판별 함수를 통과하는지 테스트하는 메소드

```JavaScript
Array.prototype.every(predicate: (
    value: any,
    index: number,
    array: any[]
) => boolean, thisArg): boolean
```

⚠️ Attention ⚠️

- `every` 는 호출한 배열을 변형하지 않습니다.
- `every` 호출 이후로 배열에 추가하는 요소는 `callback` 이 방문하지 않습니다.
- 배열에 원래 있었지만 아직 방문하지 않은 요소가 `callback` 에 의해 변형된 경우, 그 인덱스를 방문하는 시점의 값을 사용합니다.
- 삭제한 요소는 방문하지 않습니다.

#### 🏄‍♂️ Array.even() 예제

```JavaScript
function isEvenArr (element){
    return element % 2 == 0;
}

var result1 = [0, 2, 4].every(isEvenArr);
var result2 = [0, 2, 5].every(isEvenArr);

console.log(result1); // true
console.log(result2); // false

```

⚠️ 폴리필

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/every#폴리필>

[목록으로](#-es5-주요-특징들)

### Array.some()

> 👨🏼‍⚖️ MDN:  
> 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트하는 메소드입니다.

`every` 메소드가 말 그대로 _모두_ 통과해야 `true` 를 반환하는 메소드였다면,  
`some` 메소드는 _어느 한 요소라도_ 통과하면 `true` 를 반환하는 메소드입니다.

```JavaScript
Array.prototype.some(predicate: (
    value: any,
    index: number,
    array: any[]
)=> unknown, thisArg ?: any): boolean
```

#### 🏄‍♂️ Array.some() 예제

```JavaScript
function isEvenNumber(unknown_number) {
    return unknown_number % 2 == 0;
}

[1, 2, 3].some(isEvenNumber); // true
[1, 2, 3].every(isEvenNumber); // true

```

> ⚠️ 빈 배열을 호출하면 무조건 `false` 를 반환합니다.  
> `some` 은 호출한 배열을 변형하지 않습니다.

[목록으로](#-es5-주요-특징들)

### Array.indexOf()

> 👨🏼‍⚖️ MDN:  
> 배열에서 _지정된 요소를 찾을 수 있는_  
> **첫번째 인덱스**를 반환하고  
> 존재하지 않으면 `-1` 을 반환합니다.

알고리즘 문제를 풀다보면 자주 쓰이는 메소드 중 하나입니다.

```JavaScript
Array.prototype.indexOf(searchElement: any, fromIndex?: number): number
```

#### 🏄‍♂️ Array.indexOf() 예제

```JavaScript
var myArr = ["난", "여깄지", "의미", "없는", "문자", "어딨을까", "여깄지"];

myArr.indexOf("여깄지"); // 1
myArr.indexOf("여깄지", 2); // 6
```

`fromIndex` 는 옵션입니다.  
`indexOf` 메소드가 가장 먼저 찾은 첫번째 인덱스를 반환한다는 점에서 유용하게 쓰일 수 있습니다.

> ⚠️ `fromIndex`가 배열의 길이보다 크거나 같은 경우  
> -1 이 반환되어 검색이 되지 않습니다.  
> 음수를 제공하게 되면 역순으로 검색하게 됩니다.

[목록으로](#-es5-주요-특징들)

### Array.lastIndexOf()

> 👨🏼‍⚖️ 배열에서 주어진 값을 발견할 수 있는 마지막 인덱스를 반환하고,  
> 요소가 존재하지 않으면 -1 을 반환합니다.  
> 배열 탐색은 `fromIndex` 에서 시작하여 뒤로 진행합니다.

`indexOf` 메소드와 진행 방향이 다른 것 빼고는 모두 일치합니다.  
다만, `fromIndex`에 음수를 제공해도 진행순서는 뒤에서 앞이며,  
배열의 길이보다 큰 값으로 주게되면 전체 검색을 하게 되지만,  
`배열의 길이 + fromIndex` 의 값이 0보다 작은 값이라면 **-1** 을 반환합니다.

```JavaScript
Array.prototype.lastIndexOf(searchElement: any, fromIndex: number): number
```

#### 🏄‍♂️ Array.lastIndexOf() 예제

```JavaScript
var myArr = [1, 2, 3, 4, 5, 1];

myArr.lastIndexOf(1); // 5
myArr.lastIndexOf(1, 3); // 오 -> 왼: 0
myArr.lastIndexOf(1, -1); // 왼 -> 오: 0
myArr.lastIndexOf(1, -7); // -1
```

[목록으로](#-es5-주요-특징들)

### JSON.parse()

> 👨🏼‍⚖️ MDN:  
> JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다.  
> 선택적으로, `reviver` 함수를 인수로 전달할 경우, 결과를 반환하기 전에 변형할 수 있습니다.

```JavaScript
JSON.parse(text: string, reviver?: (
    key: string,
    value: any
) => any): any

```

#### 🏄‍♂️ JSON.parse() 예제

```JavaScript
JSON.parse('{"key":"1"}') // { key: '1' }
JSON.parse("{'key':'1'}") // SyntaxError: Unexpected token '

// ⚠️ 후행 쉼표 사용 불가
JSON.parse('[1, 2, 3, 4, ]'); // SyntaxError
JSON.parse('{"foo" : 1, }'); // SyntaxError
```

#### reviver 매개변수 사용하기

`reviver` 가 주어지면 분석한 값을 반환하기 전에 **변환**합니다.

```JavaScript
JSON.parse('{"p": 5}', function (key, value) {
    if(typeof value === 'number') {
        return value * 2; // 숫자라면 2배
    }else{
        return value; // 나머진 그대로
    }
});

// { p : 10 }
```

[목록으로](#-es5-주요-특징들)

### JSON.stringify()

> 👨🏼‍⚖️ MDN:  
> JavaScript 값이나 객체를 JSON **문자열로** 변환합니다.  
> 선택적으로, `replacer` 함수를 전달할 경우 변환 전 값을 변형할 수 있고,  
> 배열로 전달할 경우 지정한 속성만 결과에 포함합니다.

```JavaScript
JSON.stringify(value: any, replacer?:(
    key: string,
    value: any
)=> any, space?: string | number): string
```

`value`: JSON 문자열로 변환할 값,
`replacer`:  
문자열화 동작 방식을 변경하는 함수, 혹은 JSON 문자열에 포함될 값 객체의 속성들을  
선택하기 위한 화이트리스트로 쓰이는 `String`과 `Number` 객체들의 배열  
이 값이 null 이거나 제공되지 않으면, 객체의 모든 속성들이 문자열로 포함된다.
`space`:  
가독성을 목적으로 JSON 문자열 출력에 공백을 삽입하는데 사용되는 `String` 또는 `Number` 객체  
`Number`일 경우 사용되는 스페이스(Space)의 수를 나타낸다. (_10이 최대_)  
1보다 작은 값은 스페이스가 사용되지 않는 것을 나타낸다.  
`String`일 경우 그 문자열(만약 길이가 10보다 길다면 첫번째 10개의 문자)이 공백으로 사용된다.  
이 값이 null 이거나 제공되지 않으면, 공백이 사용되지 않는다.

#### 🏄‍♂️ JSON.stringify() 예제

```JavaScript
JSON.stringify(new Date("2020-11-24"))
// "2020-11-24T00:00:00.000Z"
JSON.stringify({ x : 5 }) // {"x":5}
```

#### replacer

```JavaScript
// string type 은 변환하지 않겠다는 의지
function replacer(key, value){
    if (typeof value === "string"){
        return undefined;
    }
    return value;
}

var foo = {
    foundation: "Mozilla",
    model: "box",
    week: 45,
    transport: "car",
    month: 7
}

JSON.stringify(foo, replacer) // {"week":45,"month":7}
// 배열의 경우, 배열안의 요소만을 속성으로 변환합니다.
JSON.stringify(foo, ['week', 'month']) // {"week":45,"month":7}
```

#### space

`space` 매개변수는 최종 문자열의 간격을 제어합니다.  
'\t' 을 사용하면 일반적으로 들여쓰기 된 코드스타일과 유사합니다.

```JavaScript
/*
{
 "a": 2
}
*/
JSON.stringify({ a: 2 }, null, 1);
JSON.stringify({ a: 2 }, null, " ");

/*
{
          "a": 2
}
*/
JSON.stringify({ a: 2 }, null, 10);

/*
{
        "a": 2 // 일반적이지 않은 것 같은데요...
}
*/
JSON.stringify({ a: 2 }, null, "\t");
```

[목록으로](#-es5-주요-특징들)

### Date.now()

> 👨🏼‍⚖️ MDN:  
> UTC 기준으로 1970년 1월 1일 0시 0분 0초부터 현재까지 경과된  
> 밀리 초를 반환합니다.

#### ⚠️ 폴리필

<https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Date/now#Polyfill>

[목록으로](#-es5-주요-특징들)

### Function.prototype.bind()

> 👨🏼‍⚖️ MDN:  
> `bind()` 메소드가 호출되면 새로운 함수를 생성합니다.  
> 받게되는 첫 인자의 value로는 this 키워드를 설정하고,  
> 이어지는 인자들은 바인드된 함수의 인수에 제공됩니다.

```JavaScript
Function.prototype.bind(thisArg: any, ...argArray: any[]): any

```

`thisArg`:  
바인딩 함수가 대상 함수의 this에 전달하는 값입니다.  
바인딩 함수를 `new` 연산자로 생성한 경우 무시됩니다.

반환값:  
지정한 this 값 및 초기 인수를 사용하여 변경한 원본 함수의 복제본

#### 🏄‍♂️ bind 예제

```JavaScript
this.x = 9;
// 노드 환경 global.x = 9 와 같습니다.
// 브라우저 window.x = 9
const myModule = {
    x: 43,
    getX: function (){
        return this.x;
    }
}

const unboundedGetX = myModule.getX;
console.log(unboundedGetX()); // 9
// 함수가 전역 스코프에서 호출되었기 때문에

// myModule과 바인딩된 `this`가 있는 새로운 함수 생성
const boundedGetX = unboundedGetX.bind(myModule);
console.log(boundedGetX()); // 43

```

[목록으로](#-es5-주요-특징들)

### call, apply

> 👨🏼‍⚖️ MDN:  
> `call()` 메소드는 주어진 `this` 값 및 각각 전달된 인수와 함께 함수를 호출합니다.

```txt
⚠️ 이 메소드는 `apply()` 와 거의 동일하지만,
`call()` 은 **인수 목록**을, 반면에 `apply()` 는 **인수 배열 하나**를 받는다는 점이 중요한 차이점입니다.
```

```JavaScript
Function.prototype.call(thisArg: any, ...argArray: any[]): any
```

`thisArg`:  
call을 호출한 함수에 제공되는 `this`의 값

#### 🏄‍♂️ call, apply 예시

함수의 **arguments**  
함수에 들어온 인자를 _유사 배열의_ 형식으로 반환합니다.

```JavaScript
function example(){
    console.log(arguments);
}

example(1, 'string', true); // [1, 'string', true];
```

`arguments`는 유사 배열이기 때문에 `join` 과 같은 배열의 메소드는 사용할 수 없습니다.

```JavaScript
function example(){
    console.log(arguments.join());
}
example(1, 'string', true); // TypeError: arguments.join is not a function
```

이런 경우 `call` 을 사용하면

```JavaScript
function example(){
    console.log(Array.prototype.join.call(arguments));
}

example(1, 'string', true); // '1,string,true'

```

해결이 가능합니다.

#### 생성자 함수로서 호출

```JavaScript
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product(name, price);
    this.category = "food";
}

const myfood = new Food("cheese", 5);

console.log(myfood); // Food { category: 'food'}

```

`this`는 호출되는 순간에 정해진다고 했던 것 같은데  
왜 Food에 name과 price가 제대로 들어가지 않았을까?

Product 함수 자체가 갖고있는 `this` 때문에 그렇습니다.  
이를 해결하기 위한 방법 중 하나로 call을 사용해 봅시다.

```JavaScript
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    // Product.apply(this, [name, price]); apply는 인수 배열!
    this.category = "food";
}

const myfood = new Food("cheese", 5);

console.log(myfood); // Food { name: 'cheese', price: 5, category: 'food' }
```

[목록으로](#-es5-주요-특징들)

## 참고 문서 및 블로그

ES5 참고 블로그: <https://k39335.tistory.com/81>  
ES5 참고 문서: <https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference>  
forEach Break 참고: <https://stackoverflow.com/questions/6260756/how-to-stop-javascript-foreach>  
call, apply, bind: <https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd>
