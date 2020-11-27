# Variables

## 📖 index

- [let and const](#letandconst)
- Block Scope

### let and const

#### 🚀 intro

<p align="center">
    <image alt="var" src="../../images/es6/es6_var.jpg">
</p>

> var 는 더이상은 naver,,,

기존에 c++ 이나 java 와 같은 정적타입의 언어를 공부하시던 분들은 JS 를 공부하실때  
처음 느끼는 낯선 점이 바로 `var` 일 것입니다. 🤦

Array, Int, String, Char 등등 모든 타입을 프로그래머가 변수의 타입을 직접 명시해 주어야 하는 언어를  
`정적 타입 언어 (Statically typed language)` 라고 합니다.

python과 JS 처럼 우선 변수를 선언해서 코드를 작성한 뒤, 런타임에 타입이 결정되는 언어들을  
`동적 타입 언어(Dynamically typed language)` 라고 합니다.

이러한 _동적 타입의 언어_ 들이 갖는 장단점이 분명히 있지만 모든 것을 `var` 로 퉁쳐버리는 JS의 특징은 많은 개발자에게 불편함을 안겨주기도 했습니다.

그러한 니즈를 해결해줄 수 있는 것이 바로 `let`과 `const` 입니다.  
하나하나 살펴보겠습니다!

#### let

> 👨🏼‍⚖️ MDN:  
> `let` 구문은 **블록 유효 범위**를 갖는 지역 변수를 선언하며,  
> 선언과 동시에 임의의 초기 값으로 초기화할 수도 있다.

#### 블록 유효 범위란

프로그래밍 언어에서 변수는 참조할 수 있는 범위가 존재합니다.  
그래서 변수는 선언된 위치에 따라 유효 범위를 갖게 됩니다.  
`let`과 `var` 그리고 `const`가 갖고있는 유효 범위에 대해 알아보겠습니다.

1\. var - 함수 레벨 범위 (Function Level Scope)

`var` 키워드를 사용하여 변수를 선언하면, 그 변수는 함수 레벨 범위를 갖습니다.

```JavaScript
function foo(){
    if(true){
        var x = 10;
    }
    console.log(x);
}

foo(); // 10
console.log(x); // Error!
```

`foo()` 함수 내에서는 `x`가 어디서 쓰이든 참조가 가능하기 때문에  
`console.log(x)` 가 에러가 나지 않습니다. 하지만 `foo()` 함수 밖에서 `x`를 참조하게 될 경우에는  
유효 범위를 벗어난 곳에서 `x` 를 호출한 경우이므로 Error 가 발생하게 되는 것입니다.

2\. let, const - 블록 레벨 스코프 (Block Level Scope)

## 참고 문서

[정적 타입 언어와 동적 타입 언어](https://inpages.tistory.com/95)
[변수의 유효 범위](https://victorydntmd.tistory.com/45)
