<h1 align="center">ECMAScript 2017</h1>

<p align="center">
    <img width="380"  alt="ECMAscript" src="https://images.unsplash.com/photo-1513885897901-c41bcf10a1ea?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
</p>

## 🚀 Intro

ES8는 ECMAScript가 2017년에 발표한 표준 자바스크립트 8번째 에디션입니다.

## 👀 ES8 주요 특징들

- String padding
- [Object.values()](#objectvalues)
- Object.entries()
- getOwnPropertyDescriptors()
  - In what way is this useful?
- Trailing commas
- Async functions
  - Why they are useful
  - A quick example
  - Multiple async functions in series
- Shared Memory and Atomics

---

### Object.values()

### 정의

> 👨🏼‍⚖️ MDN Says:  
> `Object.values()` 메소드는 전달된 파라미터 객체가 가지는 (열거 가능한)  
> 속성의 값들로 이루어진 _배열을 리턴합니다._
> 이 배열은 `for...in` 구문과 동일한 순서를 가집니다.

### Syntax

> Object.values(obj)

#### Parameters

`obj`: 배열로 전환할 **열거 가능한** 속성을 가지는 객체

#### Return values

전달된 객체의 속성 **값**들을 포함하는 배열

### Example

```JavaScript
var obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // ['bar', 42]

// 유사 배열 (숫자를 속성으로 사용하는 객체)
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj)); // ['a', 'b', 'c']

// 유사 배열의 경의 속성으로 사용한 숫자의 크기 순으로 정렬되어 반환됩니다.
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // ['b', 'c', 'a']

// getFoo는 열거 가능한 속성이 아니라서 배열에 포함되지 않습니다.
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // ['bar']

// 객체가 아닌 경우에는 객체로 강제로 변환되어 적용됩니다.
console.log(Object.values('foo')); // ['f', 'o', 'o']
```

### 문제로 풀어보기

- [두 개 뽑아서 더하기](https://github.com/Minsoo-web/js_algorithm/blob/master/programmers/level_1/%EB%91%90_%EA%B0%9C_%EB%BD%91%EC%95%84%EC%84%9C_%EB%8D%94%ED%95%98%EA%B8%B0/description.md)

[목록으로](#-es8-주요-특징들)

---

## 참고 문헌

- https://flaviocopes.com/es2017/
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference
